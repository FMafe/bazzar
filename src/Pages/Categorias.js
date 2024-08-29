import { StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';
import Card from '../components/Card';

import feminina from '../Data/feminina'
import masculina from '../Data/masculina'

export default function Categorias() {
  return (
    <ScrollView>
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 15,fontWeight: 'bold' , color: '#000', margin:7 }}>Moda Feminina</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={feminina}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <Card item={item} />
                );
              }}
            />
          </View>


          <View style={{ justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ fontSize: 15, fontWeight: 'bold' , color: '#000', margin:7 }}>Moda Masculina</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={masculina}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <Card item={item} />
                );
              }}
            />
          </View>
      </View>
    </ScrollView>
  );
}