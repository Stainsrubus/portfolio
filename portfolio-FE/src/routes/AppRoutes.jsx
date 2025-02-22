import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../utils/loader';
import AxiosService from '../utils/ApiService';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, hideLoading, setPortfolioData } from '../redux/rootslice';
import Header from '../components/common/Header';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Skills from '../components/pages/Skills';
import Projects from '../components/pages/project/Projects';
import Education from '../components/pages/Education';
import Certifications from '../components/pages/Certifications';
import Contact from '../components/pages/Contact';
import Footer from '../components/common/Footer';

function AppRoutes() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(showLoading());
      const response = await AxiosService.get('/get-portfolio-data');
      dispatch(setPortfolioData(response.data));
      dispatch(hideLoading());
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
       <Header />
      <Home />
      <About />
      <Skills />
      <Education/>
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
        </>
      )}
    </>
  );
}

export default AppRoutes;
