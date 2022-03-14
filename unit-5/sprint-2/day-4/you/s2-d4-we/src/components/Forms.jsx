import { useState } from "react";

 
export function Form() {
    const [formData,setFormData] = useState({userName:"",age:"",email:""})
    function getData(e) {
        
        setFormData({...formData,[e.target.name]:e.target.value})
     
    }

    function SubmitData(e) {
    e.preventDefault()

  console.log(formData)
  setFormData({...{userName:"",age:"",email:""}})

    }
return ( <form onSubmit={SubmitData}>

    <input value={formData.userName} type="text" name="userName" placeholder="Enter Name" onChange={getData} />
    <input value={formData.age} type="number" name="age" placeholder="Enter age" onChange={getData} />
    <input value={formData.email} type="email" name="email" placeholder="Enter Email" onChange={getData} />
    <input type="submit" value="Submit Data" />
</form>

    )

}
