import React, { useState } from 'react';
import { Modal, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

export function Modalanotacoes({ visible, setVisivel }) {
  const [texto, setTexto] = useState();
  const adicionarAnotacao = (texto) => {
    axios.post("http://192.168.56.1/anotar", { anotacoes }).then(response => {
      console.log(response.data);
      setVisivel(false);
    })
  }

  return (
    <Modal visible={visible} onRequestClose={() => setVisivel(false)}>
      <SafeAreaView style={styles.modalContainer}>
        <KeyboardAvoidingView style={styles.modalContent} behavior="padding">
          <Text style={styles.modalTitle}>Adicionar tarefa</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="nome da tarefa"
            onChangeText={(text) => setTexto(text)}
          />
          <TouchableOpacity style={styles.modalBotao} onPress={() => adicionarAnotacao(texto)}>
            <Text>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalBotao} onPress={() => setVisivel(false)}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}

