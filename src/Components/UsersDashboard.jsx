import './../Style/dashboard.css';
import users from './../UsersData';
import Dashboard from './Dashboard';
import Navb from './Navbar';
import { useState , useEffect } from 'react';
import Loader from './Loader';

var fetchedUsers = null;

const UsersDashboard = function(props) {

  const [usersState , setusers] = useState([]);
  const [isLoader , setLoader] = useState(true);

  const [isError , setError] = useState(false);


  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((res) => {
        setLoader(false);
        fetchedUsers = res.users;
        setusers(fetchedUsers);
      })
      .catch((err) => {
        setLoader(false)
        setError(true)
      })
  },[]);
  

  function filterUsers(id) {
      console.log('del user',id);

      const newUsers = fetchedUsers.filter((item) => {
        if(item.id === id){
          return false;
        }else{
          return true;
        }
      })

      setusers(newUsers);
              
      
  }
    return (
        <div>
        <Navb logout={props.logout} count={usersState.length}   setUsers={setusers} usersState={usersState}></Navb>
        <div className='boxes'>
       {
        (isLoader)? <Loader></Loader> : usersState.map((item) => {
          return <Dashboard data={item} users={filterUsers}></Dashboard>
        })
       }
       </div> 


        <div>
          {
             (isError) &&
             <h2 className='text'>Unable to fetch data</h2>
          }
        </div>

       
       </div>

    )
}

export default UsersDashboard ;
