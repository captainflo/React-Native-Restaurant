import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: term,
        location: "san jose"
      }
    });
    setResults(response.data.businesses);
    } catch (err){
       setErrorMessage('something went wrong')
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} results</Text>
      {errorMessage? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;