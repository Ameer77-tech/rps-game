"use client"
import React, { useState } from 'react'
import Header from './Components/Header'
import Icons from './Components/Icons';




const page = () => {
  const  icon1="/paper.svg"
  const  icon2="/rock.svg"
   const icon3="/scissors.svg"
   const [user, setuser] = useState("")
   const [comp, setcomp] = useState("")
   const [result, setresult] = useState("")
   const [wins, setwins] = useState(0)
   const [loses, setloses] = useState(0)
  

   const choice=(i)=>{
    console.log(i.toUpperCase())
    setuser(i.toUpperCase())
  }
  function compare() {

    if(user===""){
      setresult("CHOOSE FIRST")
      setTimeout(()=>{
        setresult("")
      },1000)
    }
    else{
   
    let c = Math.floor(Math.random() * 10);
    let computerChoice = "";
  
    if (c <= 3) {
      computerChoice = "PAPER";
    } else if (c <= 7 && c > 3) {
      computerChoice = "ROCK";
    } else {
      computerChoice = "SCISSORS";
    }
    setcomp(computerChoice);
  
    
      if (user === computerChoice) {
        setresult("TIE!!");
    
      } else if (
        (user === "PAPER" && computerChoice === "ROCK") ||
        (user === "ROCK" && computerChoice === "SCISSORS") ||
        (user === "SCISSORS" && computerChoice === "PAPER")
      ) {
        setresult("YOU WIN!");
        setwins(wins+1)
      
      } else {
        setresult("YOU LOSE!");
        setloses(loses+1)
        
      }
 

   
  }
}
   
   
  return (
    <>
      <Header/>
      <div className='h-full bg-black items-center flex justify-center'>
      <div className='flex flex-col gap-2 p-5 w-full sm:w-2/4 mt-10'>
        <div className="flex justify-between w-full">
  <Icons icon={icon1} name="paper" onClick={() => choice("paper")} className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25" />
  <Icons icon={icon2} name="rock" onClick={() => choice("rock")} className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25" />
  <Icons icon={icon3} name="scissors" onClick={() => choice("scissors")} className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25" />
</div>

       <div className='pl-2 mt-10 flex flex-col gap-5'>
         <h1 className=''>You Chose : {user}</h1>
         <div className='flex justify-center items-center'>
         <button 
         onClick={()=>{compare()}}
         className='text-sm border-1 rounded w-20 cursor-pointer px-2 font-medium hover:bg-white hover:text-black transition-all ease-linear'>Confirm</button>
         </div>
         <h1>Computer Chose: {comp}</h1>
         <h1 className='text-center font-medium'> {result}</h1>
          <div>
            <h1 className='text-gray-600 font-medium tracking-wider'>Wins: {wins}</h1>
            <h1 className='text-gray-600 font-medium tracking-wider'>Loses: {loses}</h1>
            </div>
         </div>
         

         </div>
      </div>
    </>
  )
}

export default page