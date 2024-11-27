import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sobre = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
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
          <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.navItem}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Relatorio')}>
            <Text style={styles.navItem}>Relatório</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Título principal */}
      <Text style={styles.heading}>Sobre o Aplicativo</Text>

      {/* Descrição do aplicativo */}
      <Text style={styles.subheading}>
        O Floralis é um aplicativo dedicado ao cuidado e cultivo de plantas. Com ele, você pode explorar um catálogo de
        plantas, obter dicas sobre como cuidar delas, e muito mais. Seja para quem está começando ou para quem já é um
        expert no assunto, o Floralis tem algo para todos!
      </Text>

      {/* Funcionalidades principais */}
      <Text style={styles.sectionTitle}>Funcionalidades</Text>
      <Text style={styles.description}>
        - Descubra plantas populares e raras.
      </Text>
      <Text style={styles.description}>
        - Receba dicas personalizadas de cuidados para suas plantas.
      </Text>
      <Text style={styles.description}>
        - Organize suas plantas em categorias de forma simples e intuitiva.
      </Text>

      {/* Botão de navegação */}
      <Text style={styles.sectionTitle}>Vamos começar a explorar!</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
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
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3, // Sombra mais leve
    borderBottomLeftRadius: 10, // Arredondamento suave
    borderBottomRightRadius: 10, // Arredondamento suave
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
    color: '#388E3C', // Cor verde para os itens de navegação
    marginHorizontal: 15,
    fontSize: 14, // Fonte menor
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#388E3C', // Linha verde embaixo
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388E3C', // Cor verde para o título
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#388E3C', // Cor verde para as seções
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#388E3C', // Cor verde para o botão
    padding: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Sobre;