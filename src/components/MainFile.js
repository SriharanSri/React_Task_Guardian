import React, { useEffect,useState,Component } from "react";
// import { useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "ghgjghj", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
function MainFile() {

  const [postFiles,setPostFiles]=useState([])
  const [value,setValue]=useState({})
  const [dataFile,setDataFile]=useState()

  useEffect(() => {
    getdata();
    // console.log('jsjhds',postFiles[0])
  }, []);
  const getdata = () => {
    axios
      .get("https://gorest.co.in/public/v2/posts")

      .then((res) => {
        setPostFiles(res.data);
        
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  };
  const searchPost = postFiles.map(item => {
    return {
      value: item.id,
      label: item.body
   }
 })

  return (
    <div className="headercontainer">
      <p  >Search All User Posts</p>
      
      <Select className="search"  options={ searchPost? searchPost : null}   onChange={value => setValue(value)} />
      <p className="result">  {value &&  value.label ? ' Search Results' : null}   </p>
      <p className="searchresult" >{value &&  value ? value.label : null}</p>
    </div>
  );
}

export default MainFile;
