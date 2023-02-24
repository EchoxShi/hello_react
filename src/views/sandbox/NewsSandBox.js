import React from "react";
import { Route, Routes,Navigate  } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import RightList from "./role-manage/RightList";
import RoleList from "./role-manage/RoleList";
import UserList from "./user-manage/UserList";
import Home from "./home/Home.js";
import NoPermission from "./nopermission/NoPermision"

export default function NewsSandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>
      <Home></Home>

      {/* 页面主体部分，通过路由进行切换
      Switch 精确匹配，匹配到即停止，没有机会到redirect 
      redirect 是模糊匹配，加上exact 是精确匹配*/}
      <Routes>
        <Route path="/home" element={()=><Home></Home>}></Route>
        <Route path="/user-manage/list" element={<UserList></UserList>}></Route>
        <Route path="/right-manage/role/list" element={<RoleList></RoleList>}></Route>
        <Route path="/right-manage/right/list" element={<RightList></RightList>}></Route>

        {/* <Navigate  to="/" element="/home" exact></Navigate> */}
        {/* <Route path="/" element={ <Navigate to="/home" /> } /> */}
        <Route path="*" element={<NoPermission></NoPermission>}></Route>
      </Routes>
    </div>
  );
}
