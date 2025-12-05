import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    marginBottom: 30,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 20,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  infotitulo: {
    marginBottom: 20,
    alignItems: "center",
  },
  subtitulo: {
    fontSize: 18,
    color: "#666",
    fontWeight: "500",
  },

  input: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#00ff73ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,

    shadowColor: "#09a004ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },

  textoBotao: {
    color: "#363535ff",
    fontSize: 18,
    fontWeight: "bold",
  },

  areaResultado: {
    alignItems: "center",
    marginVertical: 10,
  },

  clearButton: {
    marginTop: 10,
    backgroundColor: "#dbba00ff",
    borderWidth: 2,
    borderColor: "#c4c112ff",
    borderRadius: 5,
  },

  clearButtonText: {
    color: "#1a1a1aff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default styles;
