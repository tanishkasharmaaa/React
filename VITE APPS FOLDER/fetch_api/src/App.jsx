import React, { useEffect, useState } from 'react';
import './App.css';
import DataDisplay from './components/DataDisplay';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Something went wrong. Reload the site or visit later.</h2>;
  }

  return (
    <>
      <div>
        <button onClick={fetchData}>Fetch Data</button>
        <DataDisplay data={data} />
      </div>
    </>
  );
}

export default App;
