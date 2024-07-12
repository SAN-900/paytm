export const Balance = ({amount}) => {

    return <div className="flex">
      <div className="font-bold text-md">
        Your Balance: </div>
      <div className="font-semiBold text-md"> 
        Rs. {amount} </div>
    </div>
}