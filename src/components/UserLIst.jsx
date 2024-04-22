
// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import './Header.css'
// const Userlist = () => {
//     const [users, setUsers] = useState([
//         { name: "Vijay", dept: "cy", id: 100 },
//         { name: "Suriya", dept: "it", id: 200 },
//         { name: "Ajith", dept: "ee", id: 10 },
//         { name: "Vijay", dept: "cy", id: 50 },
//         { name: "Suriya", dept: "it", id: 20 },
//         { name: "Ajith", dept: "ee", id: 30 },
//     ]);

//     const [editingUser, setEditingUser] = useState(null);
//     const [name, setName] = useState("");
//     const [dept, setDept] = useState("");
//     const [id, setId] = useState("");

//     const deleteUser = (id) => {
//         let newUsers = users.filter((ele) => ele.id !== id);
//         setUsers(newUsers);
//     };

//     const editUser = (user) => {
//         setEditingUser(user);
//         setName(user.name);
//         setDept(user.dept);
//         setId(user.id);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const updatedUsers = users.map((user) =>
//             user.id === id ? { id, name, dept } : user
//         );
//         setUsers(updatedUsers);
//         setName("");
//         setDept("");
//         setId("");
//         setEditingUser(null);
//     };

//     return (
//         <>
//             <h1>Userlist</h1>
//             <table className='table' border={1}>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Dept</th>
//                         <th>Id</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, key) => (
//                         <tr key={key}>
//                             <td>{user.name}</td>
//                             <td>{user.dept}</td>
//                             <td>{user.id}</td>
//                             <td>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                                 <button onClick={() => editUser(user)}>Edit</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <h1>{editingUser ? 'Edit User' : 'Add User'}</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' /><br />
//                 <input type="text" value={dept} onChange={(e) => setDept(e.target.value)} placeholder='Dept' /><br />
//                 <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder='Id' /><br />
//                 <button type='submit'>{editingUser ? 'Update User' : 'Add User'}</button>
//             </form>
//         </>
//     );
// };

// export default Userlist;









import React, { useState } from 'react';
import './Header.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      description,
      amount: parseFloat(amount)
    };
    setTransactions([...transactions, transaction]);
    setDescription('');
    setAmount(0);
  };

  const totalIncome = transactions.reduce((acc, curr) => {
    return curr.amount > 0 ? acc + curr.amount : acc;
  }, 0);

  const totalExpense = transactions.reduce((acc, curr) => {
    return curr.amount < 0 ? acc + curr.amount : acc;
  }, 0);

  const currentBalance = totalIncome + totalExpense;

  return (
    <div className="App">
      <h1>Income Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="summary">
        <h3>Total Income: {totalIncome}</h3>
        <h3>Total Expense: {totalExpense}</h3>
        <h1 id='cb'>Current Balance: {currentBalance}</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className={transaction.amount >= 0 ? 'income' : 'expense'}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
