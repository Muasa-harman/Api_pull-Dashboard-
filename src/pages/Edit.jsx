import React, { useState } from 'react'
import "./Edit.scss";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Datatable from '../components/Datatable';

const Edit = () => {

  return (
  <div className="edit">
  <Sidebar />
  <div className="newContainer">
    <Navbar />
    <div className='dropdown'>
    <Datatable/>
                 <button className='dropbtn'><ExpandMoreIcon className='icon'/></button>
                 <div class="dropdown-content">
                  <a href="/profile">Edit Name</a>
                   <a href="/auth">Change password</a>
                   <a href="/delete">Delete account</a>
                    <a href="/logout">Logout</a>
                   </div>
                 </div>
    
    
      {/* <div className="right"> */}
        {/* {/* <form>
          <div className="formInput">
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" /> 
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>

          {inputs.map((input) => (
            <div className="formInput" key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder} />
            </div>
          ))}
          <button>Send</button>
        </form> */}
      {/* </div> */}
    </div>
  </div>
);
};


export default Edit