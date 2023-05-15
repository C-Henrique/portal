import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 270px;
  height: 210px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 6px 9px -1px;
  padding: 20px;
  font-family: 'Inter', sans-serif;
  margin: 20px;
  transition: 0.2s ease-in-out;
  border-top: 3px solid ${(props) => props.color};
  &:hover {
    box-shadow: 0px 30px 40px -20px hsl(234, 12%, 34%);
  }
`;

export const CardTitle = styled.div`
  font-size: 18px;
  text-align: left;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
`;
export const CardDes = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;
export const CardLink = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px auto;
  font-weight: 500;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
`;
export const LinkImg = styled.div`
  display: flex;
  justify-content: center;
  flex: auto;
  > img {
    width: 48px;
    height: 48px;
  }
`;
export const LinkUrl = styled.div`
  font-family: 'Inter', sans-serif;
  padding: 10px 15px;
  font-weight: 400;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;
  position: relative;

  > button {
    border: none;
    background: none;
    cursor: pointer;
    list-style: none;
    padding: 0px;
    text-decoration: none;
    margin-right: 0px;
    font-size: 15px;
    font-weight: 600;
  }
  &:hover {
    box-shadow: 0px 1px 6px -1px ${(props) => props.color};
    > i {
      color: ${(props) => props.color};
    }
  }
`;
