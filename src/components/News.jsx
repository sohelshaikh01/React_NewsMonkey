import React from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export class News extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			totalResults: 0
		}
	}

	async updateNews() {
		try {
			const NewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=decfb26949ae4129a410a56d97ba2456&pageSize=${this.props.pageSize}`;

			const getNews = await fetch(NewsUrl);
			const getData = await getNews.json();

			if(getData.articles && getData.totalResults) {
				this.setState({
					data: getData.articles,
					totalResults: getData.totalResults
				});
			}
		}
		catch(error) {
			console.log("can't get data due to this error: " + error);
		}
	}

	componentDidMount() {
		this.updateNews();
	}
    
	render() {
		let images = `https://via.placeholder.com/400x200`;
		return (
			<>
				<div className="text-center bg-blue-50 px-4">
					<h1 className="text-2xl font-bold pb-4"> NewsMonkey - {this.props.category} Top Headlines</h1>
				</div>

				<div className="flex content-start justify-evenly gap-8 flex-wrap p-4 bg-blue-50"> 
					{this.state.data.map((element) => (
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

