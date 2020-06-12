import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const Resultdetail = ({ res }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{ uri: res.image_240x135 }}
      ></Image>
      <Text style={styles.titleStyle}>{res.title}</Text>
      <Text>Price: {res.price}</Text>
      <Text>Score: {res.predictive_score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 220,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  imageStyle: {
    width: 200,
    borderRadius: 4,
    height: 200,
    marginBottom: 5,
  },
});

export default Resultdetail;
