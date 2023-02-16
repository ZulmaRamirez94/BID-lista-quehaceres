import React from 'react'


const Tarea = ({ id, texto, TareaHecha, TareaCulminada, DeleteTarea }) => {
    return (
        <div className='contenedor '>
            <div className={TareaHecha ? 'tarea-Contenido TareaHecha' : 'tarea-Contenido'}>{texto}</div>
            <input type="checkbox" onClick={() => TareaCulminada(id)} />
            <button className='btnDelete' onClick={() => DeleteTarea(id)}>Eliminar</button>
        </div>
    )
} 
export default Tarea
