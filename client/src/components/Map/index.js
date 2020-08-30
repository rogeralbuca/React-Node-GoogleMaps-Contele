import React, { useEffect, useState, useRef } from 'react';
import GoogleMap from 'google-map-react';
import useSupercluster from 'use-supercluster';
import { Container, Cluster } from './styles';
import Api from '../../services/api'
import Place from '../Place'

const Marker = ({ children }) => children;

function Map() {

  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [data, setData] = useState([]);

  const points = data.map((place, index) => ({
    type: "Feature",
    properties: { cluster: false, id: index, name: place.name },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(place.longitude),
        parseFloat(place.latitude)
      ]
    }
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  useEffect(() => {
    async function fetchData() {
      const response = await Api.contele.get();
      const data = response.data;
      setData(data)
    }
    fetchData();
  }, []);

  function handleClick(cluster, latitude, longitude) {
      const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20);
      mapRef.current.setZoom(expansionZoom);
      mapRef.current.panTo({ lat: latitude, lng: longitude });
  }

  return (
    <Container>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: -23.5489, lng: -46.6388 }}
        defaultZoom={5}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([ bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat
          ]);
        }}>
        
        {clusters.map( cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount} = cluster.properties;
          if (isCluster) {
            return (
              <Marker
                key={`marker-${cluster.id}`}
                lat={latitude}
                lng={longitude}>
                <Cluster
                  id={`cluster-${cluster.id}`}
                  className="cluster-marker"
                  pointCount={pointCount}
                  points={points.length}
                  onClick={() => handleClick(cluster, latitude, longitude)}>
                  {pointCount}
                </Cluster>
              </Marker>
            );
          }

          return (
            <Marker
              key={`place-${cluster.properties.id}`}
              lat={latitude}
              lng={longitude}>
              <Place id={`svg-${cluster.properties.id}`}/>
            </Marker>
          );
        })}

      </GoogleMap>

    </Container>
  );
}

export default Map;
