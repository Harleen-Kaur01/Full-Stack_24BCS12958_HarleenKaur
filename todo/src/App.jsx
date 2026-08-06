
import {useState} from 'react';
let id=0;
const INITIAL_TASKS=[
  {id:id++,label:'Walk the dog'},
  {id:id++,label:'Water the plants'},
  {id:id++,label:'Wash the dishes'},
];
export default function App() {
  const [tasks,setTasks]=useState(INITIAL_TASKS);
  const [newTask,setNewTask]=useState('');
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" value={newTask} onChange={(event)=>{setNewTask(event.target.value);}}/>
        <div>
          <button onClick={()=>{
            const label=newTask.trim();
            if(label===''){
              return;
            }
            setTasks((prevTasks)=>
              prevTasks.concat({
                id:id++,
                label,
              }),
            );
            setNewTask('');
          }}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map(({id,label})=>(
          <li key={id}>
          <span>{label}</span>
          <button onClick={()=>{
            setTasks((prevTasks)=>
              prevTasks.filter((task)=>task.id !== id),
            )
          }}>Delete</button>
          </li>
        ))

        }
      </ul>
    </div>
  );
}
