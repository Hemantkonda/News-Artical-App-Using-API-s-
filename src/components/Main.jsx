import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed')
      .then(response => setNews(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {news.map((article) => (
            <div className="col-lg-4 mb-5" key={article.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={article.jetpack_featured_media_url}
                  alt={article.title.rendered}
                />
                <div className="card-body">
                  <h2>{article.title.rendered}</h2>
                  <p> {article.excerpt.rendered} </p>
                  <a href={article.link} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
