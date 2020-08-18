import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  font-family: 'Ubuntu_700Bold';
`;

export const Image = styled.Image`
  margin-top: 5px;
  height: 250px;
  width: 100%;
`;

export const ContainerActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 3px;
`;

export const ContainerPlay = styled.View`
  background: #f5f5f5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 180px;
  border-radius: 3px;
`;

export const TextPlay = styled.Text`
  font-size: 13px;
  color: #000;
  font-weight: bold;
  font-family: 'Roboto_700Bold';
  margin-left: 5px;
`;

export const ContainerList = styled.View`
  background: rgba(255, 255, 255, 0.3);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 180px;
  border-radius: 3px;
`;

export const TextList = styled.Text`
  font-size: 13px;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto_700Bold';
  margin-left: 5px;
`;
