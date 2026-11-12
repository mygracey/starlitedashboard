import schoologo from "../../assets/starlitelogo-removebg.png"
import { Link } from "react-router-dom"
import {signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {auth,db} from "../FirebaseConfig.js"




import "./Login.css"

function Login(){

    const user=auth.user
    console.log(user)

    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[student,setStudent]=useState([])
    const[message,setMessage]=useState("")


useEffect(()=>{
    
    const unsubscribed=onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setStudent(currentUser)
        }
        else{
            setMessage("Already have an account? Login.")
        }
    })

    

   
    return ()=>unsubscribed()
},[])



function handleLogin(e){
    e.preventDefault()

    if(email=="" || password==""){
        setMessage("Your email and password are required.")
    }
    else{
        signInWithEmailAndPassword(auth,email,password).then((user)=>{
            if(user){
                setMessage("Success! Redirecting to your dashbaord...")
                setTimeout(()=>{
                    navigate("/dashboard")
                },3000)
            }
            else{
                setMessage("Unknown user. Access denied!")
            }
        })
    }

}


    return(
        <section className="login-container container">
            <img src={schoologo} width="100"/>
           
            <h2>Login page</h2>
            <p>Welcome back {student.email} to Starlite International School. Please login to access your account.</p>

             <form>
                <h3>{message}</h3>
                <input type="text" placeholder="Enter your email address" onChange={(e)=>{setEmail(e.target.value)}}/><br />
                                        
                                
                <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
                           
                <button className="btn-login" onClick={handleLogin}>Login</button>
                <span className="account-statement">New to Startlite?<Link to="/register" className="link-account">Sign up</Link></span>
            
            </form>
        </section>
    )
}

export default Login
