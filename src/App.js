// import React from 'react';
// // import Component from './Component'; // Ensure the filename and import name are consistent

// const App = () => {
//   return (
//     <div className="App">
  
//       {/* <Component /> */}
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='text-2xl font-semibold'>01: Stopwatch</div>
      <div className='text-2xl font-mono py-4'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className='w-1/2 max-w-sm flex flex-row justify-between'>
        {running ? (
          <button
            className='border rounded-lg py-1 px-3'
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
        ) : (
          <button
            className='border rounded-lg py-1 px-3'
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        )}
        <button
          className='border rounded-lg py-1 px-3'
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

