import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, courses, errorMessage] = useResults();

  const filterResults = (price) => {
    switch (price) {
      case "1":
        return courses.filter((course) => {
          return course.price_detail.amount < 100;
        });
      case "2":
        return courses.filter((course) => {
          return (
            course.price_detail.amount > 100 && course.price_detail.amount < 150
          );
        });
      case "3":
        return courses.filter((course) => {
          return course.price_detail.amount > 150;
        });
      default:
        break;
    }
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          //navigation={navigation}
          title="Category 1"
          results={filterResults("1")}
        ></ResultsList>
        <ResultsList
          //navigation={navigation}
          title="Category 2"
          results={filterResults("2")}
        ></ResultsList>
        <ResultsList
          //navigation={navigation}
          title="Category 3"
          results={filterResults("3")}
        ></ResultsList>
      </ScrollView>
    </>
  );
};

export default SearchScreen;
