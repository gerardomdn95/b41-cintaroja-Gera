// Es el componente que me va a mostrar la tarea
import React from 'react';
import axios from 'axios';

const Task = (props) => {

  const ENDPOINT = '';

  const deleteTask = (id) => {
    axios.delete(`${ENDPOINT}${id}.json`)
      .then(() => props.getTasks())
      .catch((error) => alert('Ocurrió un error al eliminar la tarea' + error))
  }

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>Prioridad: {props.priority}</p>
      <small>Time: {props.time}</small>
      <p>{props.done}</p>
      <div className="row">
        <div className="col-3">
          <button type="button" className="btn btn-danger" onClick={() => deleteTask(props.id)}>Eliminar</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  )
}

export default Task;
