import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./src/components/Home/Home";
import Login from "./src/components/Login/Login";

export default function App() {
  return (
    <NativeRouter>
      <View>
        <View style={styles.nav}>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/login">
            <Text>login</Text>
          </Link>
        </View>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red"
  },
  nav: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
