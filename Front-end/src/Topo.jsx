import React, { useState } from "react";
import "./Topo.css";
import { RxPlusCircled } from "react-icons/rx";
import { RxLayers } from "react-icons/rx";
import { RxTrash } from "react-icons/rx";


function Topo() {
 

  return (
    <div className="container">
      <div className="header">
        <img className="logo" src="/Front-end/public/logo.png" alt="Logo" />
     
          <h1 className="title">Prefeitura Alto Santo da Glória</h1>
          <div className="icons">
          <RxPlusCircled size={50}/>
          <RxLayers size={50}/>
          <RxTrash size={50}/>
          </div>
          </div>
          </div>
    
  );
}

export default Topo;
