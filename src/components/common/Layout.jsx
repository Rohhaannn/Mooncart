import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    // <div style={{ display: 'flex', flexDirection: 'column', minHeight: '215vh' }}>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
