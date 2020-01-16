import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_usernamme, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        const { latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usúario do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              values={github_usernamme}
              onChange={e => setGithub_username(e.target.value)}
            />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              values={techs}
              onChange={e => setTechs(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number"
                name="longitude"
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)} 
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49292747?s=460&v=4" alt="Avatar"/>
              <div className="user-info">
                <strong>Username</strong>
                <span>Tecnologias</span>
              </div>
            </header>
            <p>BiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografiaBiografia</p>
            <a href="https://github.com">Acessar perfil no Github</a>  
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49292747?s=460&v=4" alt="Avatar" />
              <div className="user-info">
                <strong>Username</strong>
                <span>Tecnologias</span>
              </div>
            </header>
            <p>BiografiaBiografiaBiografiaBiografiaBiografia</p>
            <a href="https://github.com">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
