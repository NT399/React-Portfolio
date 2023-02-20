import './App.css';
import React, { useState }  from 'react';
import Header from './components/header';
import Nav from './components/navigation';
import Project from './components/project';
import About from './components/aboutme';
import Footer from './components/footer';
import Contact from './components/contact';


function App() {

   const [Page, viewingPage] = useState('About');

   const renderPage = () => {
  if (Page === 'Project') {
    return <Project />;
  }
  if (Page === 'About') {
    return <About />;
  }
  if (Page === 'Contact') {
    return <Contact />;
  }
};

  const clickedPage = (page) => viewingPage(page);

  return (
    <div className="App">

        <Header></Header>
       <Nav Page={Page} clickedPage={clickedPage} />
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;
