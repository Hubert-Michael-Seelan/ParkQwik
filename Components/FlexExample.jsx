import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Profile from "./Profile";

const FlexExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, { flex: 1 }]}>
        <Profile />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Container takes up all available space
    flexDirection: "row", // Horizontal layout
    // justifyContent: 'space-around', // Align boxes with equal space around them
    // alignItems: 'center', // Align boxes vertically at the center
  },
  box: {
    width: 400,
    height: 400,
    backgroundColor: "rgba(26,158,117,255)",
    justifyContent: "center",
    // alignItems: "center",
    // borderRadius: "50px",
    borderBottomLeftRadius: 60, // Adjust the border radius to match the main box
    borderBottomRightRadius: 60, // Adjust the border radius to match the main box
  },
});

export default FlexExample;
