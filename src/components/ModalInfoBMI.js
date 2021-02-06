import React from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native'

import IconClose from 'react-native-vector-icons/AntDesign'

export default function ModalInfoBMI(props) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={props.modalVisibleInfoBmi}
        onRequestClose={() => {
          Alert.alert('Clique em fechar.')
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>INDICAÇÕES</Text>
            <Text style={[styles.modalTextTitleContent, { backgroundColor: '#b8131d' }]}>Magreza</Text>
            <Text style={styles.modalText}>
              Quando o resultado é menor que 18,5 kg/m2.
            </Text>
            <Text style={[styles.modalTextTitleContent, { backgroundColor: '#3b5998' }]}>Normal</Text>
            <Text style={styles.modalText}>
              Quando o resultado está entre 18,5 e 24,9 kg/m2.
            </Text>
            <Text style={[styles.modalTextTitleContent, { backgroundColor: '#fed402' }]}>Sobrepeso</Text>
            <Text style={styles.modalText}>
              Quando o resultado está entre 24,9 e 30 kg/m2.
            </Text>
            <Text style={[styles.modalTextTitleContent, { backgroundColor: '#b8131d' }]}>Obesidade</Text>
            <Text style={styles.modalText}>
              Quando o resultado é maior que 30 kg/m2.
            </Text>
            <TouchableOpacity style={styles.closeButton}
              onPress={props.onClickCloseModal}>
              <IconClose
                name='closecircle'
                size={25}
                color='#3b5998'
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalView: {
    backgroundColor: 'rgba(255,255,255, 0.9)',
    borderTopStartRadius: 50,
    width: '100%',
    height: '90%',
    alignItems: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  modalTextTitle: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalText: {
    fontSize: 16,
    width: '90%',
    marginBottom: 15,
    textAlign: 'center'
  },
  modalTextTitleContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    margin: 5,
    padding: 20,
    width: '70%',
    height: '5%',
    borderRadius: 10,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  }
})