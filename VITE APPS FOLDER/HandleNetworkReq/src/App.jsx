import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
const[currentPage,setCurrentPage]=useState(1);

// -------------------------------------------------------FETCHING DATA ---------------------------------------------------------

  async function fetchPost() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
      );
      const posts = await res.json();
      setPosts(posts);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

// --------------------------------------------------------USING USEEFFECT---------------------------------------------------------
  useEffect(() => {
    fetchPost();
  }, [currentPage]);

// --------------------------------------------------------PREVIOUS PAGINATION------------------------------------------------------
function Previous(){
  if(currentPage>1){ 
    setCurrentPage((prev)=>prev-1)
  }
   else{setCurrentPage(1)}
  
  // -----------------------------------------------------NEXT PAGE PAGINATION-----------------------------------------------------
}
function Next(){
 if(currentPage<10){
  setCurrentPage((prev)=>prev+1)
 }
   else{
    setCurrentPage(10)
   }
 
  
}


  if (loading) {
    return <h1>Loading...</h1>;
  }


  if (error) {
    return <p>something went wrong</p>;
  }



  return (
    <>
    <h1>Display Posts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 250px 250px 250px 250px",
          gridGap: "10px",
        }}
      >
        {posts.map((posts) => (
          <div
            style={{
              border: "2px solid green ",
              textAlign: "left",
              padding: "10px",
            }}
          >
            <p>User ID : {posts.userId}</p>
            <p>Id : {posts.id}</p>
            <p>Title : {posts.title}</p>
            <p>Body : {posts.body}</p>
          </div>
        ))}
      </div>
      <hr />
      <hr />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          gap: "10px",
          border: "none",
        }}
      >
        <button onClick={Previous}> Previous </button>
        <div
          style={{
            border: "1px solid purple",
            fontSize: "40px",
            width: "100px",
            alignItems: "center",
            padding: "none",
            backgroundColor: "purple",
          }}
        >
          {currentPage}
        </div>
        <button onClick={Next}
          style={{ paddingLeft: "20px", paddingRight: "20px", width: "100px" }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
