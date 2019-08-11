import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text style={styles.red}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red"
  },
  red: {
    color: "red",
    fontSize: 30
  }
});

export default Home;
