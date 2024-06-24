import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter';


const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
	
	<div className='container'>
		<div className='position-absolute top-50 start-50 translate-middle'>
		<SecondsCounter seconds={seconds} />
		</div>
      
	  </div>
    </div>
  );
};

export default Home;