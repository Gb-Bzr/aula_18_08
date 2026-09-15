import { Image, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Image
        source={{ uri: 'https://site.com/foto.png' }}
        style={{ width: 100, height: 100 }}
      />

      <Image
        source={require('./logo.png')}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}