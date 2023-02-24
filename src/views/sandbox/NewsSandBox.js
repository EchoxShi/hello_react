import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import RightList from "./role-manage/RightList";
import RoleList from "./role-manage/RoleList";
import UserList from "./user-manage/UserList";
import Home from "./home/Home.js";

export default function NewsSandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>

      {/* 页面主体部分，通过路由进行切换
      Switch 精确匹配，匹配到即停止，没有机会到redirect */}
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/user-manage/list" component={UserList}></Route>
        <Route path="/right-manage/role/list" component={RoleList}></Route>
        <Route path="/right-manage/right/list" component={RightList}></Route>
        <Redirect></Redirect>
      </Switch>
    </div>
  );
}
