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

  function selectedManSex() {
    if (colorIconMan === '#505d78') {
      setColorIconMan('#FFF'), props.setSex('Masculino')
    } else {
      setColorIconMan('#505d78'), props.setSex('')
    }
  }

  function selectedWomanSex() {
    if (colorIconWoman === '#505d78') {
      setColorIconWoman('#FFF'), props.setSex('Feminino')
    } else {
      setColorIconWoman('#505d78'), props.setSex('')
    }
  }

  if (colorIconMan === '#FFF' && colorIconWoman === '#FFF') {
    setColorIconMan('#505d78'), setColorIconWoman('#505d78')
    Alert.alert('Erro', 'Selecione apenas um sexo')
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
          placeholder='1,80'
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
          placeholder='75,5'
          keyboardType='numeric'
          onChangeText={text => props.setWeight(text)}
        />
        <View style={styles.type}>
          <Text style={styles.textWhiteAlingCenter}>Kg</Text>
        </View>
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
    marginTop: '20%'
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