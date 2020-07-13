import React from 'react'
import { GlobalContext } from './context/Globalcontext'
import {useContext} from 'react'
export const Balance= () => {
    const {transactions}=useContext(GlobalContext)
    // const [balance, setbalance] = useState(0)
    const amounts=transactions.map(transaction=>transaction.price)
    const balance=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    // setbalance(bal)


    return (
        <div className='balance'>
            <h4>Your Balance</h4>
            <h4 className='balance-amount'>{balance} Ksh</h4>
        </div>
    )
}
