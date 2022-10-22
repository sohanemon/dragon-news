import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Author } from "./category";

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return setNews(data);
      });
    return () => {};
  }, []);
  return (
    <article>
      <img src={news?.image_url} alt='thumbnail' className='h-96 w-full mb-4' />
      {Author(news?.author)}
      <section>{news?.details}</section>
      <div className='flex justify-end'>
        <button
          onClick={() => navigate(`/category/${news?.category_id}`)}
          type='button'
          title='Start buying'
          className='w-full my-4  py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 sm:w-max'
        >
          <span className='block text-sky-900 font-semibold lg:text-sm'>
            More news in this category
          </span>
        </button>
      </div>
    </article>
  );
};

export default News;
