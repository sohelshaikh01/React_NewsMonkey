import Icon from '../assets/favNews.ico';
import { Link } from 'react-router-dom';

function Navbar() {
    
  return (
    <div>
        <nav className=" border-gray-200 bg-purple-100 dark:bg-gray-900">
            
            <div className="max-w-screen-xl flex flex-wrap gap-3 items-center justify-between mx-auto p-4">
                
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse font-bold text-xl">
                    <img src={Icon} className="h-8" alt="NewsMonkey" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple-700 dark:text-white"> NewsMonkey</span>
                </Link>
                

                <div className="flex md:order-2 text-xl  bg-purple-100" >

                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search Icon</span>
                        </div>

                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                </div>

                <div className="items-center justify-between hidden w-full text-xl md:flex md:w-auto md:order-1" id="navbar-search">

                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  bg-purple-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-purple-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/general" className="block py-2 px-3 text-gray-900 bg-purple-100 rounded md:bg-transparent md:hover:text-slate-400 md:p-0" aria-current="page"> General</Link>
                        </li>
                        <li>
                            <Link to="/business" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Business</Link>
                        </li>
                        <li>
                            <Link to="/entertainment" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Entertaiment</Link>
                        </li>
                        <li>
                            <Link to="/health" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Health</Link>
                        </li>
                        <li>
                            <Link to="/science" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Science</Link>
                        </li>
                        <li>
                            <Link to="/sports" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Sports</Link>
                        </li>
                        <li>
                            <Link to="/technology" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Technology</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default Navbar;
