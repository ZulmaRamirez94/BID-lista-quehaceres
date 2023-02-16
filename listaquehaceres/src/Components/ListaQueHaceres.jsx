import React, { useState } from 'react'
import ContenidoTareas from './ContenidoTareas'
import Tarea from './Tarea';

const ListaQueHaceres = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => { 
        setTareas([...tareas, tarea]);
    }

    const DeleteTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id)); 
    }

    const TareaCulminada = (id) => {
        setTareas(
            tareas.map(tarea => {
                if (tarea.id === id) tarea.TareaHecha = !tarea.TareaHecha;
                return tarea;
            })
        );
    }
    return (
        <>
            <ContenidoTareas onSubmit={agregarTarea} />
            <div>
                {
                    tareas.map((tarea) =>
                        <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} TareaHecha={tarea.TareaHecha} TareaCulminada={TareaCulminada} DeleteTarea={DeleteTarea} />
                    )
                }
            </div>
        </>
    )
}

export default ListaQueHaceres