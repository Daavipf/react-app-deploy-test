<<<<<<< HEAD
import { Link } from "react-router-dom"
import { PiHeadset } from "react-icons/pi"
import { IconContext } from "react-icons/lib"

function SupportChat() {
  return (
    <Link to="/login" className="p-2.5 fixed bottom-10 right-5 bg-JReal-200 rounded-lg flex items-center gap-4">
      <IconContext.Provider value={{ size: '32px', color: '#fff' }}>
        <div>
          <PiHeadset />
        </div>
      </IconContext.Provider>
      <p className="text-white">Central de<br /> atendimento</p>
    </Link>
  )
}

=======
import { Link } from "react-router-dom"
import { PiHeadset } from "react-icons/pi"
import { IconContext } from "react-icons/lib"

function SupportChat() {
  return (
    <Link to="/login" className="p-2.5 fixed bottom-10 right-5 bg-JReal-200 rounded-lg flex items-center gap-4">
      <IconContext.Provider value={{ size: '32px', color: '#fff' }}>
        <div>
          <PiHeadset />
        </div>
      </IconContext.Provider>
      <p className="text-white">Central de<br /> atendimento</p>
    </Link>
  )
}

>>>>>>> 8c17a86729ee79e00cd7a469a359c1522ca2ce8f
export default SupportChat