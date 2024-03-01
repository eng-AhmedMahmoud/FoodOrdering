import { StyleSheet, Text, View, Image  } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '@/src/types';

const defaultURI = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fno-image&psig=AOvVaw'

type ProductListItemProps = {
  product: Product
}

export default function ProductListItem({ product }: ProductListItemProps) {

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultURI }} style={styles.image} />
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