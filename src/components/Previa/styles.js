import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  padding: 5px;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  font-family: 'Ubuntu_700Bold';
`;

export const List = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`
  margin-top: 5px;
`;


export const Serie = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  margin-right: 7px;
  border: 0.8px solid #f5f5f5;
`;
