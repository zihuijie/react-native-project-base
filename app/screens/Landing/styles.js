import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    height: null,
    width: null,
  },
  text: {
    color: '$white',
  },
});

export default styles;
