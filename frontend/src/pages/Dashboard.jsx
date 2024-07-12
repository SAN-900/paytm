import { AppBar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users} from '../components/Users'
import axios from 'axios'
import { useState, useEffect } from 'react'
export const Dashboard = () => {
    const [balance, setBalance] = useState(0);
  
    useEffect(() => {
      const fetchBalance = async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/v1/acount/balance", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          });
        
       const result = parseInt(res.data.balance);
          setBalance(result);
        }
        catch (error) {
            console.log(balance)
            console.error("Error fetching balance:", error);
            // Handle the error (e.g., show an error message to the user)
          }
        }
        fetchBalance();
    }, []);
    return <div className="flex justify-center bg-slate-300 h-screen">
        <div className="flex justify-center flex-col">
        <div className="border rounded-lg shadow-lg bg-white h-max w-96 p-2 px-4 ">
        <AppBar/>
        <div>
        <Balance amount={balance}/>
        <Users />
        </div>
    </div>
    </div>
    </div>
}