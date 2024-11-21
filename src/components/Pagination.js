import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <button 
                onClick={() => onPageChange(1)} 
                disabled={currentPage === 1}
            >
                Primera
            </button>
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                Anterior
            </button>
            <span>Página {currentPage} de {totalPages}</span>
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
            >
                Siguiente
            </button>
            <button 
                onClick={() => onPageChange(totalPages)} 
                disabled={currentPage === totalPages}
            >
                Última
            </button>
        </div>
    );
};

export default Pagination;
