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

export default SupportChat