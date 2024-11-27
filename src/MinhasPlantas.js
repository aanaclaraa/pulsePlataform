import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, View, Alert, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MinhasPlantas = () => {
  const navigation = useNavigation();
  const [plants, setPlants] = useState([]);
  const apiUrl = 'http://10.139.75.84:5251/api/MinhasPlantas/GetAllMinhasPlantas'; // URL da API

  const fetchPlants = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Erro ao buscar plantas');
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error('Erro ao buscar plantas:', error);
      Alert.alert('Erro ao carregar plantas', 'Não foi possível carregar os dados.');
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo-floralis.png')}
          style={styles.logo}
        />
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.navItem}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Relatorio')}>
            <Text style={styles.navItem}>Relatório</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Título principal */}
      <Text style={styles.heading}>Lista de Plantas</Text>

      {/* Exibindo plantas ou mensagem de erro */}
      {plants.length === 0 ? (
        <Text style={styles.noPlantsText}>Nenhuma planta encontrada.</Text>
      ) : (
        plants.map((plant) => (
          <View key={plant.id} style={styles.plantContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.plantasTipo}>{plant.minhasPlantasTipo}</Text>
              <Text style={styles.plantasDescricao}>{plant.minhasplantasDescricao}</Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFF3', // Fundo suave e natural
    padding: -1,
  },
  header: {
    backgroundColor: '#A5D6A7', // Verde suave para o cabeçalho
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3, // Sombra mais leve para o cabeçalho
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20, // Espaçamento abaixo do cabeçalho
  },
  logo: {
    width: 60, // Tamanho ajustado para o logo
    height: 50, // Tamanho ajustado para o logo
    resizeMode: 'contain', 
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    color: '#388E3C',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C', // Cor verde para o título
    marginBottom: 20,
    textAlign: 'center',
  },
  noPlantsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  plantContainer: {
    backgroundColor: '#E8F5E9', // Fundo claro para contraste
    borderWidth: 1,
    borderColor: '#81C784', // Verde suave para bordas
    borderRadius: 12, // Borda arredondada
    padding: 18,
    marginVertical: 12, // Maior espaçamento entre os cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Menos opacidade da sombra
    shadowRadius: 4,
    elevation: 4, // Elevação suave no Android
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  plantasTipo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C', // Cor verde para o tipo de planta
  },
  plantasDescricao: {
    fontSize: 14,
    color: 'lightgray', // Texto descritivo em cinza claro
    marginTop: 5,
  },
});

export default MinhasPlantas;