import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  cell: {
    fontSize: 16
  },

  label: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingBottom: 5
  },

  content: {
    flex: 3
  },

  collapsed: {
    maxHeight: 60
  },

  expanded: {
    flex: 1
  }
});

export default styles;