import { StyleSheet, Text, View, Image  } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

export default function TabOneScreen() {

  const product = products[0];

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.light.background,
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  image: {
    width: '100%' ,
    aspectRatio: 1,
  },
});
