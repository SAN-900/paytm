import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    

    return <div className="flex justify-center h-screen bg-gray-100">
        <div className=" flex flex-col h-full justify-center">
            <div
                className="shadow-lg border h-min bg-white text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col p-6 space-y-1.5">
                <h2 className="text-3xl font-bold justify-center text-center">Send Money</h2>
                </div>
                <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="border rounded-full h-12 w-12 bg-green-500 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-black">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold ">{name}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <label
                        className="flex flex-col font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        type="number"
                        className="border rounded-lg h-10 w-full bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={ async () => {
                        await axios.post("http://localhost:3000/api/v1/acount/transfer", {
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                        
                        if( true ){
                        alert("going to dashboard in few sec.")
                        navigate('/dashboard')
                    }

                    }} className="border bg-green-500 rounded-md text-sm font-medium justify-center ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white hover:bg-green-400">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}