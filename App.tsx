import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch('https://dummyjson.com/products')
      const json = await response.json()
      setProducts(json)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Products: {products?.length}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
