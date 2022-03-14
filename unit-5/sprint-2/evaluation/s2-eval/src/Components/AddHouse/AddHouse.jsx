import {useState} from "react" 

export const AddHouse = () => {

  const [data,setData] = useState({
    name:"",
    ownerName:"",
    address:"",
    areaCode:"",
    rent:"",
    bachelor:false,
    married:false,
    image:""

  })

  function handleForm (event) {
 setData((pre=>{
   return {...pre,[event.target.className]:event.target.value}
 }))
  }

  function handleCheck(event) {
   
    setData(pre=>{
      return {...pre,[event.target.className]:event.target.checked}
    })

  }

  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input type="text" className="name" value={data.name} required onChange={handleForm} />
        <br />
        <label>ownerName</label>
        <input value={data.ownerName} type="text" className="ownerName" onChange={handleForm} required />
        <br />
        <label>address</label>
        <input value={data.address} type="text" className="address" onChange={handleForm} required />
        <br />
        <label>areaCode</label>
        <input value={data.areaCode} type="text" className="areaCode" onChange={handleForm} required />
        <br />
        <label>rent</label>
        <input value={data.rent} type="text" className="rent" onChange={handleForm} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={data.bachelor} type="checkbox" className="bachelor" onChange={handleCheck} />
        <br />
        <label>married</label>
        <input checked={data.married} type="checkbox" className="married" onChange={handleCheck} />
        <br />
        <label>image</label>
        <input value={data.image} type="text" className="image" required onChange={handleForm} />
        <br />
        <input className="submitBtn" type="submit" onClick={()=>{
    console.log(data)
        }} />
      </form>
    </div>
  );
};
