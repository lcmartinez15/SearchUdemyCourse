import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { searchChaptersByCourseUdemy } from "../api/udemy";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const title = navigation.getParam("name");
  const [course, setCourse] = useState(null);
  const getResult = async (id) => {
    try {
      const response = await searchChaptersByCourseUdemy(id);
      setCourse(response);
    } catch (error) {
      //seterrorMessage(error.errorMessage);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!course) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title} </Text>
      <FlatList
        data={course}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.containeritem}>
              <Feather name="video" style={styles.iconStyle} />
              <Text style={styles.titleStyle}>{item.title}</Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  containeritem: {
    flexDirection: "row",
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
    flexWrap: "wrap",
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
    alignSelf: "center",
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 15,
  },
});

export default ResultsShowScreen;
