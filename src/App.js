import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpences } from './components/IncomeExpences';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './components/context/Globalcontext';


function App() {
  return (
    <GlobalProvider>
    <div className="App">
<h1 className='title'>Expenses tracker
</h1>
      <div className='container'><Balance/>
<IncomeExpences/>
<TransactionHistory/>
<AddTransaction/>
</div>

    </div>
 </GlobalProvider> );
}

export default App;
