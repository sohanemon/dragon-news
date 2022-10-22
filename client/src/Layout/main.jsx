import { Outlet } from "react-router-dom";
import LeftNav from "../components/common/left-nav";
import RightNav from "../components/common/right-nav";
import TopNav from "../components/common/top-nav";

const Main = () => {
  return (
    <div>
      <nav className='sticky w-full top-0 mb-4'>
        <TopNav />
      </nav>
      <div className='grid grid-cols-12'>
        <aside className='col-span-2'>
          <LeftNav />
        </aside>
        <main className='col-span-7'>
          <Outlet />
        </main>
        <aside className='col-span-3'>
          <RightNav />
        </aside>
      </div>
    </div>
  );
};

export default Main;
