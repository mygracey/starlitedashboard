import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import schoologo from "../../assets/starlitelogo-removebg.png"
import {auth,db} from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ref,set,push} from "firebase/database"
import { useState } from
 "react";


import "./Register.css"



function Register(){
    const navigate=useNavigate()
    const[fullName,setFullName]=useState("")
    const[age,setAge]=useState("")
    const[classLevel,setClassLevel]=useState("")
    const[email,setEmail]=useState("")
    const[address,setAddress]=useState("")
    const[guardian,setGuardian]=useState("")
    const[relationship,setRelationship]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setCpassword]=useState("")
    const[message,setMessage]=useState("")

    

    function handleRegister(e){
        e.preventDefault()
        if(fullName=="" || age=="" || classLevel=="" || email=="" || address=="" || guardian=="" || relationship=="" || password=="" || cpassword==""){
            setMessage("Please fill in all fields!")
        }
        else{
            createUserWithEmailAndPassword(auth,email,password).then((currentUser)=>{
                console.log(currentUser.user)
                let user=currentUser.user.uid

                const schoolDbRef=ref(db,`schooldb/${user}/userFile`)
                const newChildRef=push(schoolDbRef)

                set(newChildRef,{
                    fullName:fullName,
                    age:age,
                    classLevel:classLevel,
                    email:email,
                    address:address,
                    guardian:guardian,
                    relationship:relationship,
                    createdAt:Date.now()
                }).then(()=>{
                    setMessage("Hi! " + fullName + " Your account has been successfully created!");
                    setTimeout(()=>{
                        navigate("/login")
                    },3000)
                })
                .catch((error)=>{
                    console.log(error)
                })
            })
        }
    }

    return(
        <section className="register-container container">
            <img src={schoologo} width="100"/>

            <h2>Register page</h2>
            <p>Welcome to Starlite International School. Please complete the form below to begin your child's registeration.</p>

            <form>
                <h3 className="message">{message}</h3>
                <input type="text" placeholder="Full name eg John Doe" onChange={(e)=>{setFullName(e.target.value)}}/><br />
                <input type="text" placeholder="Age eg 13 years old" onChange={(e)=>{setAge(e.target.value)}}/><br />
                <input type="text" placeholder="Class level eg SS2" onChange={(e)=>{setClassLevel(e.target.value)}}/><br />
                <input type="text" placeholder="Email address eg you@example.com" onChange={(e)=>{setEmail(e.target.value)}}/><br />
                <input type="text" placeholder="Home address eg no.123 street..." onChange={(e)=>{setAddress(e.target.value)}}/><br />
                <input type="text" placeholder="Guardian's name eg Mr.John Doe" onChange={(e)=>{setGuardian(e.target.value)}}/><br />
                <input type="text" placeholder="Relationship with guardian eg Father" onChange={(e)=>{setRelationship(e.target.value)}}/><br />
                <input type="password" placeholder="Create your password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
                <input type="password" placeholder="Confirm your password" onChange={(e)=>{setCpassword(e.target.value)}} /><br />
                <button className="btn-register" onClick={handleRegister}>Create my account</button>
                <span className="account-statement">Already have an account?<Link to="/login" className="link-account">Sign in</Link></span>

            </form>
        </section>
    )
}

export default Register