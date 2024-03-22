import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import Profile from "./Profile";

const FlexExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, { flex: 1 }]}>
        <Profile imageSource="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        <TouchableOpacity style={styles.btn}>
          <Text style={{color:"rgba(26, 158, 117, 1)"}}> + Add Vehicle</Text>
        </TouchableOpacity>
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
  btn: {
    width: 159,
    height: 32,
    backgroundColor:"rgba(240, 255, 250, 1)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 84,
  },
  box: {
    width: 400,
    height: 400,
    flexDirection: "column",
    backgroundColor: "rgba(26,158,117,255)",
    // justifyContent: "start",
    // alignItems: "center",
    // borderRadius: "50px",
    borderBottomLeftRadius: 100, // Adjust the border radius to match the main box
    borderBottomRightRadius: 100, // Adjust the border radius to match the main box
  },
});

export default FlexExample;
