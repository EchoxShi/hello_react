import React from "react";
import { HashRouter, Route ,Routes } from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/NewsSandBox";
export default function IndexRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/*" element={<NewsSandBox></NewsSandBox>}/>
        {/* <Route path="/" render={() => 
          localStorage.getItem("token")?
        <NewsSandBox></NewsSandBox>:
        <Redirect to="/login"/>}></Route> */}
      </Routes>
    </HashRouter>
  );
}
