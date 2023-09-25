import {useState} from 'react';
import './index.css';

 function App (){
  const [count, setCount] =  useState(0);

    function handleAddition(){
        setCount(count + 1 );
        
    }

    function handleSubtraction(){
        setCount(count - 1); 
    }
    function handleReset() {
        setCount(0);

     }
        
   return (
    
    <div className="App">
       <div className="box">
            <p>{count}</p>
            <button onClick = { handleAddition } className='add'>ADD</button>
            <button onClick = {handleSubtraction} className='sub'>SUB</button>
            <button onClick={handleReset} className = 'reset'>RESET</button>
       </div>
    </div>

  );
}

export default App;



