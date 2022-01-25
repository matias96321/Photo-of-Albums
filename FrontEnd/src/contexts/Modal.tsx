import React, { createContext, useState } from "react";

interface ModalProps {
  createModal: (props: string) => void;
  hideModal: () => void;
  showStatusModal: () => ModalState;
}

interface ModalState {
  typeModal: string,
  statusModal: Boolean,
}

const defaultValue: ModalProps = {
  createModal: () => {},
  hideModal: () => {},
  showStatusModal(){return {typeModal: '', statusModal: false}},
}

export const ModalContext = React.createContext<ModalProps>(defaultValue)

export const ModalProvider: React.FC = ({ children }) => {

  const [modal, setModal] = React.useState<ModalState>({typeModal: 'hiden', statusModal: false})

  const changeModalVisibility: ModalProps = {
    createModal: (typeModal: string) => {
      setModal({
        typeModal: typeModal,
        statusModal: true
      })
    },

    hideModal: () => setModal({typeModal: 'hiden', statusModal: false}),
    showStatusModal: ():ModalState => {return modal}
  }

  

  return (
    <>
      <ModalContext.Provider value={changeModalVisibility}>
        {children}
      </ModalContext.Provider>
    </>
  )
}