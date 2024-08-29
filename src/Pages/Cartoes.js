import { StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';

export default function Cartoes() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: '#000', fontWeight: 'bold' }}>Aceitamos cartões:</Text>
        <Image source={require('../../src/img/cartoes.jpg')} style={styles.cartao} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 220,
    flexDirection: 'column', // Para alinhar as imagens na horizontal
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  cartao: {
    width: '90%', 
    height: 200, 
    margin: 20, 
  },
});