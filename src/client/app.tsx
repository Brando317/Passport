import * as React from "react";

import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";

import { User } from "./utils/apiService";

import NavBar from "./components/NavBar";

import Login from "./views/Login";

import SignUp from "./views/SignUp";

import Home from "./views/Home";

import Add from "./views/Add";

import Edit from "./views/Edit";

import SingleEntry from "./views/SingleEntry";

import UserActivities from "./views/UserActivities";

import UserSearch from "./views/UserSearch";

const App: React.FC<AppProps> = () => {
return (
<BrowserRouter>
<NavBar />
<Routes>
    
    <Route exact path = "/" element={<Home />} />


<Route path = "/login" element={<Login />} />


<Route path = "/sign_up" element={<SignUp />} />


<Route path = "/add" element={<Add />} />
    

<Route> path = "/edit:/activityId" element={<Edit />} />


<Route path = /activity/:activityId" element={<SingleEntry />} />


<Route path = "/user_activity/:userId" element={<UserActivities />} />


<Route path = "/search/:user" element={<UserSearch />} />
</Routes>
</BrowserRouter>
);
};

export interface AppProps {}

export default App;