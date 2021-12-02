import React from 'react';
import FavoriteContext from '../contexts/favoriteContext';

const {useContext} = React; 

const NavBar = () => {
    const {favoritePokemons} = useContext(FavoriteContext);

    console.log(favoritePokemons);

    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
    return (
    
    <nav>
        <div>
            <div>
                <img src={imgUrl} alt="pokeapi-img"className="navbar-image"/>
            </div>
                <div>&#10084;&#65039;{favoritePokemons.length}</div>
        </div>
    </nav>
    );
};

export default NavBar;