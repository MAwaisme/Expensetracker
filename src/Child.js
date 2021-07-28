import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContent";

function Child() {
  let {transactions} = useContext(TransactionContext);
  console.log(transactions);
  let [ newDecs, setDecs ] = useState("");
  let [ newAmount, setAmount ] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();
    // addTransaction({
    //     amount: newAmount,
    //     desc: newDecs
    // })
  }

  return (
    <div className="container">
      <h1 className="container-heading">Expense Tracker</h1>
      <h3>
        Your Balance <br /> $260.00
      </h3>
      <div className="expence-container">
        <h3>
          INCOME <br /> $500
        </h3>
        <h3>
          EXPENSE <br /> $500
        </h3>
      </div>

      <h3>History</h3>
      <hr />

      <ul className="transations-list">
        {transactions.map((transObj, ind) => {
          return (
            <li key={ind}>        
              <span>{transObj.dese}</span>
              <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>

      <h3>Add New transations</h3>
      <hr />

      <form className="transations-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input type="text" onChange={(ev) => setDecs(ev.target.value)} required />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input type="number" onChange={(ev) => setAmount(ev.target.value)} required />
        </label>
        <br />
        <input type="submit" value="Add transations" />
      </form>
    </div>
  );
}

export default Child;
