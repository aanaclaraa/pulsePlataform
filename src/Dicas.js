import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dicas = () => {
  const navigation = useNavigation();

  // Lista de dicas para cuidar das plantas
  const dicas = [
    {
      id: 1,
      titulo: 'Luz Adequada',
      descricao: 'Posicione suas plantas em um local com luz solar indireta para evitar queimar as folhas.',
    },
    {
      id: 2,
      titulo: 'Rega Moderada',
      descricao: 'Evite regar demais. Certifique-se de que o solo está seco antes de regar novamente.',
    },
    {
      id: 3,
      titulo: 'Adubação',
      descricao: 'Adube suas plantas a cada 2 meses com fertilizantes orgânicos ou químicos apropriados.',
    },
    {
      id: 4,
      titulo: 'Controle de Pragas',
      descricao: 'Verifique regularmente suas plantas para identificar e eliminar pragas rapidamente.',
    },
    {
      id: 5,
      titulo: 'Podas Regulares',
      descricao: 'Remova folhas e galhos secos para estimular o crescimento saudável da planta.',
    },
  ];

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

      {/* Título */}
      <Text style={styles.heading}>Dicas de Como Cuidar das Plantas</Text>

      {/* Lista de Dicas */}
      {dicas.map((dica) => (
        <View key={dica.id} style={styles.card}>
          <Text style={styles.cardTitle}>{dica.titulo}</Text>
          <Text style={styles.cardDescription}>{dica.descricao}</Text>
        </View>
      ))}
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
  card: {
    backgroundColor: '#E8F5E9', // Fundo claro para o cartão
    borderWidth: 1,
    borderColor: '#81C784', // Verde suave para a borda
    borderRadius: 12,
    padding: 18,
    marginVertical: 12, // Espaçamento entre os cartões
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C', // Verde para o título do cartão
  },
  cardDescription: {
    fontSize: 16,
    color: 'black', // Descrição em preto
    marginTop: 10,
  },
});

export default Dicas;