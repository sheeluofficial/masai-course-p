
export const GroceryList = ({items,deleteItem})=>{
    return (
    <div>
      {items.map((data)=>{
          return    (
                <div key={data.id}>
                <h3>{data.item}</h3>
                <button onClick={()=>{
                   
                 deleteItem(data.id)
                    } }>Delete</button>
               </div>
              )
          }
       )
    }
    </div>
       
    )
}