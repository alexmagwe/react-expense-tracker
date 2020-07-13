import React,{useState,useContext} from 'react'
import { GlobalContext } from './context/Globalcontext'

export const AddTransaction = () => {
    const [item, setItem] = useState('')
    const [price, setPrice] = useState('')
    const {addNewTransaction}=useContext(GlobalContext)
    const onSubmit=(e)=>{
        e.preventDefault();
        let newtransaction={id:Math.floor(Math.random()*100000000000),description:item,price:+price}
        addNewTransaction(newtransaction)
	 setItem('')
	 setPrice('')

    }
    return (
        <div className='new-item-form' >
            <form onSubmit={onSubmit}>
    <h2>Add new transaction</h2> 
    <label htmlFor='item'>Description</label>
    <input id='item' type='text' value={item} onChange={e=>setItem(e.target.value)} />       
    <label htmlFor='price'>Amount</label>
    <input id='price' type='text' value={price} onChange={e=>setPrice(e.target.value)}/>
    <button className='add-button' type='submit'>Add transaction</button>
       </form> </div>
    )
}
