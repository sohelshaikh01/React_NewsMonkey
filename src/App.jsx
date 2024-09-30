import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { Routes, Route } from 'react-router-dom';


function App() {

	// Remain some fixing and navbar sticky check

	const pageSize = 15;
	const [progress, setProgress] = useState(0);
	const apiKey = import.meta.env.VITE_NEWS_API_KEY

	return (
		<>
		
    	<Navbar/>
		<LoadingBar color='#f11946' progress={progress}  />

		<Routes>
			<Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  country="us" key="Homepage" category="general" pageSize={pageSize} />} />
			<Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  country="us" key="general" category="general" pageSize={pageSize} />} />
			<Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  country="us" key="business" category="business" pageSize={pageSize} />} />
			<Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  country="us" key="entertaiment" category="entertainment" pageSize={pageSize} />} />
			<Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  country="us" key="health" category="health" pageSize={pageSize} />} />
			<Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  country="us" key="science" category="science" pageSize={pageSize} />} />
			<Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  country="us" key="sports" category="sports" pageSize={pageSize} />} />
			<Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  country="us" key="category" category="technology" pageSize={pageSize} />} />
		</Routes>
	</>
	)

}

export default App;

