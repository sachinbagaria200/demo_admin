import { useState } from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id="content"
        className={`bg-accent overflow-x-hidden pt-16 transition-[margin] md:pt-0 ${
          isCollapsed ? 'md:ml-14' : 'md:ml-64'
        } h-screen`}
      >
        <div>
          <div className="sticky bg-white top-0 justify-between px-4 py-5 shadow md:px-4 z-10">
            Header
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
