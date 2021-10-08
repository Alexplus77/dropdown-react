import React, {useState} from "react";
import DropDown from "./dropdown";
import './main.css';

function App() {
const [isOpen, setOpen]=useState('false')
const [dropdownList, setActive]=useState([ {title:'Profile Information', active: 'false'},
    {title:'Change Password', active: 'false'},
    {title:'Become PRO', active: 'false'},
    {title:'Help', active: 'false'},
    {title:'Log Out', active: 'false'}])

  const openDropDown=()=>{
setOpen(!isOpen)
  }
  const activeList =(id)=>{
     const activeList= dropdownList.map((elem, i)=>{
         id===i ? elem.active='true' : elem.active = 'false'
         return elem
     })
      setActive(activeList)
  }

  return (
     <DropDown dropdownList={dropdownList} activeList={activeList} openDropDown={openDropDown}  isOpen={isOpen}/>

  );
}

export default App;
