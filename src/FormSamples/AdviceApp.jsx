import React, { useEffect, useState } from 'react'

export const AdviceApp = () => {

    const [advice, setAdvice] = useState("Click the button to get Advice");
    const [count, setCount] = useState(0);


  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");

    const data = await res.json();
     console.log(data);
    setAdvice(data.slip.advice);
    setCount((c)=> c + 1);
    
   }

   useEffect(function () {
    getAdvice();

   }, []);

  return (
    <div className='bg-lime-300 w-screen h-screen flex flex-col justify-center items-center'>
        <h6 className='font-bold mb-2'>{advice}</h6>
        <button className='border px-4 py-2 mb-2 rounded-full bg-pink-500 text-violet-800 font-semibold' onClick={getAdvice}>Get Advice</button>
        <Counter count={count}/>
    </div>
  )
};

function Counter(props) {
  return(
    <p>
    I got <b className='text-orange-900 bg-orange-500 text-center rounded-3xl p-1 inline-block ' style={{ width: '25px', height: '40px', borderRadius: '60% / 60%' }}>{props.count}</b> pieces of advice  
 </p>
  );
};





