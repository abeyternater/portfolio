import React from 'react';
import './index.css';
import App from './Home/App';
import { createRoot } from "react-dom/client";
import About from "./About/About";
import PageLayout from './PageLayout/PageLayout';
import {
    Routes,Route,BrowserRouter
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';



createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route element={<PageLayout />}>
                <Route path= "/" element={<App />} />
                <Route path= "/About" element={<About />} />
                <Route path= "/Blog" element ={<Blog />} />
                <Route path= "/Projects" element={<Projects />} />
                <Route path= "/Contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
