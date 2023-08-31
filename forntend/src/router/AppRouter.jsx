import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login"
import Dashboard from "../components/page/Dashboard";
import Docs from "../components/page/Docs";
import Insight from "../components/page/Insight";
import Message from "../components/page/Message";
import Product from "../components/page/Product";
import Search from "../components/page/Search";
import Setting from "../components/page/Setting";

import Signup from "../components/Signup";
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="search" element={<Search />} />
                <Route path="insights" element={<Insight />} />
                <Route path="docs" element={<Docs />} />
                <Route path="product" element={<Product />} />
                <Route path="setting" element={<Setting />} />
                <Route path="message" element={<Message />} />

            </Route>
        </Routes>
    );
}


export default AppRouter;
