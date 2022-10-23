import { Outlet } from "react-router-dom";
import TopNav from "../components/common/top-nav";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { useEffect } from "react";
const Main = () => {
  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts]);
  return (
    <div className='relative'>
      <Toaster />
      <nav className='sticky w-full top-0 mb-4'>
        <TopNav />
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
