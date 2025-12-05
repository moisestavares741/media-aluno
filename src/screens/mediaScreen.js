import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
import styles from "../estilos/estilos";

export default function MediaScreen({ navigation }) {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [nota4, setNota4] = useState("");

  const clearFields = () => {
    setNota1("");
    setNota2("");
    setNota3("");
    setNota4("");
  };
  const calcularMedia = () => {
    // 1. Validação
    if (nota1 === "" || nota2 === "" || nota3 === "" || nota4 === "") {
      Alert.alert("Atenção", "Preencha todas as 4 notas antes de calcular.");
      return;
    }

    const n1 = parseFloat(nota1.replace(",", "."));
    const n2 = parseFloat(nota2.replace(",", "."));
    const n3 = parseFloat(nota3.replace(",", "."));
    const n4 = parseFloat(nota4.replace(",", "."));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
      Alert.alert("Erro", "Digite apenas números válidos.");
      return;
    }

    const mediaCalculada = (n1 + n2 + n3 + n4) / 4;

    let situacaoAluno = "";
    if (mediaCalculada >= 7) {
      situacaoAluno = "Aprovado";
    } else if (mediaCalculada >= 5) {
      situacaoAluno = "Recuperação";
    } else {
      situacaoAluno = "Reprovado";
    }

    Keyboard.dismiss();

    navigation.navigate("Resultado", {
      media: mediaCalculada.toFixed(1),
      situacao: situacaoAluno,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Boletim Escolar</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infotitulo}>
            <Text style={styles.subtitulo}>Digite as 4 notas</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Nota 01"
            keyboardType="decimal-pad"
            value={nota1}
            onChangeText={setNota1}
            maxLength={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Nota 02"
            keyboardType="decimal-pad"
            value={nota2}
            onChangeText={setNota2}
            maxLength={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Nota 03"
            keyboardType="decimal-pad"
            value={nota3}
            onChangeText={setNota3}
            maxLength={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Nota 04"
            keyboardType="decimal-pad"
            value={nota4}
            onChangeText={setNota4}
            maxLength={4}
          />

          <TouchableOpacity style={styles.botao} onPress={calcularMedia}>
            <Text style={styles.textoBotao}>Ver Resultado</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button2, styles.clearButton]}
            onPress={clearFields}
          >
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
