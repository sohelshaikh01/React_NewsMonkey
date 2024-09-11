import './App.css';
import { useState } from 'react';
import Interview from './InterviewQs';

function App() {

	const greeting = "Good Morning";
	const [count, setCount] = useState(1);

	const addValue = () => {
		setCount(count + 1);
	}
	const refresh = () => {
		setCount(1);
	}

  return (
	<>
	  <div className='w-[600px]'  >
		<h2 className='bg-green-600 p-2 font-bold text-4xl text-white'> {greeting}</h2>

		<div className='h-56 text-xl  bg-slate-200 px-10 flex justify-center items-center flex-col'>
		  	<p> This is something great about the tailwind, we don&apos;t need to write the css here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero nam illo. </p>
			<div>
				<button className='w-fit my-4 mx-4 py-2 px-4 bg-black text-white' onClick={addValue}> Click {count} </button>
				<button className='w-fit my-4 mx-4 py-2 px-4 bg-black text-white' onClick={refresh}> Refresh</button>
			</div>
		</div>
	  </div>

	  {/* <Interview/> */}
	 
	</>
  )
}

export default App;
