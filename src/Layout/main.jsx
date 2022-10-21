import { Outlet } from "react-router-dom";
import LeftNav from "../components/common/left-nav";
import RightNav from "../components/common/right-nav";

const Main = () => {
  return (
    <div>
      <nav className=''>header</nav>
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
