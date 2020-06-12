import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search Course"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 15,
  },
});

export default SearchBar;
