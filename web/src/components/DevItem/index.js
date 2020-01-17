import React from 'react';

import './styles.css';

function DevItem({ dev, destroyDev }){

    async function deleteDev(){
        await destroyDev(dev.github_username);
    }
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
                <button id="deleteButton" onClick={deleteDev}>X</button>
            </header>
            <p>{dev.bio}</p>
            <div className="dev-link">
                <a href={`https://github.com/${dev.github_username}`} >Acessar perfil no Github</a>
            </div>
        </li>
    );
};

export default DevItem