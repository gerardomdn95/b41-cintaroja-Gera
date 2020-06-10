// ES6 => const request = require("request");
// ES7 => import React from "react";
// Hagamos un build de prod => import => require

// Es un componente
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
// HTTP Requests => promesa
import axios from 'axios';
import './App.css';

// Los componentes siempre inician con mayúscula
const App = () => {

  const [text, setText] = useState();
  const [gifs, setGifs] = useState([]);
  const ENDPOINT = 'https://api.giphy.com/v1/gifs/search?';
  const API_KEY = 'QxBNS0C0lQ5XFk2axuZK2Am4d8FHzX4t';

  const handleChange = (event) => {
    setText(event.target.value);
  }

  // Ciclo de vida de un componente
  // Si el arreglo está vacío esto se va a ejecutar cuando el componente se monte
  useEffect(() => {
    console.log('Mi componente se montó');
  }, []);

  useEffect(() => {
    console.log('El valor de text cambió');
    axios.get(`${ENDPOINT}api_key=${API_KEY}&q=${text}&limit=5`)
      .then((info) => setGifs(info.data.data))
      .catch(() => alert("Ocuriió un error"))
  }, [text]);

  // JSX
  return (
    <section>
      <h1 className="text-center">GIFS</h1>
      <div className="container">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">Busca un GIF</span>
          </div>
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="row">
          {gifs.map((gif) => <Card key={gif.id} img={gif.images.downsized_large.url} title={gif.title} url={gif.url} />)}
        </div>
      </div>
    </section>
  );
}

export default App;
