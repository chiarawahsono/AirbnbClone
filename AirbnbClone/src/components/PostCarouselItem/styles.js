import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    margin: 5,
  },
  innterContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export default styles;
