
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native'

import { setStatusBarHidden } from 'expo-status-bar'
import IconClose from 'react-native-vector-icons/AntDesign'

import BackgroundLinearGradient from './src/components/BackgroundLinearGradient'
import Header from './src/components/Header'
import InputsData from './src/components/InputsData'

export default function App() {

  const [sex, setSex] = useState()
  const [age, setAge] = useState()
  const [heigth, setHeigth] = useState()
  const [weight, setWeight] = useState()
  const [imc, setImc] = useState()
  const [result, setResult] = useState()

  const [modalVisible, setModalVisible] = useState(true)

  function calcImc() {
    setImc(parseInt(weight / (heigth * heigth)))

    if (imc < 18.5) {
      setResult('magrelo')
    }
    if (imc >= 18.5) {
      setResult('normal')
    }
    if (imc >= 24.9) {
      setResult('Sobrepeso')
    }
    if (imc > 30) {
      setResult('Obseidade')
    }
  }

  function clickCalcButton() {
    if (age > 0 && heigth > 0 && weight > 0) {
      calcImc(), setModalVisible(true)
    } else {
      Alert.alert(
        'Erro',
        'Você esqueceu de preencher algum dado ou preencheu errado, verifique e tente novamente.'
      )
    }
  }

  setStatusBarHidden(true) /* STATUS BAR HIDDEN */

  console.log(sex)
  console.log(age)
  console.log(heigth)
  console.log(weight)
  console.log(imc)
  console.log(result)

  return (
    <View style={styles.container}>
      <BackgroundLinearGradient />
      <Header />
      <InputsData
        onClick={() => clickCalcButton()}
        setSex={setSex}
        setAge={setAge}
        setHeigth={setHeigth}
        setWeight={setWeight}
      />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Clique em fechar.')
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTextTitle}>RESULTADO</Text>
              <Text style={styles.modalText}>Seu IMC é de {imc}</Text>
              <Text style={styles.modalText}>{heigth}</Text>
              <Text style={styles.modalText}>{weight}</Text>
              <Text style={styles.modalText}>{imc}</Text>
              <Text style={styles.modalText}>{result}</Text>
              <TouchableOpacity style={styles.closeButton}
                onPress={() => { setModalVisible(!modalVisible) }}>
                <IconClose
                  name='closecircle'
                  size={25}
                  color='#505d78'
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalView: {
    backgroundColor: '#FFF',
    borderTopStartRadius: 50,
    width: '100%',
    height: '75%',
    alignItems: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  textStyle: {
    color: '#FFF',
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTextTitle: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
