import { StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView>
      <View style={styles.tabela}>
        <View style={{ flexDirection: 'column', margin: 15 }}>
          <View style={{width: '45%' }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold' , color: '#000', margin:7 }}>Bem Vindo ao BAZZAAR</Text>
            <Text style={{ fontSize: 12, color: '#000', margin:7 }}>Nossos produtos são inspitados pelas pessoas que
              estão à nossa volta, com suas belezas e qualidades.
              Produtos de bom gosto especialmente para você.
            </Text>
          </View>
          <View>
          <Image  
              source={require('../../src/img/bem-vindo.jpg')}
              style={styles.imagem2}/>
          </View>
        </View>

        <View style={{ flexDirection: 'column', margin: 15 }}>
          <View style={{width: '45%', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>
            
            <Text style={{ fontSize: 10, color: '#000', margin:7, alignItems: 'center' }}>
              Rua Eusébio 10
              Centro, Cidade das Águras
            </Text>
            <Text style={{ fontSize: 10, color: '#000', margin:7 }}>
              Aberta de segunda a sexta das 10h às 19h
            </Text>


          </View>
          <View>
          <Image  
              source={require('../../src/img/loja.jpg')}
              style={styles.imagem3}/>
          </View>
        </View> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabela: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem2: {
    borderRadius: 10,
    width: 220,
  },
  imagem3: {
    borderRadius: 10,
    width: 220,
    height: 120
  }
})