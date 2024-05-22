import { useState } from "react"
import ModalDialog from "./ModalDialog"

const RenderUsingStates = () => {
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [dialog2, setDialog2] = useState(false)

  const toggleModalDialog = (setModalDialog) =>
    setModalDialog((prevState) => !prevState)

  return (
    <>
      <div className="ctas">
        <h1>Render using States</h1>
        <button
          type="button"
          className="cta"
          onClick={() => toggleModalDialog(setModal3)}
        >
          Modal 3
        </button>
        <button
          type="button"
          className="cta"
          onClick={() => toggleModalDialog(setModal4)}
        >
          Modal 4
        </button>
        <button
          type="button"
          className="cta"
          onClick={() => toggleModalDialog(setDialog2)}
        >
          Dialog 2
        </button>
      </div>

      {modal3 ? (
        <ModalDialog
          show={modal3}
          close={() => toggleModalDialog(setModal3)}
          isModal={true}
          outsideInteractivity={false}
        >
          <div className="modal-dialog-content">
            Modal 3 - Render using States
          </div>
          <div className="modal-dialog-content">
            outside interactivity disabled
          </div>
        </ModalDialog>
      ) : null}

      {modal4 ? (
        <ModalDialog
          show={modal4}
          close={() => toggleModalDialog(setModal4)}
          isModal={true}
          outsideInteractivity={true}
        >
          <div className="modal-dialog-content">
            Modal 4 - Render using States
          </div>
          <div className="modal-dialog-content">
            outside interactivity enabled
          </div>
        </ModalDialog>
      ) : null}

      {dialog2 ? (
        <ModalDialog
          show={dialog2}
          close={() => toggleModalDialog(setDialog2)}
          isDialog={true}
        >
          <div className="modal-dialog-content">
            Dialog 2 - Render using States
          </div>
        </ModalDialog>
      ) : null}
    </>
  )
}

export default RenderUsingStates
