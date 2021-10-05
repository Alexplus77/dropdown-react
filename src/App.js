import React from "react";
import Dropdown from "./dropdown";
import './main.css';

function App() {
const listDropDown=['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']
  const onClick=()=>{

  }
  return (
   <Dropdown onClick={onClick} listDropDown={listDropDown} />
  );
}

export default App;
