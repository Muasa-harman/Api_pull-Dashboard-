import "./Datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
import useFetch from "../Hooks/useFetch";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
// import { Link } from "react-router-dom";

const Datatable = () => {
  const { data,loading,error } = useFetch(
    'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');

    console.log(data)

  if(loading) return <h3>LOADING...</h3>;

  if(error) return <h3>Error: something went wrong</h3>;

  return (
    <div >
      <h3>users</h3>
      {/* {data.length} */}
      {/* <pre>{JSON.stringify(data,undefined,2)}</pre> */}
      <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>ORGANIzATION <FilterListOutlinedIcon className="icon"/></TableCell>
          <TableCell className='tableCell'>USERNAME <FilterListOutlinedIcon className="icon"/></TableCell>
          <TableCell className='tableCell'>EMAIL <FilterListOutlinedIcon className="icon"/></TableCell>
          <TableCell className='tableCell'>PHONE NUMBER <FilterListOutlinedIcon className="icon"/></TableCell>
          <TableCell className='tableCell'>DATE JOINED <FilterListOutlinedIcon className="icon"/></TableCell>
          <TableCell className='tableCell'>STATUS <FilterListOutlinedIcon className="icon"/></TableCell>
          <TableCell className='tableCell'>Icon <FilterListOutlinedIcon className="icon"/></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({orgName,userName,email,phoneNumber,createdAt,accountNumber}) => (
          <TableRow
            key={data.id}
          >
            
            <TableCell className='tableCell' >{orgName}</TableCell>
            <TableCell className='tableCell' >{userName}</TableCell>
            <TableCell className='tableCell' >{email}</TableCell>
            <TableCell className='tableCell' >{phoneNumber}</TableCell>
            <TableCell className='tableCell' >{createdAt}</TableCell>
            <TableCell className='tableCell' ><span className={`status ${data.status}`}>{accountNumber}</span></TableCell>
            <TableCell className='tableCell'><MoreVertRoundedIcon/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

    </div>
  )

};

export default Datatable;