import React from 'react'
import {AuthContext} from "../../providers/AuthProvider"
const Register = () => {

    const {register} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        register(email, password);
    }

    return(
        <div>
            <h1>Register</h1>
            <form>
            <input type="text" palceholder={"Email"}/>
            <input type="text" palceholder={"Password"}/>
            <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;