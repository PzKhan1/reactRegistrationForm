import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import users from '../UsersData';

import './../Style/navBar.css';
const Navb = function(props) {
  console.log(props);
  const {setUsers , usersState} = props ; 
   const [inpVal , setInp] = useState('');

  console.log(props);
    function handleNav() {
        props.logout();
    }


    function handleChange(e) {
      
      
      const updatedSearchVal = e.target.value;
      setInp(updatedSearchVal);
      const lowerInp = updatedSearchVal.toLowerCase();
      const newUsers = users.filter((item) => {
        const fullName = item.firstName + '' + item.lastName;
        const lowerFullName = fullName.toLowerCase();
        if(lowerFullName.includes(lowerInp)){
          
          return true;
        
        }else{
          return false;
        }

      })
      setUsers(newUsers);
      
    }

    return (
        <div>
             <Navbar className='navbar' bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <input className='inputBox' onChange={handleChange} placeholder='   Search by name' value={inpVal}></input>
        <h3 className='number'> Total users : {props.count}</h3>
        <button className='navButton' onClick={handleNav}>LogOut</button>
      </Navbar>
      
        </div>
    )
}



export default Navb ;
