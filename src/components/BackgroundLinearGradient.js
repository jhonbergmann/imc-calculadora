import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'

export default function BackgroundLinearGradient() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
      }}
    />
  )
}