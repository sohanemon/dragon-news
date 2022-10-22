import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillBookmarkFill, BsFillShareFill } from "react-icons/bs";

const Category = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/category/${id || "08"}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
    return () => {};
  }, [id]); // id is important

  return (
    <section>
      <div className='sticky top-[65px] bg-white pb-3 tracking-wider'>
        {!id ? (
          <h1>All news</h1>
        ) : (
          <h1>Total {categoryData?.length} data in this category</h1>
        )}
      </div>

      <br />
      {categoryData &&
        categoryData?.map((el) => <NewsArticle key={el._id} {...el} />)}
    </section>
  );
};

export default Category;

const NewsArticle = ({ title, author, image_url, details, _id }) => {
  return (
    <article className='max-w-xl mx-auto mb-10 pt-10 border-t-2'>
      {Author(author)}
      <header className='text-2xl mb-3'>{title}</header>
      <img
        src={image_url}
        alt='thumbnail'
        className='w-full h-auto object-cover'
      />
      <section>
        {details.length > 200 ? (
          <>
            {details.slice(0, 200) + " ..."}
            <Link to={`/news/${_id}`} className='text-blue-600'>
              read more
            </Link>
          </>
        ) : (
          details
        )}
      </section>
    </article>
  );
};
export function Author(author) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2 mb-3'>
        <img
          className='w-10 rounded-full object-cover origin-top'
          src={author?.img}
          alt='author'
        />
        <div>
          <h1 className='font-semibold'>{author?.name}</h1>
          <h2 className='text-xs'>{author?.published_date}</h2>
        </div>
      </div>
      <span className='flex gap-2'>
        <BsFillBookmarkFill className='cursor-pointer hover:text-blue-400' />
        <BsFillShareFill className='cursor-pointer hover:text-blue-400' />
      </span>
    </div>
  );
}
