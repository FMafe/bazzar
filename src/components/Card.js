import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';


export default function Card({ item }) {

  const navigation = useNavigation();

  return (

    <TouchableOpacity style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { item })}

    >
      <Image
        style={styles.cardImg}
        source={{ uri: item.imagem }}
      />
      <Text style={styles.titulo}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco}</Text>
    </TouchableOpacity>


  );
}

const styles = StyleSheet.create({
  card: {
    height: 'auto',
    width: 150,
    marginLeft: 15
  },
  cardImg: {
    marginBottom: 6,
    height: 200,
    width: '100%',
    borderRadius: 10
  },
  titulo: {
    fontSize: 18,
    marginBottom: 4,
    color: '#000'
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  }
})