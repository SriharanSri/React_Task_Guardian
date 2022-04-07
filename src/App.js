import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PostList from "./components/PostList";
import Discard from "./components/Discard";
import MainFile from "./components/MainFile";
import Navbar from "./components/navbar/Navbar";

import { ToastContainer } from 'react-toastify';



export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/" component={PostList} />
          <Route exact path="/Discard" component={Discard} />
          <Route exact path="/MainFile" component={MainFile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
