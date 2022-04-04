// import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PostList from "./components/PostList";
import Discard from "./components/Discard";
import MainFile from "./components/MainFile";
import Navbar from "./components/navbar/Navbar";
// import 'antd/dist/antd.css';
import { ToastContainer } from 'react-toastify';



export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Discard} />
          <Route exact path="/MainFile" component={MainFile} />
          <Route exact path="/PostList" component={PostList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
