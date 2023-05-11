import React from 'react';
import './Home.css';
const Sidebar = ({ navRef }) => {
  const closeSidebar = () => {
    navRef.current.classList.remove('show-sidebar');
  };
  return (
    <aside ref={navRef} className="sidebar">
      <button onClick={closeSidebar}>+++</button>
    </aside>
  );
};

export default Sidebar;
