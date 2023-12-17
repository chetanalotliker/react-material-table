import { FC, Fragment } from 'react';

const users = [
  {
      id:1,
      fname: "Test",
      lname: "User",
      email: "test-user@gmail.com"
  },
  {
      id:2,
      fname: "Dummy",
      lname: "User",
      email: "dummy-user@gmail.com"
  },
  {
      id:3,
      fname: "Mock",
      lname: "data",
      email: "mock@gmail.com"
  }
];

const User: FC= ()=>{

  const items = [];
  for(const user of users) {
   items.push(<tr key = {user.id}>
    <td>{user.fname}</td>
    <td>{user.lname}</td>
    <td>{user.email}</td>
   </tr>)
  }
  return (
    <Fragment>
    <h1>User Details</h1>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
    </Fragment>
  )
}
export default User
