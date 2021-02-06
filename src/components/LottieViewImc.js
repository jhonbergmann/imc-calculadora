import React from 'react'
import {
  View
} from 'react-native'

import LottieView from 'lottie-react-native'

import JSON from '../lottie-view/5797-weight-measure-machine-icon-animation.json'

export default function LottieViewImc() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView
        style={{ width: 200 }}
        resizeMode='contain'
        source={JSON}
        autoSize
        autoPlay
        loop />
    </View>
  )
}