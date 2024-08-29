import React from 'react';
import {StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';






export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 220, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, color: '#000', fontWeight: 'bold' }}>Bazzaar</Text>
        <Image  
            source={require('../../src/img/estilos-moda.jpg')}
             style={styles.imagem} />
     
        
        
       
      


      </View>

    </ScrollView >
  );
}

const styles = StyleSheet.create({
  imagem: {
    
    margin: 20,
    height: 200,
    width: '100%',
    borderRadius: 10
  },
 
})