import './App.css';
import {useState} from 'react';
import Table from './Table';

function App() {
  const [data,setData] = useState({columns : [], data: []});
  const handleStudentClick = () => {
    fetch('http://localhost:9091/student')
    .then(resp => resp.json())
    .then(resp => setData(resp))
  }
  const handleDeptClick = () => {
    fetch('http://localhost:9091/dept')
    .then(resp => resp.json())
    .then(resp => setData(resp))
  }
  return (
    <div className="App">
      <button onClick={handleStudentClick}>Fetch Student</button>
      <button onClick={handleDeptClick}>Fetch Dept</button>
      <br />
      <Table columns={data.columns} data = {data.data} />
    </div>
  );
}

export default App;
