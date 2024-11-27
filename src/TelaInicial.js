import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";

const PlantItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(item.name)}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.name}</Text>
    {item.description && <Text style={styles.description}>{item.description}</Text>}
  </TouchableOpacity>
);

const TelaInicial = () => {
  const navigation = useNavigation();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const plants = [
    { id: '1', name: 'Samambaia', image: require('../assets/samambaia.jpeg'), description: 'Ideal para áreas internas e bem iluminadas.' },
    { id: '2', name: 'Lírio-da-Paz', image: require('../assets/lirio-da-paz.jpg'), description: 'Planta elegante que floresce em ambientes frescos.' },
  ];

  const featuredPlants = [
    { id: 1, name: 'Suculentas', image: require('../assets/suculentas.jpg') },
    { id: 2, name: 'Bromélia', image: require('../assets/bromelia.jpeg') },
    { id: 3, name: 'Orquídea', image: require('../assets/orquidea.jpg') },
    { id: 4, name: 'Costela-de-Adão', image: require('../assets/costela-de-adao.jpg') },
  ];

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Sem Conexão com a Internet</Text>
        <Text style={styles.subheading}>Por favor, verifique sua conexão e tente novamente.</Text>
      </View>
    );
  }

  const viewPlantDetails = (name) => {
    console.log('Visualizando informações da planta:', name);
  };

  const navigateToUpgrade = () => {
    navigation.navigate('Upgrade');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('../assets/logo-floralis.png')} style={styles.logo} />
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MinhasPlantas')}>
            <Text style={styles.navItem}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Relatorio')}>
            <Text style={styles.navItem}>Relatório</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.heading}>Explore o Mundo das Plantas</Text>

      <Text style={styles.sectionTitle}>Plantas Populares</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {plants.map(plant => (
          <PlantItem key={plant.id} item={plant} onPress={viewPlantDetails} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Plantas em Catálogo</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredPlants.map(plant => (
          <PlantItem key={plant.id} item={plant} onPress={viewPlantDetails} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Obtenha dicas exclusivas para cuidar das suas plantas</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToUpgrade}>
        <Text style={styles.buttonText}>Cuidados</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFF3', // Cor de fundo mais suave e natural
    padding: -1,
  },
  header: {
    backgroundColor: '#A5D6A7', // Verde suave para o cabeçalho
    paddingTop: 20, // Reduzido o padding superior para um cabeçalho menor
    paddingBottom: 10, // Reduzido o padding inferior
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3, // Sombra mais leve para o cabeçalho
    borderBottomLeftRadius: 10, // Arredondamento mais sutil
    borderBottomRightRadius: 10, // Arredondamento mais sutil
  },
  logo: {
    width: 50, // Diminuído o tamanho do logo
    height: 60, // Diminuído o tamanho do logo
    resizeMode: 'contain', 
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    color: '#1B5E20', // Tom de verde mais forte para o texto
    marginHorizontal: 15,
    fontSize: 14, // Fonte menor
    fontWeight: 'bold',
    textTransform: 'uppercase', // Deixa os itens em maiúsculo para dar ênfase
    paddingVertical: 4, // Menos espaço ao redor dos itens de navegação
    borderBottomWidth: 1, // Linha mais fina embaixo
    borderBottomColor: '#388E3C', // Adiciona uma linha embaixo para destaque
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388E3C', // Verde forte para o título
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#1B5E20',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#388E3C', // Cor consistente com a tela Home
  },
  item: {
    backgroundColor: '#E8F5E9', // Cor de fundo suave para os itens
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Leve sombra para os itens
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    color: '#388E3C', // Cor do texto do título
  },
  description: {
    fontSize: 14,
    color: '#1B5E20', // Cor do texto de descrição
  },
  button: {
    backgroundColor: '#388E3C', // Cor do botão
    padding: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TelaInicial;