import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
// import React from 'react'
import { Link } from 'expo-router'

import chocolateBg from '@/assets/images/vegan-chocolate-drink-01.jpg'
// import icedCoffee from '@/assets/images/iced-coffee.png'

// This is a simple React Native component that displays an image of iced chocolate
// with a text overlay. The image is styled to cover the entire background,
// and the text is centered on top of it.
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ chocolateBg }
        style={ styles.image }
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.title}>
              {'ch.\nocol-ate'}
            </Text>
          </View>
          <View style={styles.container}>
            <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>menu</Text>
              </Pressable>
            </Link>
            <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>contact</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#f5f5f5',
    // padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  overlay: {
    // This overlay makes the text more readable on top of the image.
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 24,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignItems: 'center',
    overflow: 'hidden',
    // opacity: 0.5, // Optional: to make the image slightly transparent
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: to add a dark overlay 
    // borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  title: {
    fontSize: 75,
    color: 'rgba(255, 255, 255, 0.3)',
    fontWeight: 'bold',
    textAlign: 'right',
    // justifyContent: 'center',
    // marginBottom: 150,
    marginTop: 75,
  },
  link: {
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: 'bold',
    textAlign: 'center',
    // textDecorationLine: 'underline',
    // marginTop: 120,
    padding: 4,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    height: 60,
    // width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
    // textDecorationLine: 'underline',
  },
})

