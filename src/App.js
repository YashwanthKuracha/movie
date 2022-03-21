import './App.css';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import { useEffect, useState } from 'react';

const data = {
  movieDetails: {
    title: 'Test Title', imageURL: '', imageTitle: 'Test Image Title', description: 'Test Desc'
  },
  photos: [
    {
     url: '' 
    },
  ],
  cast: [{
    name: 'Test Name', characterName: 'Test Char Name', profileURL: ''
  }]
}

const getMockData = async () => {
  return Promise.resolve(data);
}

function App() {
  const [loading, setLoading] = useState(false);
  const [mockData, setMockData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getMockData().then((data) => {
        setLoading(false);
        setMockData(data)
      }).catch(e => {
        setLoading(false);
        setError(true)
      })
    }, 1000)
  }, [])
  return (
    <div className="App">
      <Header />
      {
        error && <h1>error</h1>
      }
      {
        loading && <h1>loading...</h1>
      }
      {
        !loading && !error && <MovieDetails {...mockData} />
      }
    </div>
  );
}

export default App;
