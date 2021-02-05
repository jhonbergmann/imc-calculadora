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

export default function ModalDetails(props) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisibleDetail}
        onRequestClose={() => {
          Alert.alert('Clique em fechar.')
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>DETALHES</Text>
            <Text style={styles.modalText}>{props.detail}</Text>
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
    fontSize: 18,
    width: '90%',
    marginBottom: 15,
    textAlign: "center"
  }
})