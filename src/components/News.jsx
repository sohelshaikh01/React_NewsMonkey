import {useState, useEffect} from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {

	const [data, setData] = useState([]);
	const [totalResults, setTotalResults] = useState(0);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const {setProgress, country, category, apiKey, pageSize} = props;
	const images = `https://via.placeholder.com/400x200`;

	const updateNews = async() => {

		try {
			const NewsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&sortBy=publishedAt&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
			setLoading(true);
			
			setProgress(30);
			const getNews = await fetch(NewsUrl);
			const getData = await getNews.json();

			if(getData.articles && getData.totalResults) {
				setData(getData.articles);
				setTotalResults(getData.totalResults);
				setLoading(true);
				setProgress(100);
			}
		}
		catch(error) {
			console.log("can't get data due to this error: " + error);
			setLoading(true);
		}		  
	}

	const capitalize = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	useEffect(() => {
		document.title = `${capitalize(category)} - NewsMonkey`;
		updateNews();
	});

	const fetchData = async () => {

		try {
			const NewsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&sortBy=publishedAt&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
			setLoading(true);
			
			setProgress(30);
			const getNews = await fetch(NewsUrl);
			const getData = await getNews.json();

			if(getData.articles && getData.totalResults) {
				setData(data.concat(getData.articles));
				setTotalResults(getData.totalResults);
				setLoading(data.length === 0);
				setPage(page + 1);
				setProgress(100);
			}
		}
		catch(error) {
			console.log("can't get data due to this error: " + error);
			setLoading(true);
		}
	}
	
	return (
	<>
		<div className="text-center bg-blue-50 px-4">
			<h1 className="text-2xl font-bold py-4"> NewsMonkey - {capitalize(category)} Top Headlines</h1>
			{/* {loading && <Loader/>} */}
		</div> 

		<InfiniteScroll
			dataLength={data.length}
			next={fetchData}
			hasMore={data.length < totalResults}
			loader={loading && <Loader/>}
			style={{ display: 'flex', flexDirection: 'column'}} >

			<div className="container m-auto flex flex-wrap">
				<div className="flex flex-row justify-evenly gap-8 flex-wrap m-4 bg-blue-50">

					{!loading && data.map((element) => (
						<NewsItem key={element.url} title={element.title?element.title:"This is title"} 
						description={element.description?element.description.slice(0, 120):"This is description"} 
						imageUrl={element.urlToImage?element.urlToImage:images} url={element.url}
						author={element.author?element.author:"The Unknown"} date={element.publishedAt}
						source={element.source.name} />
					))} 
					
				</div>
			</div>
		</InfiniteScroll>
	</>
	
	);
}


News.propTypes =  {
	country: PropTypes.string.isRequired,
	setProgress: PropTypes.number.isRequired,
	apiKey: PropTypes.string.isRequired,
	pageSize: PropTypes.number.isRequired,
	category: PropTypes.string.isRequired
}

export default News;

