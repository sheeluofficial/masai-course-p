import React from "react"

 
export function Timer() {
const [timer,setTimer] = React.useState(10)

React.useEffect(()=>{
  let id=  setInterval(() => {
        setTimer((pre)=>{
            if(pre===0) {
                clearInterval(id)
                return 0
            }
            return pre-1
        })

    }, 1000);
    
    return ()=>{
        clearInterval(id)
    }
},[])

    return <div>
        <span>Timer:</span>{timer}
    </div>

}
