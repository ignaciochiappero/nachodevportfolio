import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '20px', 
      paddingTop: '20px', 
      color: 'white', 
      textAlign: 'center',
      bottom: 0, 
      width: '100%' 
    }}>
      <p>&copy; {new Date().getFullYear()} Nacho Dev. Todos los derechos reservados.</p>
      <p>Santa Fe, Argentina</p>
    </footer>
  );
};

export default Footer;
