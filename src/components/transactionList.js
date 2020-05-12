import React, { useContext } from 'react';
import { GlobalContext } from  '../contexts/globalState';
import { Transaction } from './transaction';

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        { transactions.map((transaction) => (
          <Transaction id={transaction.id} transaction={transaction} />
        )) }
      </ul>
    </>
  )
}
