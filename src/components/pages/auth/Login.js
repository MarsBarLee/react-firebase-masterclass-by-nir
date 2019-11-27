import React, {useState} from "react";
import {AuthContext} from "../../providers/AuthProvider"

const Login = () => {
    const [email, setEmail] = useState({});
const {login, resetPassword} = useContext(AuthContext)

const handleSubmit = () => {
    login(email, password);
}
  return (
    <div>
      <h1>Login</h1>
    
            <form>
            <input type="text" palceholder={"email"} onChange={(target)=> setEmail(target.value)}/>
            <input type="text" palceholder={pPassword"} onChange={(target)=> setEmail(target.value)}/>/>
            <button type={submit}>Login</button>
            </form>
            <button nChange={handleForgot}>Forgot your password?</button>
    </div>
  );
};

export default Login;
