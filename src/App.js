import React, {useState} from "react";
import DropDown from "./dropdown";
import './main.css';

function App() {
    const listDropDown=[
        'Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']
const [isOpen, setOpen]=useState('false')
const [isActive, setActive]=useState(listDropDown)
  const openDropDown=()=>{
setOpen(!isOpen)
  }
  const activeList =(e)=>{
        const activeMenu= listDropDown.map(menu=>menu===e.target.text)

     setActive(activeMenu)

  }

  return (
     <DropDown isActive={isActive} activeList={activeList} openDropDown={openDropDown} listDropDown={listDropDown} isOpen={isOpen}/>

  );
}

export default App;
