<<<<<<< HEAD
import { useContext } from "react";
import { Context } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { authenticated } = useContext(Context)

  return authenticated ? (<>{children}</>) : (<Navigate to="/login" replace={true} />)
}

=======
import { useContext } from "react";
import { Context } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { authenticated } = useContext(Context)

  return authenticated ? (<>{children}</>) : (<Navigate to="/login" replace={true} />)
}

>>>>>>> 8c17a86729ee79e00cd7a469a359c1522ca2ce8f
export default ProtectedRoute