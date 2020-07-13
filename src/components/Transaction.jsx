import React,{useContext} from 'react'
import { GlobalContext } from './context/Globalcontext'


export const Transaction = (props) => {
const{deleteTransaction}=useContext(GlobalContext)
    let transaction=props.transaction
    let sign=transaction.price<0?"-":"+"

       const styles={
        positive:{
            color:'green'
        },
    negative:{
            color:'crimson'
        }}
    return (
        <>
          <li  className='transaction-item'> <button onClick={()=>deleteTransaction(transaction.id)} className='delete-btn'>&times;</button> {transaction.description}<span  style={sign==='+'?styles.positive:styles.negative} className='item-price' >{sign+Math.abs(transaction.price)} Ksh</span></li>
        </>
    )
}
