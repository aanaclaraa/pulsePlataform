import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from './Context/UserContext';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [logoOpacity] = useState(new Animated.Value(0));

  const { TelaInicial, Login, setCadastro } = useContext(UserContext);

  useEffect(() => {
    fadeInLogo();
  }, []);

  const fadeInLogo = () => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/usuario.png')}
        style={[styles.logo, { opacity: logoOpacity }]}
      />
      <Text style={styles.title}>Faça login para acessar o aplicativo</Text>
      <TextInput
        style={styles.input}
        placeholder='E-mail'
        onChangeText={(digitado) => setEmail(digitado)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        onChangeText={(digitado) => setSenha(digitado)}
        value={senha}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={Login( email, senha )}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {erro && <Text style={styles.errorMessage}>Email ou senha incorretos</Text>}
      <TouchableOpacity onPress={() => { setCadastro( true ) } }>
        <Text style={styles.cadastrarTexto} >Ainda não é cadastrado? Cadastre-se</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FFF3', // Fundo claro e natural
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 35,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#2C5E29', // Verde escuro para o texto
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#4CAF50', // Verde suave para bordas
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF', // Fundo branco para campos de texto
    color: '#2C5E29', // Verde escuro para o texto
    fontSize: 16,
  },
  button: {
    width: '80%',
    height: 45,
    backgroundColor: '#4CAF50', // Verde suave para o botão
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // Para sombra no Android
  },
  buttonText: {
    color: '#FFF', // Texto branco para contraste
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: '#D32F2F', // Vermelho para erro
    marginTop: 10,
    fontSize: 14,
  },
  cadastrarTexto: {
    color: '#2C5E29', // Verde escuro para o texto de cadastro
    fontSize: 16,
    marginTop: 15,
    textDecorationLine: 'underline', // Adiciona um sublinhado para indicar interatividade
  },
});