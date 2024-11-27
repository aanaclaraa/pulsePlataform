import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProjetoArvores = () => {
  const navigation = useNavigation();

  const [projetos, setProjetos] = useState([
    {
      id: 1,
      nome: 'Ipê Amarelo',
      descricao: 'Uma das árvores mais lindas do Brasil, conhecida por suas flores vibrantes.',
      imagem: 'https://example.com/imagem-ipe-amarelo.jpg',
    },
    {
      id: 2,
      nome: 'Cerejeira',
      descricao: 'Árvore icônica com flores rosa, comum no Japão e em áreas temperadas.',
      imagem: 'https://example.com/imagem-cerejeira.jpg',
    },
    {
      id: 3,
      nome: 'Jatobá',
      descricao: 'Árvore nativa da Amazônia, valorizada por sua madeira e frutos.',
      imagem: 'https://example.com/imagem-jatoba.jpg',
    },
  ]);

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
          <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
            <Text style={styles.navItem}>Contato</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Título */}
      <Text style={styles.heading}>Projeto de Árvores</Text>

      {/* Lista de Projetos */}
      {projetos.map((projeto) => (
        <View key={projeto.id} style={styles.card}>
          <Image
            source={{ uri: projeto.imagem }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>{projeto.nome}</Text>
          <Text style={styles.cardDescription}>{projeto.descricao}</Text>
        </View>
      ))}

      {/* Botão de navegação */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar à Tela Inicial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFF3',
    padding: 20,
  },
  header: {
    backgroundColor: '#A5D6A7',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logo: {
    width: 50,
    height: 60,
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
    color: '#388E3C',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#E8F5E9',
    borderWidth: 1,
    borderColor: '#81C784',
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#388E3C',
    padding: 15,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProjetoArvores;