import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  async function loadDevs(){
    const response = await api.get('/devs');
    if(response){
      setDevs(response.data);
    }
  }
  useEffect(() => {
    loadDevs();
  }, []);
 
  async function saveDev(data) {
    const response = await api.post('/devs', data);
    if(response){
      // setDevs([...devs, response.data]);
      loadDevs();
    }
  }

  async function destroyDev(dev){
    await api.delete(`/del/${dev}`);
    loadDevs();
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm saveDev={saveDev}></DevForm>
      </aside>

      <main>
        
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} destroyDev={destroyDev}></DevItem>
          ))}
        </ul>

      </main>
    </div>
  );
}

export default App;
