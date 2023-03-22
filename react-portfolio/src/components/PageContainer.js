import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div  style={{background: 'black', backgroundSize:'cover' }}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
