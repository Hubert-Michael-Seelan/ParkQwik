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
    width: 80, // Diameter of the circle
    height: 80, // Diameter of the circle
    backgroundColor: "white",
    borderRadius: 50, // Half of the width/height to create a circle
    // overflow: 'hidden', // Ensures the image stays within the circle
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'cover', // Ensure the image covers the entire circle
  },
});

export default Profile;
