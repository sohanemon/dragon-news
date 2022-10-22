import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Author } from "./category";

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/news/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data));

    return () => {};
  }, []);
  return (
    <article>
      <img src={news?.image_url} alt='thumbnail' className='h-96 w-full mb-4' />
      {Author(news?.author)}
      <section>{news?.details}</section>
    </article>
  );
};

export default News;
