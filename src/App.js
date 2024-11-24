 import React, { useState } from 'react'

 function App() {
     const [firstNumber,setFirstNumber] = useState('0')
     const [secondNum,setSecondNum] = useState('')
     const [operator,setOperator] = useState('')

     const enterNum = (number) =>{
         if(operator!='') {
             setSecondNum(Number(secondNum.toString()+number))
         }else {
             setFirstNumber(Number(firstNumber.toString()+number))
         }
     }

     const chosseOperator = (oper) => {
         setOperator(oper)
     }


     const resultBtn = () => {
         if(operator === '+') {
             setFirstNumber(firstNumber+secondNum)
         }else if (operator === '-'){
             setFirstNumber(firstNumber-secondNum)
         }else if (operator ==='x') {
             setFirstNumber(firstNumber*secondNum)
         }else if (operator ==='/') {
             setFirstNumber (firstNumber/secondNum)
         }
         setSecondNum('')
         setOperator('')   
     }

     const faiz = () => {
         setFirstNumber(firstNumber/100)
     }

     const clearBoard = () => {
         setFirstNumber('0')
         setSecondNum('')
        setOperator('')
     }


   return (
     <div>
         <section>
         <h1>
            {firstNumber}{operator}{secondNum}
         </h1>
     </section>
     <section>
         <div className="calc_column">
             <div className="calc_row">
                 <button onClick={() => clearBoard()}>
                     C
                 </button>
                 <button>
                     +/-
                 </button>
                 <button onClick={() => faiz()}>
                     %
                 </button>
                 <button onClick={()=> chosseOperator('/')}>
                     &divide;
                 </button>
             </div>
             <div className="calc_row">
                 <button onClick={()=> enterNum(7)}>
                     7
                 </button>
                 <button onClick={()=> enterNum(8)}>
                     8
                 </button>
                 <button onClick={()=> enterNum(9)}>
                     9
                 </button>
                 <button onClick={()=> chosseOperator('x')}>
                     X
                 </button>
             </div>
             <div className="calc_row">
                 <button onClick={()=> enterNum(4)}>
                     4
                 </button>
                 <button onClick={()=> enterNum(5)}>
                     5
                 </button>
                 <button onClick={()=> enterNum(6)}>
                     6
                 </button>
                 <button onClick={()=> chosseOperator('-')}>
                     -
                 </button>
             </div>
             <div className="calc_row">
                 <button onClick={()=> enterNum(1)}>
                     1
                 </button>
                 <button onClick={()=> enterNum(2)}>
                     2
                 </button>
                 <button onClick={()=> enterNum(3)}>
                     3
                 </button>
                 <button onClick={() => chosseOperator('+')}>
                     +
                 </button>
             </div>
             <div className="calc_row ">
                 <button id="zero" onClick={()=> enterNum(0)}>
                     0
                 </button>
                 <button>
                     ,
                 </button>
                 <button onClick={() => resultBtn()}>
                     =
                 </button>
             </div>
         </div>
     </section>
     </div>
   )
 }

 export default App