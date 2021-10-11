import React, {useState} from "react";
import DropDown from "./Components/dropdown";
import './main.css';

function App() {
    const dropdownList=['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']
const [isOpen, setOpen]=useState('false')
const [activeLi, setActive]=useState('')

  const openDropDown=()=>{
setOpen(!isOpen)
  }
  const activeList =(e, id)=>{
    e.preventDefault()
     const activeItem= dropdownList.map((elem, i)=>id===i)
    setActive(activeItem)
  }

  return (
     <DropDown dropdownList={dropdownList} activeItem={activeLi} activeList={activeList} openDropDown={openDropDown}  isOpen={isOpen}/>

  );
}

export default App;
