import { Outlet } from "react-router-dom";
import TopNav from "../components/common/top-nav";

const Main = () => {
  return (
    <div className='relative'>
      <nav className='sticky w-full top-0 mb-4'>
        <TopNav />
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
