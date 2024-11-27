import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';

const Home = ({ navigation }) => { 
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo-floralis.png')}
          style={styles.logo}
        />
        <View style={styles.nav}>
          <Text style={styles.navItem}>Tela Inicial</Text>
          <Text style={styles.navItem}>Sobre</Text>
          <Text style={styles.navItem}>Cuidados</Text>
        </View>
      </View>

      {/* Banner Principal */}
      <ImageBackground 
        source={{ uri: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/02/28/fundo-de-planta-de-casa-verde-para-amantes-de-plantas-qxw5pp3r4wmq.jpg' }} 
        style={styles.banner}
        imageStyle={styles.bannerImage}
      >
        <Text style={styles.bannerText}>Seja Bem-Vindo a Floralis</Text>
      </ImageBackground>

      {/* Seção de Conteúdo */}
      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Conheça o mundo das Plantas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Cuidados que sua Planta Precisa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Ver novo Projeto</Text>
        </TouchableOpacity>
        
        {/* Botão para navegar para a tela inicial */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('TelaInicial')} // Navegar para a tela inicial
        >
          <Text style={styles.buttonText}>Ir para a Tela Inicial</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFF3', // Fundo suave e natural
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
  banner: {
    height: 250, // Altura aumentada para destaque
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    opacity: 0.8, // Deixa a imagem mais visível
  },
  bannerText: {
    color: '#FFF',
    fontSize: 24, // Fonte menor para o texto do banner
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#2C5E29',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#E8F5E9', // Fundo claro para contraste
    borderWidth: 1,
    borderColor: '#81C784', // Verde mais suave para bordas
    borderRadius: 12, // Borda mais arredondada para um efeito mais suave
    padding: 18, // Diminuído o padding do card
    marginVertical: 12, // Aumento da margem para maior espaçamento entre os cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Menos opacidade da sombra
    shadowRadius: 4,
    elevation: 4, // Elevação mais suave para Android
  },
  cardTitle: {
    color: '#388E3C',
    fontSize: 20, // Fonte reduzida para os títulos
    fontWeight: 'bold',
    marginBottom: 6, // Menos espaço abaixo do título
  },
  button: {
    backgroundColor: '#388E3C', // Cor verde para o botão
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20, // Espaçamento acima do botão
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;