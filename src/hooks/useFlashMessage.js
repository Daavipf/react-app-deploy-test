<<<<<<< HEAD
//esse código emite as flash mesages

import bus from "../utils/bus"

export default function useFlashMessage() {
  function setFlashMessage(msg) {
    bus.emit('flash', {
      message: msg
    })
  }

  return { setFlashMessage }
=======
//esse código emite as flash mesages

import bus from "../utils/bus"

export default function useFlashMessage() {
  function setFlashMessage(msg) {
    bus.emit('flash', {
      message: msg
    })
  }

  return { setFlashMessage }
>>>>>>> 8c17a86729ee79e00cd7a469a359c1522ca2ce8f
}