import React from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			totalResults: 0,
			loading: true,
			page: 1,
		}
	}

	async updateNews() {
		try {
			const NewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=decfb26949ae4129a410a56d97ba2456&page=${this.state.page}&pageSize=${this.props.pageSize}`;
			this.setState({loading: true });
			
			this.props.setProgress(30);
			const getNews = await fetch(NewsUrl);
			const getData = await getNews.json();

			if(getData.articles && getData.totalResults) {
				this.setState({
					data: getData.articles,
					totalResults: getData.totalResults,
					loading: false,
				});
				this.props.setProgress(100);
			}
		}
		catch(error) {
			console.log("can't get data due to this error: " + error);
			this.setState({loading: false});
		  }		  
	}

	capitalize(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	componentDidMount() {
		document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
		this.updateNews();
	}

	async fetchData() {
		try {
			const NewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=decfb26949ae4129a410a56d97ba2456&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
			this.setState({loading: true});
			
			this.props.setProgress(30);
			const getNews = await fetch(NewsUrl);
			const getData = await getNews.json();

			if(getData.articles && getData.totalResults) {
				this.setState({
					data: this.state.data.concat(getData.articles),
					totalResults: getData.totalResults,
					loading: this.state.data.length === 0,
					page : this.state.page + 1,
				});
				this.props.setProgress(100);
			}
		}
		catch(error) {
			console.log("can't get data due to this error: " + error);
			this.setState({loading: false});
		}
	}
    
	render() {
		let images = `https://via.placeholder.com/400x200`;

		return (
			<>
				<div className="text-center bg-blue-50 px-4">
					<h1 className="text-2xl font-bold py-4"> NewsMonkey - {this.capitalize(this.props.category)} Top Headlines</h1>
					{/* {this.state.loading && <Loader/>} */}
				</div> 

				<InfiniteScroll
					dataLength={this.state.data.length}
					next={this.fetchData.bind(this)}
					hasMore={this.state.data.length < this.state.totalResults}
					loader={this.state.loading && <Loader/>}
					style={{ display: 'flex', flexDirection: 'column'}} >

					<div className="container m-auto flex flex-wrap">
						<div className="flex flex-row justify-evenly gap-8 flex-wrap m-4 bg-blue-50"> 
							{!this.state.loading && this.state.data.map((element) => (
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
}

News.propTypes =  {
	country: PropTypes.string.isRequired,
	setProgress: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	category: PropTypes.string.isRequired
}

export default News;

