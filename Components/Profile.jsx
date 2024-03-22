import React from 'react';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';

const Profile = ({ imageSource }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 51, // Diameter of the circle
    height: 51, // Diameter of the circle
    backgroundColor: "white",
    display: "flex",
    marginTop: 62,
    marginLeft: 13,
    borderRadius: 50, // Half of the width/height to create a circle
    // overflow: 'hidden', // Ensures the image stays within the circle
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    resizeMode: 'cover', // Ensure the image covers the entire circle

  },
});

export default Profile;
