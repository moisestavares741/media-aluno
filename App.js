import react from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import mediaScreen from "./src/screens/mediaScreen";
import resultScreen from "./src/screens/resultScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Media"
        screenOptions={{
          headerStyle: { backgroundColor: "#2196F3" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Media"
          component={mediaScreen}
          options={{ title: "CALCULO DE MÉDIA" }}
        />

        <Stack.Screen
          name="Resultado"
          component={resultScreen}
          options={{ title: "RESULTADO DA MÉDIA" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
