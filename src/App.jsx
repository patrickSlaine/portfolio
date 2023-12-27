import './App.css';
import React,{useState,useEffect, lazy} from 'react';
import WithSuspense from "./components/WithSuspense";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { themes } from "./assets/theme";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./global";
import EducationAchievements from './Pages/EducationAchievements';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Blogs from './Pages/BlogsSummary';
import ReactGA from "react-ga";
import Blog from "./Pages/Blog";
import { blogs } from './assets/blogs';
import {applicationSettings} from "./assets/portfolio";

function App() {

  const [theme, setTheme] = useState("dark");
  
  const Home = WithSuspense(lazy(()=> import("./Pages/Home")));

  ReactGA.initialize(applicationSettings.googleAnalyticsMeasurementId);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles/>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            exact
            element={<Home 
              theme={themes[theme]}
              setTheme={setTheme}/>}
          />
          <Route
            path="/education"
            exact
            element={<EducationAchievements
              theme={themes[theme]}
              setTheme={setTheme}/>}
          />
          <Route
            path="/experience"
            exact
            element={<Experience
                      theme={themes[theme]}
                      setTheme={setTheme}/>}
          />
          <Route
            path="/projects"
            exact
            element={<Projects
                      theme={themes[theme]}
                      setTheme={setTheme}/>}
          />
          <Route
            path="/contact"
            exact
            element={<Contact
                      theme={themes[theme]}
                      setTheme={setTheme}/>}
          />
          {blogs.data.length === 0?
          <></>:
          <>
          <Route
            path="blogs/:id"
            exact
            element={<Blog
                      theme={themes[theme]}
                      setTheme={setTheme}/>}
          />
          <Route
            path="/blogs"
            exact
            element={<Blogs
                      theme={themes[theme]}
                      setTheme={setTheme}/>}
          />
          </>}
          <Route 
            path="*" 
            element={
            <Navigate to="/"/>}
           />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
