import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, View, Alert, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Relatorio = () => {
  const navigation = useNavigation();
  const [relatorioData, setRelatorioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://10.139.75.84:5251/api/Relatorio/GetAllRelatorio';

  // Função para buscar os dados da API
  const fetchRelatorioData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Erro ao buscar dados do relatório');
      const data = await response.json();
      setRelatorioData(data);
    } catch (error) {
      setError(error.message);
      Alert.alert('Erro', 'Não foi possível carregar os dados do relatório.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRelatorioData();
  }, []);

  // Função para navegar para outra tela
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
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

      {/* Carregando ou erro */}
      {isLoading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : error ? (
        <Text style={styles.errorText}>Erro: {error}</Text>
      ) : (
        <>
          {/* Exibir dados do relatório */}
          {relatorioData.length > 0 ? (
            relatorioData.map((item, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>Relatório {item.id}</Text>
                <Text style={styles.cardDate}>Informações: {item.data}</Text>
                <Text style={styles.cardDescription}>{item.relatorioDescricao}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noDataText}>Nenhum dado disponível.</Text>
          )}
        </>
      )}

      {/* Botão de navegação */}
      <TouchableOpacity style={styles.button} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Voltar à Tela Inicial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFF3', // Cor de fundo suave e natural
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
  loadingText: {
    fontSize: 18,
    color: '#388E3C',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#E8F5E9', // Fundo claro e suave para o cartão
    borderWidth: 1,
    borderColor: '#81C784', // Verde suave para a borda
    borderRadius: 12,
    padding: 18,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  cardDescription: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  cardDate: {
    fontSize: 14,
    color: '#388E3C',
    marginTop: 10,
  },
  noDataText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#388E3C',
    padding: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20, // Margem inferior para o botão
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Relatorio;