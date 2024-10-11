import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://frontend-laravel-hvgvfwe8czadcxg5.canadacentral-01.azurewebsites.net/api/test');
        setData(response.data.message); // Giả sử API trả về đoạn text trực tiếp
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Text from frontend: Hello.
        </p>
        <p>
          Response from api backend: {data}
        </p>
      </header>
    </div>
  );
}

export default App;
