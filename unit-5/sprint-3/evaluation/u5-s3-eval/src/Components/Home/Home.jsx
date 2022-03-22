import { BookCard } from "../BookCard/BookCard";
// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from 'axios'
import styled from "styled-components"
import {useState,useEffect} from "react"

const Main = styled.div`
/* Apply some responsive styling to children */
display:grid;
grid-template-column:200px 200px 200px;
`;

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

    const [data,setData] =  useState([])

    useEffect(()=>{
      axios.get(" http://localhost:8080/books").then((res)=>{
      setData(res.data)
      })
    },[])


  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      {/* <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      /> */}

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
              */
             data.map((element)=><BookCard id={element.id} imageUrl={element.imageUrl} title={element.title} price={element.price} key={element.id} />)
      }

       

      </Main>
    </div>
  );
};
