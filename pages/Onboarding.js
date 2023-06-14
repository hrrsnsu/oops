import React from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import {View, StyleSheet} from 'react-native'
import Swiper from 'react-native-swiper'

const Onboarding = ({navigation}) => {

  return (
    <Background>
        <Swiper loop={false} index={0} activeDotColor='#EA5455' dotColor='#808080' containerStyle={{zIndex: 100}}>
            <Card header='Oops, I forgot...' desc='Sometimes we forget items on our to-do list.'/>
            <Card header='A Daily To-do List.' desc='Oops... is a daily task management app that keeps score of your tasks and resets your items everyday'/> 
            <Card header='Positive Reinforcement.' desc='We actively track the items you did not do. Shame on you.'/> 
            <Card header='Get things done.' desc ='Keep yourself accountable with the help of Oops...' button={true} navigation={navigation}/>
        </Swiper>
        <View style={styles.bottomContainer}></View>
    </Background>
  )
}

const styles = StyleSheet.create({
    bottomContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#E4DCCF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 0,
    },
  })

export default Onboarding