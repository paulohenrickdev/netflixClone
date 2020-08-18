import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  margin-top: 410px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto_700Bold';
`;

export const ContainerTypes = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Type = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
  margin-left: 10px;
  font-family: 'Ubuntu_400Regular';
`;

export const TypeButton = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
`;

export const Divider = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: #ffdb4d;
`;

export const ContainerOptions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContentContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContentContainerColor = styled.View`
  flex-direction: row;
  align-items: center;
  height: 37px;
  width: 100px;
  justify-content: center;
  background: #f5f5f5;
  padding: 8px;
  border-radius: 5px;
`;

export const TypeColor = styled.Text`
  color: #000;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
  font-family: 'Roboto_700Bold'
`;