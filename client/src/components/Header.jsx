import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [window.location.search]);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to='/'>
          <h1 className='font-extrabold text-lg sm:text-2xl flex items-center'>
            <span className="text-white">Yaminee</span>
            <span className="text-yellow-300 ml-1">Estate</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-white p-1 sm:p-2 rounded-full flex items-center shadow-lg border-2 border-indigo-300'>
  <input 
    type="text" 
    placeholder="Search..." 
    className='bg-transparent focus:outline-none w-32 sm:w-72 px-4 py-2 text-gray-700 rounded-l-full'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button type="submit" className='bg-indigo-500 text-white rounded-full p-2 hover:bg-indigo-600 transition duration-300'>
    <FaSearch />
  </button>
</form>

        <ul className='flex gap-4'>
          <Link to='/'>
            <li className="hidden sm:inline text-white hover:text-yellow-300 transition duration-300">Home</li>
          </Link>
          <Link to='/about'>
            <li className="hidden sm:inline text-white hover:text-yellow-300 transition duration-300">About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-8 w-8 object-cover border-2 border-white' src={currentUser.avatar} alt='profile'/>
            ) : (
              <li className="text-white hover:text-yellow-300 transition duration-300">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
