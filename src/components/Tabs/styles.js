import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 }, 
    showsHorizontalScrollIndicator: false
})``;

export const TabItem = styled.View`
    width: 90px;
    height: 90px;
    background: #9400D3;
    border-radius: 50px;
    margin-left: 10px;
    padding: 20px;
    justify-content: space-between;
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #FFF;
`;