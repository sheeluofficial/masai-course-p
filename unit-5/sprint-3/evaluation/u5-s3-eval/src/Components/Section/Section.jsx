import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
const Main = styled.div`
/* Same as Homepage */
`;

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const [data,setData] =  useState([])
     const {section} = useParams()

     useEffect(()=>{
      axios.get(" http://localhost:8080/books").then((res)=>{
      setData(res.data.filter((a)=>a.section===section))
    
      })
    
    },[data])

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
          section
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */
         data.map((element)=><BookCard id={element.id} imageUrl={element.imageUrl} title={element.title} price={element.price} key={element.id} />)
        }
      </Main>
    </>
  );
};
