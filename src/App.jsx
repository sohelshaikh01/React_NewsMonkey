import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Routes, Route } from 'react-router-dom';


export class App extends React.Component {
	pageSize = 15;

	state = {
		progress: 0
	}

	apiKey = import.meta.env.VITE_NEWS_API_KEY;

	setProgress = (progress) => {
		this.setState({ progress: progress });
	};


  render() {
	return (
		<>
    	<Navbar/>
		<LoadingBar color='#f11946' progress={this.state.progress}  />
		<Routes>
			<Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  country="us" key="Homepage" category="general" pageSize={this.pageSize} />} />
			<Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  country="us" key="general" category="general" pageSize={this.pageSize} />} />
			<Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  country="us" key="business" category="business" pageSize={this.pageSize} />} />
			<Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  country="us" key="entertaiment" category="entertainment" pageSize={this.pageSize} />} />
			<Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  country="us" key="health" category="health" pageSize={this.pageSize} />} />
			<Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  country="us" key="science" category="science" pageSize={this.pageSize} />} />
			<Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  country="us" key="sports" category="sports" pageSize={this.pageSize} />} />
			<Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  country="us" key="category" category="technology" pageSize={this.pageSize} />} />
		</Routes>
	</>
	)
  }
}

export default App

