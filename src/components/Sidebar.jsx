import React, { useState } from 'react';
import "../components/Sidebar.css"

function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState(60)
  const toggleWidth = () => {
    setSidebarWidth(prevWidth => prevWidth === 60 ? 250 : 60); // Toggle between 60px and 310px
  };
  const isExpanded = sidebarWidth !== 60;
  return (
    <div className="sidebar-container" style={{ width: `${sidebarWidth}px` }}>
      <div className="sidebar-item">
        <button className='icon-button' onClick={toggleWidth}>
          <span><i class="fa-solid fa-bars"></i></span>
        </button>

        <button className='icon-button'>
          <span><i class="fa-solid fa-comments"></i></span>
          {isExpanded && <span className='icon-text'>Chats</span>}
        </button>

        <button className='icon-button'>
          <span><i class="fa-solid fa-bars"></i></span>
          {isExpanded && <span className='icon-text'>Chats</span>}
        </button>

        <button className='icon-button'>
          <span><i class="fa-solid fa-bars"></i></span>
          {isExpanded && <span className='icon-text'>Chats</span>}
        </button>
      </div>
    </div>
  )
}

export default Sidebar
