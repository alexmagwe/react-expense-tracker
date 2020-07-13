import { GlobalContext } from './context/Globalcontext';
import React,{useContext} from 'react'
export const IncomeExpences = () => {
    const {transactions} = useContext(GlobalContext);
    
    const amounts= transactions.map(item=>item.price)
    const income=amounts.filter(item=>item>0).reduce((acc,item)=>acc+item,0)
    const expenses=amounts.filter(item=>item<0).reduce((acc,item)=>acc+item,0)
    return (

        <div className="income-expenses-container">
           <div className='income-container'> <h5>Income</h5><h4>{income}</h4></div> 
           <div className='expenses-container'><h5>Expenses</h5><h4>{Math.abs(expenses)}</h4></div> 
        </div>
    )
}
