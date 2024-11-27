import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FaleConosco = () => {
  const navigation = useNavigation();
  
  // States para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Aqui você pode adicionar a lógica para enviar os dados para a API ou realizar outra ação
    Alert.alert('Mensagem Enviada', 'Sua mensagem foi enviada com sucesso.');
    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setMensagem('');
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

      {/* Título da tela */}
      <Text style={styles.heading}>Fale Conosco</Text>

      {/* Formulário de contato */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Sua mensagem"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar Mensagem</Text>
        </TouchableOpacity>
      </View>
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
  formContainer: {
    backgroundColor: '#ffffff', // Fundo branco para o formulário
    borderRadius: 12, // Bordas arredondadas
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    height: 50,
    borderColor: '#81C784',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Alinhar o texto no topo
  },
  button: {
    backgroundColor: '#388E3C', // Cor do botão
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FaleConosco;