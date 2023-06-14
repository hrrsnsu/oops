import { View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import placeholderImage from '../assets/favicon.png'

const Card = (props) => {

    const handleButton = () => {
        return props.navigation.navigate('HomePage')
    }

  return (
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={placeholderImage}/>
            <Text style={styles.header}>{props.header}</Text>
            <Text style={styles.desc}>{props.desc}</Text>
            {props.button && 
            <TouchableOpacity onPress={handleButton} style={styles.button}>
                <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>}
        </View>

  )
}

const styles = StyleSheet.create({
    cardContainer: {
        top: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 32,
        height: 156,
        width: 156
    },
    header: {
        fontSize: 20,
        color: '#E4DCCF',
        marginBottom: 16,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 14,
        color: '#E4DCCF',
        width: 200,
        textAlign: 'center',
        marginBottom: 45,
    },
    button: {
        backgroundColor: '#2F34A6',
        padding: 10,
    },
    buttonText: {
        color: 'white'
    }
})

export default Card