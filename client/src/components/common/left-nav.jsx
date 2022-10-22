import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    return () => {};
  }, []);

  return (
    <section className='list-none font-semibold tracking-[1px] ml-3 space-y-4 '>
      {categories.map((el) => (
        <p key={el.id}>
          <NavLink
            className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            to={`/category/${el.id}`}
          >
            {el.name}
          </NavLink>
        </p>
      ))}
    </section>
  );
};

export default LeftNav;
