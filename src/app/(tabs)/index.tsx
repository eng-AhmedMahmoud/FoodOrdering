import { View} from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function ProductMenu() {
  
  return (
    <View>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </View>
  );
}