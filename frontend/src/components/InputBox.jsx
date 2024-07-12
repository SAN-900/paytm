export const InputBox = ({lable, placeholder, type, onChange}) => {

    return <div>
        <div>
             {lable}
        </div>
          <input onChange={onChange} type={type} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200"/>
    </div>
} 