import React from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Loader from './Loader';

export class News extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			totalResults: 0,
			loading: true
		}
	}

	async updateNews() {
		try {
			const NewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=decfb26949ae4129a410a56d97ba2456&pageSize=${this.props.pageSize}`;
			this.setState({Loading: true});

			const getNews = await fetch(NewsUrl);
			const getData = await getNews.json();

			if(getData.articles && getData.totalResults) {
				this.setState({
					data: getData.articles,
					totalResults: getData.totalResults,
					loading: false
				});
			}
		}
		catch(error) {
			console.log("can't get data due to this error: " + error);
		}
	}

	capitalize(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	componentDidMount() {
		document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
		this.updateNews();
	}
    
	render() {
		let images = `https://via.placeholder.com/400x200`;
		return (
			<>
				<div className="text-center bg-blue-50 px-4">
					<h1 className="text-2xl font-bold pb-4"> NewsMonkey - {this.capitalize(this.props.category)} Top Headlines</h1>
					{this.loading && <Loader/>}
				</div>


				<div className="flex content-start justify-evenly gap-8 flex-wrap -p-4 bg-blue-50"> 
					{!this.loading && this.state.data.map((element) => (
						<NewsItem key={element.url}
						title={element.title?element.title:"This is title"} 
						description={element.description?element.description.slice(0, 120):"This is description"} 
						imageUrl={element.urlToImage?element.urlToImage:images} url={element.url}
						author={element.author?element.author:"The Unknown"} date={element.publishedAt}
						source={element.source.name} />
					))} 
				</div>
			</>
		);
  }
}

News.propTypes =  {
	country: PropTypes.string.isRequired,
	pageSize: PropTypes.number.isRequired,
	category: PropTypes.string.isRequired
}

export default News;

