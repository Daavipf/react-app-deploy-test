<<<<<<< HEAD
//esse código usa as funções dos hooks dentro do contexto do usuário

import { createContext } from "react"
import useAuth from "../hooks/useAuth"

const Context = createContext()

function UserProvider({ children }) {
  const { register, login, authenticated, logout, forgotPassword, resetPassword } = useAuth()

  return (
    <Context.Provider value={{ register, login, authenticated, logout, forgotPassword, resetPassword }}>
      {children}
    </Context.Provider>
  )
}

=======
//esse código usa as funções dos hooks dentro do contexto do usuário

import { createContext } from "react"
import useAuth from "../hooks/useAuth"

const Context = createContext()

function UserProvider({ children }) {
  const { register, login, authenticated, logout, forgotPassword, resetPassword } = useAuth()

  return (
    <Context.Provider value={{ register, login, authenticated, logout, forgotPassword, resetPassword }}>
      {children}
    </Context.Provider>
  )
}

>>>>>>> 8c17a86729ee79e00cd7a469a359c1522ca2ce8f
export { Context, UserProvider }