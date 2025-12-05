import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "../estilos/estilos";

export default function ResultScreen({ route, navigation }) {
  const media = route.params?.media ?? "--";
  const situacao = route.params?.situacao ?? "Aguardando...";

  const getCor = () => {
    if (situacao === "Aprovado") return "green";
    if (situacao === "Reprovado") return "red";
    return "#e6b800";
  };

  const getCorFundo = () => {
    if (situacao === "Aprovado") return "#07cf39a9";
    if (situacao === "Reprovado") return "#ec4242ab";
    return "#f9fd00c7";
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: getCorFundo() }}>
      <View style={[styles.container, { backgroundColor: getCorFundo() }]}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Resultado Final</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={{ fontSize: 22, textAlign: "center", marginBottom: 10 }}>
            A média do aluno foi:
          </Text>

          <Text
            style={{
              fontSize: 60,
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
              marginVertical: 10,
            }}
          >
            {media}
          </Text>

          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginTop: 10,
              color: getCor(),
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {situacao}
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.textoBotao}>Voltar e Recalcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
