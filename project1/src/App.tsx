import  { useState } from 'react';
// @ts-expect-error Student.jsx does not have a TypeScript declaration file.
import Student from './Student.jsx';

function App() {
    const [details, setDetails] = useState(false);

    function displayDetails() {
        if (details) {
            return (
                <div>
                    <p> course:bca</p>
                    <p> year:2023</p>
                </div>
            );
        }
        return null;
    }

  return (
    <div className="App">
        <h1>Student Details</h1>
        <img src="https://media.istockphoto.com/id/2105100634/photo/happy-university-students-e-learning-while-using-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=aM5zY2HI6Nu5xBFxtT0RgrVSBqmfj6MUlt6cVMCI-N8=" alt="Student" />   
        <Student name="Divya" age={20} email="divyabhatt3087@gmail.com" />
        <button onClick={()=>setDetails(!details)}>Toggle Details</button>
        {displayDetails()}
    </div>
  )
}   

export default App

