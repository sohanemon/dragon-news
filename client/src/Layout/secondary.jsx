import { Outlet } from "react-router-dom";
import LeftNav from "../components/common/left-nav";
import RightNav from "../components/common/right-nav";
const Secondary = () => {
  return (
    <>
      <div className='grid grid-cols-12'>
        <aside className='col-span-2 h-min sticky top-24'>
          {/* note: when sticky top not works */}
          <LeftNav />
        </aside>
        <main className='col-span-7'>
          <Outlet />
        </main>
        <aside className='col-span-3'>
          <RightNav />
        </aside>
      </div>
    </>
  );
};

export default Secondary;
