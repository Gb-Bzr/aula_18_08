import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text>Nome: {nome}</Text>
    </View>
  );
}