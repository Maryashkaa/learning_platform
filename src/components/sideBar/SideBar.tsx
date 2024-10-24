// import { FC } from 'react';
// import { NavLink } from 'react-router-dom';

// import './Sidebar.css';

// const Sidebar: FC = () => {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-header">
//       <h2 className='sidebar-h2'>SkillSprint</h2>
//       <i className="sidebar-logo fa-brands fa-squarespace"></i>
//       </div>
//       <nav className="sidebar-menu">
//         <ul>
//           <li className="menu-item sidebar-active">
//             <i className="menu-icon fa-solid fa-border-all"></i>
//             Dashboard
//           </li>
//           <NavLink to="/a" 
//                    className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
//             <i className="menu-icon fa-solid  fa-book"></i>
//             My Courses
//           </NavLink>
//           <NavLink to="/test" 
//                    className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
//             <i className="menu-icon fa-solid fa-file-circle-question"></i>
//             Take a Test
//           </NavLink>
//           <li className="menu-item">
//             <i className="menu-icon fa-solid fa-chalkboard-user"></i>
//             Teachers
//           </li>
//           <li className="menu-item">
//             <i className="menu-icon fa-regular fa-comment"></i>
//             Messages
//             <span className="badge">8</span>
//           </li>
//           <NavLink to="/memoryGame" 
//                    className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
//             <i className="menu-icon fa-solid fa-layer-group"></i>
//             Memory Game
//           </NavLink>
//           <li className="menu-item">
//             <i className="menu-icon fa-brands fa-unsplash"></i>
//             Tetris Game
//           </li>
//           <li className="menu-item">
//             <i className="menu-icon fa-solid fa-dragon"></i>
//             Dinosaur Game
//           </li>
//         </ul>
//       </nav>
//       <div className="sidebar-footer">
//         <NavLink to="/support"
//                  className={({ isActive }) => (isActive ? 'sidebar-active' : 'sidebar-footer-item')}>
//           <i className="sidebar-footer-icon fa-regular fa-circle-question"></i>
//           Support
//         </NavLink>
//         <div className="sidebar-footer-item">
//           <i className="sidebar-footer-icon fa-solid fa-gear"></i>
//           Settings
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2 className='sidebar-h2'>{!isCollapsed && 'SkillSprint'}</h2>
        <i className="sidebar-logo fa-brands fa-squarespace"></i>
        <button className="toggle-btn" onClick={toggleSidebar}>
        {/* <i className="sidebar-logo fa-brands fa-squarespace"></i> */}
          <i className={`fa-solid ${isCollapsed ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
        </button>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li className="menu-item sidebar-active">
            <i className="menu-icon fa-solid fa-border-all"></i>
            {!isCollapsed && 'Dashboard'}
          </li>
          <NavLink to="/a" className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-solid  fa-book"></i>
            {!isCollapsed && 'My Courses'}
          </NavLink>
          <NavLink to="/test" className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-solid fa-file-circle-question"></i>
            {!isCollapsed && 'Take a Test'}
          </NavLink>
          <li className="menu-item">
             <i className="menu-icon fa-solid fa-chalkboard-user"></i>
             {!isCollapsed && 'Teachers'}
          </li>
          <li className="menu-item">
            <i className="menu-icon fa-regular fa-comment"></i>
            {!isCollapsed && 'Messages'}
            <span className="badge">8</span>
          </li>
          <NavLink to="/memoryGame" 
                   className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-solid fa-layer-group"></i>
            {!isCollapsed && 'Memory Game'}
          </NavLink>
          <li className="menu-item">
            <i className="menu-icon fa-brands fa-unsplash"></i>
            {!isCollapsed && 'Tetris Game'}
          </li>
          <li className="menu-item">
            <i className="menu-icon fa-solid fa-dragon"></i>
            {!isCollapsed && 'Dinosaur Game'}
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/support" className={({ isActive }) => (isActive ? 'sidebar-active' : 'sidebar-footer-item')}>
          <i className="sidebar-footer-icon fa-regular fa-circle-question"></i>
          {!isCollapsed && 'Support'}
        </NavLink>
        <div className="sidebar-footer-item">
          <i className="sidebar-footer-icon fa-solid fa-gear"></i>
          {!isCollapsed && 'Settings'}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;