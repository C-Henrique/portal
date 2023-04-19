import styled from 'styled-components';

export const BannerContainer = styled.div`
  background: #073b4c;
  height: 60vh;
`;

export const BannerTitle = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70%;
  padding: 5xp;
  > h1 {
    font-size: 50px;
    color: white;
  }
  > div > span {
    color: white;
    font-size: 50px;
    text-align: center;
  }
`;
export const Autenticar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    width: 15%;
    color: white;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    text-align: center;
    border-radius: 20px;
    padding: 20px 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.3px);
    -webkit-backdrop-filter: blur(2.3px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 5);
    }
  }
`;
