import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.5);
  }
`;

// Outros componentes estilizados
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`;

export const Info = styled.div`
  padding: 20px;
  z-index: 2;
  width: 50%;

  h1 {
    font-size: 60px;
    font-weight: 700;
    color: #ffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const Poster = styled.div`
  z-index: 3;

  img {
    width: 400px;
    border-radius: 30px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
