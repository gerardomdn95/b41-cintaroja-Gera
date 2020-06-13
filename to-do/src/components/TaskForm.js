import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TaskForm = () => {

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');
  const ENDPOINT = 'https://AQUIVAELTUYO.firebaseio.com/task.json';
  // Esto nos permitirá navegar sin refrescar el navegador
  const history = useHistory();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleTime = (e) => {
    setTime(e.target.value);
  }

  const handlePriority = (e) => {
    setPriority(e.target.value);
  }

  const createTask = () => {
    const body = {
      title: title,
      done: false,
      time: time,
      priority: priority
    }

    if (priority <= 3 && time > 0 && title !== '') {
      axios.post(ENDPOINT, body)
        .then(() => history.push('/'))
        .catch((error) => alert('Ocurrió un error ' + error))
    } else {
      alert('Valores incorrectos')
    }
  }

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="title">Nombre de la tarea</label>
        <input onChange={handleTitle} type="text" className="form-control" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="time">¿Cuánto tiempo me voy a tardar?</label>
        <input onChange={handleTime} type="number" className="form-control" id="time" min="0" />
      </div>
      <div className="form-group">
        <label htmlFor="priority">¿Cuál es la prioridad?</label>
        <input onChange={handlePriority} type="number" className="form-control" id="priority" max="3" min="0" />
      </div>
      <button className="btn btn-primary" onClick={() => createTask()}>Submit</button>
    </div>
  )
}
export default TaskForm;
