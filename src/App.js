import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';  
import './styles/App.css';

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10; // Cambia esto si deseas más o menos personajes por página

    const fetchCharacters = async (page) => {
        try {
            const response = await axios.get(`https://dragonball-api.com/api/characters?page=${page}&limit=${itemsPerPage}`);
            setCharacters(response.data.items); // Obtiene los personajes
            setTotalPages(response.data.meta.totalPages); // Establece el total de páginas
        } catch (error) {
            setError("Error al cargar los personajes.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage]);

    if (loading) return <p>Cargando personajes...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="app">
            <h1>Personajes de Dragon Ball</h1>
            <CharacterList characters={characters} />
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
            />
        </div>
    );
};

export default App;
