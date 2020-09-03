import * as React from "react"

function MapIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
      <symbol id="prefix__map" viewBox="0 -40 40 40">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFF"
          d="M0-39v37.95C0-.35.333 0 1 0h37.95C39.65 0 40-.35 40-1.05V-39c0-.667-.35-1-1.05-1H1c-.667 0-1 .333-1 1z"
        />
        <path class="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#626262"
          d="M20-19.149c.733 0 1.333.233 1.8.7.5.5.75 1.1.75 1.8s-.25 1.3-.75 1.8c-.467.5-1.067.75-1.8.75-.7 0-1.284-.25-1.75-.75-.5-.5-.75-1.1-.75-1.8s.25-1.3.75-1.8c.466-.468 1.05-.7 1.75-.7zM19.9-11h.3c2.267-.067 3.983-1.1 5.15-3.1 1.167-2.067 1.184-4.117.05-6.15l-4.4-8.2c-.267-.366-.6-.55-1-.55-.434 0-.733.183-.9.55l-4.5 8.2c-1.1 2.1-1.05 4.15.15 6.15 1.133 2 2.85 3.034 5.15 3.1z"
        />
      </symbol>
      <use
        xlinkHref="#prefix__map"
        width={40}
        height={40}
        y={-40}
        transform="matrix(1 0 0 -1 .35 0)"
        overflow="visible"
      />
    </svg>
  )
}

export default MapIcon
