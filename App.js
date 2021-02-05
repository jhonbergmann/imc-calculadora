
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Alert
} from 'react-native'

import { setStatusBarHidden } from 'expo-status-bar'

import BackgroundLinearGradient from './src/components/BackgroundLinearGradient'
import Header from './src/components/Header'
import InputsData from './src/components/InputsData'
import ModalImc from './src/components/ModalImc'
import ModalDetails from './src/components/ModalDetails'

export default function App() {

  const [sex, setSex] = useState(undefined)
  const [age, setAge] = useState(undefined)
  const [heigth, setHeigth] = useState(undefined)
  const [weight, setWeight] = useState(undefined)
  const [physicalActivity, setPhysicalActivity] = useState(undefined)

  const [imc, setImc] = useState(undefined)
  const [detail, setDetail] = useState(undefined)

  const [modalVisibleImc, setModalVisibleImc] = useState(false)
  const [modalVisibleDetail, setModalVisibleDetail] = useState(false)

  function clickCalcButton() {
    if (sex !== undefined && age > 0 && heigth > 0 && weight > 0 && physicalActivity !== undefined) {
      showImc()
    } else {
      Alert.alert(
        'Erro',
        'Você esqueceu de preencher algum dado ou preencheu incorretamente, verifique e tente novamente.'
      )
    }
  }

  if (age > 100 || age < 5) {
    setAge(undefined)
  }
  if (heigth > 2.20 || heigth < 0.50) {
    setHeigth(undefined)
  }
  if (weight > 150 || weight < 25) {
    setWeight(undefined)
  }

  function showImc() {
    setImc(parseInt(weight / (heigth * heigth)))
    setModalVisibleImc(true)
  }

  function showDetails() {
    if (imc < 18.5) {
      setDetail(`Sinto muito, mas o seu IMC é de ${imc} kg/m2. 
       Você precisa ganhar um pouco mais de massa para atingir o seu peso ideal`)
    }
    if (imc >= 18.5) {
      setDetail(`Parabéns, seu IMC é de ${imc} kg/m2 
      e você está dentro do peso adequado!`)
    }
    if (imc >= 24.9) {
      setDetail(`Sinto muito, mas o seu IMC é de ${imc} kg/m2, 
      por isso você está acima do peso e deveria emagrecer um pouco para atingir o seu peso ideal.`)
    }
    if (imc > 30) {
      setDetail(`Sinto muito, mas o seu IMC é de ${imc} kg/m2 
      por isso você está acima do peso e deveria emagrecer para atingir o seu peso ideal.`)
    }
    setModalVisibleDetail(true)
    setModalVisibleImc(false)
  }

  setStatusBarHidden(true) /* STATUS BAR HIDDEN */

  /* delete */
  console.log(sex)
  console.log(age)
  console.log(heigth)
  console.log(weight)
  console.log(imc)
  console.log(detail)
  console.log(physicalActivity)

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
        setPhysicalActivity={setPhysicalActivity}
      />

      <ModalImc
        imc={imc}
        modalVisibleImc={modalVisibleImc}
        onClickCloseModal={() => setModalVisibleImc(!modalVisibleImc)}
        onClickOpenModalDetaills={() => showDetails()}
      />

      <ModalDetails
        detail={detail}
        modalVisibleDetail={modalVisibleDetail}
        onClickCloseModal={() => setModalVisibleDetail(!modalVisibleDetail)}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
