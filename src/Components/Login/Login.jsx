import schoologo from "../../assets/starlitelogo-removebg.png"
import { Link } from "react-router-dom"


import "./Login.css"

function Login(){
    return(
        <section className="login-container container">
            <img src={schoologo} width="100"/>

            <h2>Login page</h2>
            <p>Welcome back to Starlite International School. Please login to access your account.</p>

             <form>
                            <input type="text" placeholder="Full name eg John Doe" /><br />
                                              
                                          
                            <input type="password" placeholder="Create your password" /><br />
                           
                            <button className="btn-login">Login</button>
                            <span className="account-statement">New to Startlite?<Link to="/register" className="link-account">Sign up</Link></span>
            
                        </form>
        </section>
    )
}

export default Login
