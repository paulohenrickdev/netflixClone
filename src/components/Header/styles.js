import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-top: 10px;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 40px;
`;

export const Options = styled.Text`
  color: #fff;
  font-size: 13px;
  font-family: 'Roboto_700Bold'
`;
