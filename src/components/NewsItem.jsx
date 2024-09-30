import PropTypes from 'prop-types';

function NewsItem (props){

  const {url, date, imageUrl, author, source, title, description} = props;

    return (
      <div className="card max-w-[320px]  bg-white">

        <img src={imageUrl} className="max-h-[200px] w-[100%]" alt="UrlToImage"/>

        <div className="card-body flex flex-col justify-center gap-2 p-4">

          <h5 className="card-title text-xl font-bold">{title.slice(0, 50)}...</h5>
          <p className="card-text ">{description.slice(0, 120)}...</p>
          <p className="font-semibold">{source} </p>
          <small className='text-muted text-sm leading-5'>By {author?author:'unknown'} on {new Date(date).toGMTString()}</small>
          <a href={url} className="bg-black inline-block px-4 py-1 text-white mt-2 "> Read More</a>
        </div>

      </div>
    );
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

export default NewsItem;
