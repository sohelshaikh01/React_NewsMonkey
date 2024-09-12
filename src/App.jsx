import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';


function App() {

	const pageSize = 15;

  return (
	<>
    	<Navbar/>	
		<Routes>
			<Route exact path="/" element={<News country="us" key="general" category="general" pageSize={pageSize} />} />
			<Route exact path="/general" element={<News country="us" key="general" category="general" pageSize={pageSize} />} />
			<Route exact path="/business" element={<News country="us" key="business" category="business" pageSize={pageSize} />} />
			<Route exact path="/entertainment" element={<News country="us" key="entertaiment" category="entertainment" pageSize={pageSize} />} />
			<Route exact path="/health" element={<News country="us" key="health" category="health" pageSize={pageSize} />} />
			<Route exact path="/science" element={<News country="us" key="science" category="science" pageSize={pageSize} />} />
			<Route exact path="/sports" element={<News country="us" key="sports" category="sports" pageSize={pageSize} />} />
			<Route exact path="/technology" element={<News country="us" key="category" category="technology" pageSize={pageSize} />} />
		</Routes>
	</>

  );
}

export default App;
