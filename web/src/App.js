import React, { useState } from "react";
import Table from "./component/table";
import Add from "./component/add";

import tableList from './data/tableList.json';

function App() {
  const [showAdd, setShowAdd] = useState(false);


  const toggleAdd = () => {
    setShowAdd(true);

  };



  const toggleClose = () => {
    setShowAdd(false);
  };

  const [prod, setProd] = useState(tableList);

  const [newProd, setNewProd] = useState({
    name: "",
    birth: "",
    position: "",
    status: "Active"
  });

  const handleChangeAdd = (event) => {
    const { name, value } = event.target;
    setNewProd({
      ...newProd,
      [name]: value
    });
  };

  const handleAdd = () => {
    if (newProd.name === "" || newProd.birth === "" || newProd.position === "") {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if(newProd.name.length >50)
      {
        alert("Tên Không quá 50 ký tự");
      }
    if (newProd.birth.indexOf('/') === -1) {
      alert("Ngay sinh không hợp lệ, phai dung dinh dang dd/mm/yyyy");
      return;
    }
    if (newProd.birth.indexOf('/') !== 2){
      alert("Ngay sinh không hợp lệ, phai dung dinh dang dd/mm/yyyy");
      return;
    } 
    var a = newProd.birth.split('/');
    for (let i = 0; i < a.length; i++){
      for(let j =0; j < a[i].length; j++)
        {
          if (a[i][j] < '0' || a[i][j] > '9')
          {
            alert("Ngay sinh không hợp lệ");
              return;
          }
        }
    }


    const newUser = {
      id: prod.length + 1,
      ...newProd
    };
    const AddUser = [...prod, newUser];
    setProd(AddUser);
    toggleClose();
  };



  const renderListData = () => {
    const filterProd = [...prod]
    return  <Table onAdd={toggleAdd}  prod={filterProd} ></Table>;
  }

  return (
    
    <div className="container-fluid">
      
      <div className="header">
        <h2 className="title">
          Manage Students
        </h2>
        <div className="action">
          <div className="filter">

          </div>
          <div>
          <button className="export">
            <i className="fa-solid fa-file" />

              Import
            </button>
            <button className="export">
            <i className="fa-solid fa-file" />

              export
            </button>
            <button className="add" onClick={toggleAdd}>
              <i className="fa-solid fa-plus-circle"></i>
              Add New
            </button>
          </div>
        </div>
      </div>
      {renderListData()}
      <div className="footer">
        <div className="pagination">

        </div>
      </div>
      {showAdd && <Add onClose={toggleClose} onChange={handleChangeAdd} onAdd={handleAdd} />}
    </div>

  )
}

export default App;