import css from './News.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'
// Components
import NewsItem from 'components/Items/NewsItem'
// Images
import flowerNewsImg from 'images/flowers/flower-news.jpeg'

const News = ({ className, title }) => {
  return (
    <section className={cn(css.news, className)} id="news">
      <div className={css.news_top}>
        <div className={css.news_title}>{title}</div>
        <div className={css.news_link}>See all</div>
      </div>
      <NewsItem
        title="Indoor flowers and potted plants"
        views="16"
        date="16.06.21"
        image={flowerNewsImg}
      />
      <div className={css.news_item}></div>
    </section>
  )
}

News.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
}

export default News
