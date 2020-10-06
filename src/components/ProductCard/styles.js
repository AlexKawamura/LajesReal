import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 10,
    height: Dimensions.get('window').width / 2,
  },

  card: {
    flex: 1,
    borderRadius: 20,
    elevation: 4
  },

  picture: {
    borderRadius: 20
  },

  cardTitleContainer: {
    backgroundColor: '#1B262C',
    opacity: 0.8,
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  cardTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default styles;