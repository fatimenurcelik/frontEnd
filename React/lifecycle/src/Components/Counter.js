import {useState} from 'react'

function Counter() {

  const [count ,setCount] = useState(0)
  const arttır = () => {
    setCount(count + 1 );
  };

  return (
    <div className='container'>
        <h1>{count}</h1>

        <button onClick={arttır}>Arttır</button>
        <span> </span>
        <button onClick={() => setCount(count - 1)}>Azalt</button>
        <br></br> <br></br>
        <button onClick={() => setCount(0)}>Reset</button>

    </div>
  )
}

export default Counter