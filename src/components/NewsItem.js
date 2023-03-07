import styles from "./NewsItem.module.css";

const NewsItem = ({ news }) => {
  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <img
          className={styles.img} 
          src={news.urlToImage} 
          alt={news.title} 
        />
      </article>
      <article>
        <p>{news.content.slice(0, 201)}</p>
        <p>Source: {news.source.name}</p>
        <a 
          href={news.url} 
          target="_blank" rel="noreferrer"
        >
          Read More
        </a>
      </article>
    </section>
  );
};

export default NewsItem;