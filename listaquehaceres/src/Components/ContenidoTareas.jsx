import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const ContenidoData = (props) => {
    const [agregar, setAgregar] = useState('');

    const handleAgregar = (e) => { 
        setAgregar(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTarea = { //creo obj que va representar la tarea nueva
            id: uuidv4(),
            texto: agregar,
            TareaHecha: false
        }
        props.onSubmit(newTarea);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='inputContenedor' onChange={handleAgregar}  placeholder='Ingrese una nueva tarea'  />
            <button className='btn-Save'>Add</button>
        </form>
    )
}
export default ContenidoData