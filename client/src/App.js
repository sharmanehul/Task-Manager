import './App.css';
import Header from './component/Header';
import TaskForm from './component/TaskForm';
import Tasks from './component/Tasks';

function App() {
  return (
    <div>
      <Header />
      <TaskForm/>
      <Tasks />
    </div>
  );
}

export default App;
