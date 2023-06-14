import { View, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <SafeAreaView >
        <View style={styles.background}>
            {children}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#070A52',
        width: '100%',
        height: '100%',
    }
})

export default Background