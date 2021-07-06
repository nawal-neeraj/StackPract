import React from 'react';
import { View, Text } from 'react-native';
import { Header, Container } from 'native-base';

export default function componentName() {
  return (
    <Container>
      <Header style={{ backgroundColor: AppTheme.PRIMARY }} translucent={ false }>
        {props.children}
      </Header>
     </Container>
  );
}
