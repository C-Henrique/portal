import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 300px);
  background: #073b4c;
  color: white;
  margin-top: 7rem;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const FooterTitle = styled.div`
  display: flex;
  align-self: flex-start;
  padding: 5px 10px;
  font-family: 'Inter', sans-serif;
  > h3 {
    margin-top: 2rem;
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
  }
`;

export const FooterInfor = styled.div`
  display: flex;
  gap: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  > div {
    padding: 5px 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.3px);
    -webkit-backdrop-filter: blur(2.3px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.3s ease-in-out;
  }
`;
