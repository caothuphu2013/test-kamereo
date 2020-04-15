import React, { useState } from 'react';
import { uniqueId as _uniqueId } from 'lodash';

export const ModalContext = React.createContext({
  openModal: () => {}
});

const withModals = (WrapperComponent) =>
  function WrapperWithModals(props) {
    const [modals, setModals] = useState([]);

    return (
      <ModalContext.Provider
        value={{
          openModal: (modal) => setModals(modals.concat([modal]))
        }}
      >
        <WrapperComponent {...props} />
        {modals.map((Modal, indexModal) => (
          <Modal key={_uniqueId('modal_')} onRemove={() => setModals(modals.filter((_modal, index) => index !== indexModal))} />
        ))}
      </ModalContext.Provider>
    );
  };

export default withModals;
