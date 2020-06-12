// Dentro de TaskContainer.js vamos a llamar a nuestras Task.js
import React, { useEffect, useState } from 'react';
import Task from '../components/Task';
import Navbar from '../components/Navbar';
import axios from 'axios';

const TaskContainer = () => {

  // Aquí declaramos estados     valor inicial
  const [tasks, setTasks] = useState({});
  const ENDPOINT = 'https://to-do-devf.firebaseio.com/task.json';

  // Crear métodos dentro de mi componente
  const getTasks = () => {
    axios.get(ENDPOINT)
      .then((body) => setTasks(body.data))
      .catch((error) => alert(error));
  }

  // Esto se va a ejecutar cuando se monte el componente
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="bg-light">
      <Navbar />
      <div className="container">
        <h1>Mis tareas</h1>
        {Object.keys(tasks).map((id) =>
          <Task
            key={tasks[id].title}
            id={id}
            title={tasks[id].title}
            done={tasks[id].done}
            priority={tasks[id].priority}
            time={tasks[id].time}
            getTasks={getTasks} />)}
      </div>
    </div>
  )
}

export default TaskContainer
