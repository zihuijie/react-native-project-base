import React from 'react';

import { Container, Spinner } from 'native-base';

import styles from './styles';

const Loading = () => (
  <Container style={styles.container}>
    <Spinner style={styles.spinner} />
  </Container>
);

export default Loading;
