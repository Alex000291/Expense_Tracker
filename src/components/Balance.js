import React, { useContext} from 'react'
import Transaction from './Transaction'

import { GlobalContext } from '../context/GlobalState'


const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
       <h4>Your Balance</h4>
       <h1>${total}.00</h1>
    </>
  )
}

export default Balance
