import Logo from '../components/Logo'
import Background from '../components/Background'
import React from 'react'
import { Button } from 'react-native'

const LaunchPage = ({navigation}) => {
  const handleClick = () => {
    return navigation.navigate('Onboarding')
  }

  return (
    <Background>
        <Logo/>
        <Button onPress={handleClick} title='click for next' />
    </Background>
 
  )
}
export default LaunchPage
