import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './Context/UserContext';



const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  const cadastrar = async () => {
    if (!nome || !email || !telefone || !nascimento || !senha || !confirmacao) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmacao) {
      Alert.alert('As senhas não coincidem.');
      return;
    }

    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('senha', senha);
      
      const { Login } = useContext(UserContext);
      
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Image
        source={require('../assets/logo-floralis.png')}
        style={styles.logo}
      />
      <Text style={styles.titulo}>CADASTRE-SE PARA TER ACESSO AO NOSSO SITE:</Text>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setTelefone(text)}
        value={telefone}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setNascimento(text)}
        value={nascimento}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
      <Text style={styles.label }>Confirmação de senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setConfirmacao(text)}
        value={confirmacao}
        secureTextEntry={true}
      />
      <Button style={styles.button}
        title="CADASTRAR"
        onPress={cadastrar}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5FFF3', // Fundo claro e natural
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C5E29', // Verde escuro para destaque
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#2C5E29', // Verde escuro
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#4CAF50', // Verde suave para bordas
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF', // Fundo branco para contraste
    color: '#2C5E29', // Verde escuro para texto
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50', // Botão verde
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // Sombras no Android
  },
  buttonText: {
    color: '#FFF', // Texto branco
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cadastro;