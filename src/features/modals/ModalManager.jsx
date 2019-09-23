import React from 'react'
import {connect} from 'react-redux'
import TestModal from './TestModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal
  //おそらく各modalがオブジェクトになっている。modal名にアクセスするとそれに対応したコンポーネントを呼び出すことができる
}

const mapState = (state) => ({
  currentModal: state.modals

})

const ModalManager = ({currentModal}) => {
  let renderedModal;
  if(currentModal) {
    const {modalType, modalProps} = currentModal
    const ModalComponent = modalLookup[modalType]
    //ここで呼んだmodal名に応じて対応するコンポーネントを呼び出している
    renderedModal = <ModalComponent {...modalProps} />
  }
  return (
    <span>{renderedModal}</span>
  )
}

export default connect(mapState)(ModalManager)
