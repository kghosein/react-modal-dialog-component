import { useEffect } from "react"
import { createPortal } from "react-dom"

const ModalDialog = ({
  show,
  close,
  children,
  outsideInteractivity = null,
  isModal = false,
  isDialog = false,
}) => {
  useEffect(() => {
    if (outsideInteractivity === false) {
      document.querySelector("html").style = "overflow: hidden;"
      document.querySelector("body").style = "overflow: hidden;"
      console.log()
    }

    return () => {
      document.querySelector("html").style = "overflow: auto;"
      document.querySelector("body").style = "overflow: auto;"
    }
  }, [outsideInteractivity])

  return createPortal(
    <>
      {show && (
        <div
          className="modal-dialog-container"
          data-is-modal={isModal}
          data-is-dialog={isDialog}
          onClick={() => {
            outsideInteractivity && close()
          }}
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button onClick={close} className="close-modal-dialog-cta">
              x
            </button>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-dialog")
  )
}

export default ModalDialog
