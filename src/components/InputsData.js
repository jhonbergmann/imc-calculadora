import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native'

import IconMan from 'react-native-vector-icons/Ionicons'
import IconWoman from 'react-native-vector-icons/Ionicons'

export default function InputsData(props) {

  const [colorIconMan, setColorIconMan] = useState('#505d78')
  const [colorIconWoman, setColorIconWoman] = useState('#505d78')

  const [colorTextphysicalActivitySedentary, setColorTextphysicalActivitySedentary] = useState('#505d78')
  const [colorTextphysicalActivityPractitioner, setColorTextphysicalActivityPractitioner] = useState('#505d78')

  function selectedManSex() {
    if (colorIconMan === '#505d78') {
      setColorIconMan('#FFF'), props.setSex('Masculino')
    } else {
      setColorIconMan('#505d78'), props.setSex(undefined)
    }
  }

  function selectedWomanSex() {
    if (colorIconWoman === '#505d78') {
      setColorIconWoman('#FFF'), props.setSex('Feminino')
    } else {
      setColorIconWoman('#505d78'), props.setSex(undefined)
    }
  }

  function selectedSedentary() {
    if (colorTextphysicalActivitySedentary === '#505d78') {
      setColorTextphysicalActivitySedentary('#FFF'), props.setPhysicalActivity('Sedentario')
    } else {
      setColorTextphysicalActivitySedentary('#505d78'), props.setPhysicalActivity(undefined)
    }
  }

  function selectedPractitioner() {
    if (colorTextphysicalActivityPractitioner === '#505d78') {
      setColorTextphysicalActivityPractitioner('#FFF'), props.setPhysicalActivity('Praticante')
    } else {
      setColorTextphysicalActivityPractitioner('#505d78'), props.setPhysicalActivity(undefined)
    }
  }

  if (colorIconMan === '#FFF' && colorIconWoman === '#FFF') {
    setColorIconMan('#505d78'), setColorIconWoman('#505d78')
    Alert.alert('Erro', 'Selecione apenas um sexo')
  }

  if (colorTextphysicalActivitySedentary === '#FFF' && colorTextphysicalActivityPractitioner === '#FFF') {
    setColorTextphysicalActivitySedentary('#505d78'), setColorTextphysicalActivityPractitioner('#505d78')
    Alert.alert('Erro', 'Selecione apenas uma atividade')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sexo</Text>
      <View style={styles.datasContainer}>
        <TouchableOpacity style={styles.sexButton} onPress={() => { selectedManSex() }}>
          <IconMan
            name='man'
            size={35}
            color={colorIconMan}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sexButton} onPress={() => { selectedWomanSex() }}>
          <IconWoman
            name='woman'
            size={35}
            color={colorIconWoman}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Idade</Text>
      <View style={styles.datasContainer}>
        <TextInput style={styles.input}
          placeholder='25'
          keyboardType='numeric'
          onChangeText={text => props.setAge(text)}
        />
        <View style={styles.type}>
          <Text style={styles.textWhiteAlingCenter}>Anos</Text>
        </View>
      </View>
      <Text style={styles.title}>Altura</Text>
      <View style={styles.datasContainer}>
        <TextInput style={styles.input}
          placeholder='1.80'
          keyboardType='numeric'
          onChangeText={text => props.setHeigth(text)}
        />
        <View style={styles.type}>
          <Text style={styles.textWhiteAlingCenter}>M</Text>
        </View>
      </View>
      <Text style={styles.title}>Peso</Text>
      <View style={styles.datasContainer}>
        <TextInput style={styles.input}
          placeholder='75.5'
          keyboardType='numeric'
          onChangeText={text => props.setWeight(text)}
        />
        <View style={styles.type}>
          <Text style={styles.textWhiteAlingCenter}>Kg</Text>
        </View>
      </View>
      <Text style={styles.title}>Atividade Física</Text>
      <View style={styles.datasContainer}>
        <TouchableOpacity style={styles.physicalActivityButton} onPress={() => { selectedSedentary() }}>
          <Text style={[styles.textWhiteAlingCenter, { color: colorTextphysicalActivitySedentary }]}>Sedentário(a)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.physicalActivityButton} onPress={() => { selectedPractitioner() }}>
          <Text style={[styles.textWhiteAlingCenter, { color: colorTextphysicalActivityPractitioner }]}>Praticante</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.calcButton} onPress={props.onClick}>
        <Text style={styles.textWhiteAlingCenter}>Calcular</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    marginTop: '25%'
  },
  title: {
    width: '90%',
    textAlign: 'left',
    color: '#FFF'
  },
  datasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    marginBottom: 10
  },
  sexButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '45%',
    borderRadius: 10
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#FFF',
    width: '80%',
    height: '100%',
    borderRadius: 10,
    paddingLeft: 10
  },
  type: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '15%',
    borderRadius: 10
  },
  textWhiteAlingCenter: {
    textAlign: 'center',
    color: '#FFF'
  },
  physicalActivityButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '45%',
    height: '80%',
    borderRadius: 10
  },
  calcButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '45%',
    height: 70,
    borderRadius: 10,
    marginTop: 10
  }
})