import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const jumpto = useNavigate()

  const handleClickLogin = () => {
    setUser(true)
    jumpto("/")
  }

  return (
    <div>
      <h1>Login</h1>
      <h2>{user ? "Online" : "Offline"}</h2>
      <button onClick={handleClickLogin}>Accept</button>
    </div>
  )
}
export default Login