import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import IconBars from 'react-native-vector-icons/AntDesign'
import IconHeart from 'react-native-vector-icons/AntDesign'

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>IMC Calculadora</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { }}>
          <IconHeart style={{ paddingHorizontal: 10 }}
            name='heart'
            size={20}
            color='#FFF'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <IconBars
            name='bars'
            size={25}
            color='#FFF'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  }
})