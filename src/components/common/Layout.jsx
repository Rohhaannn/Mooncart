import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';


const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
        <main style={{ flex: 1 }}>
          <Outlet/>
        </main>
      <Footer />
    </div>

);
};


Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;