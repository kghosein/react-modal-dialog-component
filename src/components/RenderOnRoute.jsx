import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import ModalDialog from "./ModalDialog"

const RenderOnRoute = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const modal1 = searchParams.get("modal1")
  const modal2 = searchParams.get("modal2")
  const dialog1 = searchParams.get("dialog1")
  const location = useLocation()
  const navigate = useNavigate()

  const closeModalDialog = () => navigate(location.pathname)

  return (
    <>
      <div className="ctas">
        <h1>Render on Route</h1>
        <button
          type="button"
          onClick={() => {
            setSearchParams({ modal1: true })
          }}
          className="cta"
        >
          Modal 1
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchParams({ modal2: true })
          }}
          className="cta"
        >
          Modal 2
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchParams({ dialog1: true })
          }}
          className="cta"
        >
          Dialog 1
        </button>
      </div>

      {modal1 ? (
        <ModalDialog
          show={modal1}
          close={closeModalDialog}
          isModal={true}
          outsideInteractivity={false}
        >
          <div className="modal-dialog-content">Modal 1 - Render on Route</div>
          <div className="modal-dialog-content">
            outside interactivity disabled
          </div>
        </ModalDialog>
      ) : null}

      {modal2 ? (
        <ModalDialog
          show={modal2}
          close={closeModalDialog}
          isModal={true}
          outsideInteractivity={true}
        >
          <div className="modal-dialog-content">Modal 2 - Render on Route</div>
          <div className="modal-dialog-content">
            outside interactivity enabled
          </div>
        </ModalDialog>
      ) : null}

      {dialog1 ? (
        <ModalDialog show={dialog1} close={closeModalDialog} isDialog={true}>
          <div className="modal-dialog-content">Dialog 1 - Render on Route</div>
        </ModalDialog>
      ) : null}
    </>
  )
}

export default RenderOnRoute
