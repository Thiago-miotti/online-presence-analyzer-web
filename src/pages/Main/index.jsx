import React from 'react';

// Components
import SidebarOpa from "../../components/SidebarOpa";

// Pages
import Company from "../Company";
import Dashboard from "../Dashboard";

// React router
import { Routes, Route} from "react-router-dom";

const Main = () => {
    return (
        <div className="main-container">
        <SidebarOpa />

        <Routes>
            <Route path="/:company" element={<Company />} />
            <Route path="/" element={<Dashboard />} />
        </Routes>
        </div>
    );
};

export default Main;