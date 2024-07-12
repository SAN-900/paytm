
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Signup = ()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return <div className="flex justify-center h-screen bg-slate-300">
        <div className="flex flex-col justify-center ">
         <div className="border rounded-lg shadow-lg bg-white h-max w-96 p-2 px-4">
           <div className="text-center">
       <Heading lable={"Sign up"}/>
       <SubHeading lable={"Enter your info to create your account"}/>
       </div>
       <InputBox type={"text"} onChange={e => {
        setFirstName(e.target.value)
       }}  lable={"First Name"} placeholder={"First Name"}/>
       <InputBox type={"text"} onChange={e => {
        setLastName(e.target.value)
       }} lable={"Last Name"} placeholder={"Last Name"}/>
       <InputBox type={"email"} onChange={e =>{
        setUsername(e.target.value)
       }}  lable={"Email"} placeholder={"Email"}/>
       <InputBox onChange={e =>{
        setPassword(e.target.value)
       }}  type={"password"} lable={"Password"} placeholder={"Password"} className="block text-sm font-bold font-medium text-black-800"/>
       <div className="pt-4">
       <Button onClick={async () =>{
        const response = await axios.post("http://localhost:3000/api/v1/users/signup",
        {
            firstName,
            lastName,
            username,
            password
        })
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
       }} lable={"Sign Up"}/>
       </div>
       <BottomWarning lable={"Already have an account"}  buttonText={"Sign in"} to={"/signin"}/>
    </div>
    </div>
    </div>
}