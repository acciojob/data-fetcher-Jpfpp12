import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
        {/* Do not remove the main div */}
      <h1>Fetched Data from API</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && !loading && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
