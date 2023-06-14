import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

//maybe view
const Logo = () => {
  return (
    <View style={styles.logoContainer}>
        <Text style={styles.logoText}>oops</Text>
        <Text style={styles.logoDots}>...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    logoText: {
        color: '#F9F5EB',
        fontSize: 50,
        lineHeight: 50,
    },
    logoDots: {
        color: '#EA5455',
        fontSize: 150,
        fontWeight: 'bold',
        lineHeight: 60,
        letterSpacing: 2
    }
})

export default Logo