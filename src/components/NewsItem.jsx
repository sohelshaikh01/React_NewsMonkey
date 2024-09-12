import { Component } from 'react';
import PropTypes from 'prop-types';


export class NewsItem extends Component {

  render() {
    const {url, date, imageUrl, author, source, title, description} = this.props;

    return (
      <div className="card min-w-32 max-w-[380px] border border-gray-400 bg-white">

        <img src={imageUrl} alt="UrlToImage"/>

        <div className="card-body flex flex-col justify-center gap-2 p-4">
          <h5 className="card-title text-xl font-bold">{title.slice(0, 50)}...</h5>
          <p className="card-text">{description.slice(0, 120)}...</p>
          <p>{source} </p>
          <small className='text-muted'>By {author?author:'unknown'} on {new Date(date).toGMTString()}</small>
          <a href={url}> Read More</a>
        </div>
      </div>
    )
  }
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsItem
