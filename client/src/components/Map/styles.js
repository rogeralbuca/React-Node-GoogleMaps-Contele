import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Cluster = styled.div`
  color: var(--white);
  background: var(--cluster);
  border-radius: 50%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${ props => (props.pointCount / props.points) * 30 }px;
  height: ${ props => (props.pointCount / props.points) * 30 }px;
`;