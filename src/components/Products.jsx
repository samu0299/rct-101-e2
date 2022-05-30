import React from "react";
import axios from "axios";
// import chakra from "chakra";
import { useState } from "react";
import { useEffect } from "react";

  
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [posts, setPosts] = useState([])
  const [page,setPage] = useState(1)
  useEffect(() => {
      axios.get(`http://localhost:8080/products?_page=${page}&_limit=3`).then((r)=>{
        setPosts(r.data);

      });
  },[page]);
  return (  
      <>
       {posts.map(post => (
          <div key={post.id}>
            {post.id}{` : `}{post.title}
            {<br></br>}
            {post.category}
            {<br></br>}
            {post.gender}
            {<br></br>}
            {post.price}
            {<br></br>}
            {<br></br>}
            
          </div>
        ))}
        <button
        disabled={page<=1}
        onClick={()=>{
          if(page>1){
            setPage(page-1);
          }
        }}
        >
          {` `}{`<`}{` `}
          </button>

        <button
        disabled={page*3>=9}
        
        onClick={()=>setPage(page+1)}>{`>`}</button>
      </>
  );
};
// {posts.map(post => (
//   <li key={post.id}>{post.title}</li>
// ))}
export default Products;


// {/* <Flex>
// {/*  AddProduct */}
// <Grid>{/* List of Products */}
//   <ul>
   
//   </ul>
// </Grid>
// {/* Pagination */}
// </Flex> */}