import React from 'react';
import NewsItem from './NewsItem';

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
			const NewsUrl = `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=decfb26949ae4129a410a56d97ba2456&pageSize=15`;

			const getNews = await fetch(NewsUrl);
			const getData = await getNews.json();

			if(getData.articles && getData.totalResults) {
				this.setState({
					data: getData.articles,
					totalResults: getData.totalResults
				})
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
    return (
      <>
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-4"> NewsMonkey - Top Headlines</h1>
        </div>

        <div className="flex content-start justify-evenly gap-8 flex-wrap mx-4 my-2"> 
            {this.state.data.map((element) => (
                <NewsItem key={element.url}
				title={element.title?element.title:"This is title"} 
				description={element.description?element.description.slice(0, 120):"This is description"} 
				imageUrl={element.urlToImage} url={element.url}
				author={element.author?element.author:"The Unknown"} date={element.publishedAt}
				source={element.source.name} />
            ))} 
        </div>
      </>
      
    );
  }
}

export default News;

