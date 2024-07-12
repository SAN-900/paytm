import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
export const Signin = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return <div className="justify-center flex bg-slate-300 h-screen">
        <div className="flex justify-center flex-col">
        <div className="border rounded-lg shadow-lg bg-white h-max w-96 p-2 px-4 ">
       <div className="text-center">
       <Heading lable={"Sign in"}/>
       <SubHeading lable={"Enter your username & password"}/>
       </div>
       <InputBox onChange={e =>{
        setUsername(e.target.value)
       }} lable={"Username"} placeholder={"Username"}/>
       <InputBox onChange={e =>{
        setPassword(e.target.value)
       }} type={"password"} lable={"Password"} placeholder={"Password"} className="block text-sm font-bold font-medium text-black-800"/>
       <div className="pt-4">
       <Button onClick={async () =>{
        const response = await axios.post("http://localhost:3000/api/v1/users/signin",
        {
            username,
            password
        })
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
       }}  lable={"Sign In"}/>
       </div>
       <BottomWarning lable={"Not an account go to"}  buttonText={"Sign up"} to={"/signup"}/>
    </div>
    </div>
    </div>
}