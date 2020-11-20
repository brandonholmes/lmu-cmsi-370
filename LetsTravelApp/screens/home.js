import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { SearchBar } from "react-native-elements";
import MapView from "react-native-maps";

export default function Home() {
  //   state = {
  //     search: "",
  //   };

  //   updateSearch = (search) => {
  //     this.setState({ search });
  //   };
  //   const { search } = this.state;
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
      {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      /> */}
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
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
