import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native'

import IconBars from 'react-native-vector-icons/AntDesign'
import IconHeart from 'react-native-vector-icons/AntDesign'

import ModalInfoBMI from '../components/ModalInfoBMI'

export default function Header() {

  const [modalVisibleInfoBmi, setModalVisibleInfoBmi] = useState(false)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>IMC Calculadora</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { Alert.alert('Clicou') }}>
          <IconHeart style={{ paddingHorizontal: 10 }}
            name='heart'
            size={20}
            color='#FFF'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setModalVisibleInfoBmi(true) }}>
          <IconBars
            name='infocirlce'
            size={20}
            color='#FFF'
          />
          <ModalInfoBMI
            modalVisibleInfoBmi={modalVisibleInfoBmi}
            onClickCloseModal={() => setModalVisibleInfoBmi(!modalVisibleInfoBmi)} />
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