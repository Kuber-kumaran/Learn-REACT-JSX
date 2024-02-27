import {useState} from 'react'

function UserDetails() {

  const [user, setUser] = useState({fname: 'Ram', lname:"kumar", age:21 });

  function changeHandler (e) {
setUser({...user, [e.target.name]: e.target.value});
  }



  return (
    <>
    <h2>
      {user.fname} {user.lname},  {user.age}
    </  h2>
     <form>
      <input type="text" placeholder='Enter fName' onChange={changeHandler} value={user.fname} name='fname'/>
      <input type="text" placeholder='Enter lName' onChange={changeHandler} value={user.lname} name='lname'/>
      <input type="text" placeholder='Enter age' onChange={changeHandler} value={user.age} name='age' />
     </form>
    </>
  )
}

export default UserDetails
