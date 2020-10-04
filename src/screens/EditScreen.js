import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const EditScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Content:</Text>
      <TextInput style={styles.input}></TextInput>
      <Button title="Save" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
  text: {
    margin: 5,
    fontSize: 17,
  },
});

export default EditScreen;
