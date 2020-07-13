import React,{useContext} from 'react'
import {GlobalContext} from './context/Globalcontext';
import { Transaction } from './Transaction';
export const TransactionHistory = () => {
    const {transactions}=useContext(GlobalContext)

    return (
        <div className='history-container'>
            <h2>History</h2>
            <ul className='transaction-list'>
            {transactions.map(
                transaction=><Transaction key={transaction.id} transaction={transaction}/>
            )}
            </ul>
            
        </div>
    )
}
