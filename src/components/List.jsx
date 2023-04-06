import './List.scss'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const List = () => {

  const rows = [
{
  id:1143155,
  product:"Acer Nitro 5",
  img:"https://images.acer.com/is/image/acer/Nitro-5-AN517-54-Backlit-RGB-01a-light-1",
  customer:"H@rtman muasa",
  date:"14 march",
  amount:780,
  method:"Cash on Delivery",
  status:"Inactive",
  icon:MoreVertOutlinedIcon
},
{
  id:2243154,
  product:"Play station 5",
  img:"https://sellercenter.patazone.co.ke/uploads/product_images/8bf2b4d80eeca52ab43fac5b993aa490.jpg",
  customer:"H@rtman muasa",
  date:"27 may",
  amount:780,
  method:"Online payment",
  status:"Pending",
  icon:MoreVertOutlinedIcon
},
{
  id:2243154,
  product:"Redragon k552",
  img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458719_rd.jpg;maxHeight=640;maxWidth=550",
  customer:"H@rtman muasa",
  date:"1 march",
  amount:780,
  method:"Online",
  status:"Blacklisted",
  icon:MoreVertOutlinedIcon
},
{
  id:2243154,
  product:"Razer blade",
  img:"https://hips.hearstapps.com/hmg-prod/images/4x5-hdm-razer-005-1663599354.jpg",
  customer:"H@rtman muasa",
  date:"1 march",
  amount:780,
  method:"Online",
  status:"Pending",
  icon:"MoreVertOutlinedIcon"
},
{
  id:2243154,
  product:"Redragon k552",
  img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458719_rd.jpg;maxHeight=640;maxWidth=550",
  customer:"H@rtman muasa",
  date:"1 march",
  amount:780,
  method:"Online",
  status:"Active",
  icon:"MoreVertOutlinedIcon"
},
{
  id:2243154,
  product:"Razer blade",
  img:"https://hips.hearstapps.com/hmg-prod/images/4x5-hdm-razer-005-1663599354.jpg",
  customer:"H@rtman muasa",
  date:"1 march",
  amount:780,
  method:"Online",
  status:"Active",
  icon:"MoreVertOutlinedIcon"
},
{
  id:1143155,
  product:"Acer Nitro 5",
  img:"https://images.acer.com/is/image/acer/Nitro-5-AN517-54-Backlit-RGB-01a-light-1",
  customer:"H@rtman muasa",
  date:"14 march",
  amount:780,
  method:"Cash on Delivery",
  status:"Inactive",
  icon:"MoreVertOutlinedIcon"
},
{
  id:2243154,
  product:"Play station 5",
  img:"https://sellercenter.patazone.co.ke/uploads/product_images/8bf2b4d80eeca52ab43fac5b993aa490.jpg",
  customer:"H@rtman muasa",
  date:"27 may",
  amount:780,
  method:"Online payment",
  status:"Pending",
  icon:"MoreVertOutlinedIcon"
},
{
  id:2243154,
  product:"Redragon k552",
  img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458719_rd.jpg;maxHeight=640;maxWidth=550",
  customer:"H@rtman muasa",
  date:"1 march",
  amount:780,
  method:"Online",
  status:"Blacklisted",
  icon:"MoreVertOutlinedIcon"
},
{
  id:2243154,
  product:"Razer blade",
  img:"https://hips.hearstapps.com/hmg-prod/images/4x5-hdm-razer-005-1663599354.jpg",
  customer:"H@rtman muasa",
  date:"1 march",
  amount:780,
  method:"Online",
  status:"Pending",
  icon:"MoreVertOutlinedIcon"
},
{
  id:2243154,
  product:"Redragon k552",
  img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458719_rd.jpg;maxHeight=640;maxWidth=550",
  customer:"H@rtman muasa",
  date:"1 march",
  amount:780,
  method:"Online",
  status:"Active",
  icon:"MoreVertOutlinedIcon"
},
{
  id:2243154,
  product:"Razer blade",
  img:"https://hips.hearstapps.com/hmg-prod/images/4x5-hdm-razer-005-1663599354.jpg",
  customer:"H@rtman muasa",
  date:"1 march",
  amount:780,
  method:"Online",
  status:"Active",
  icon:"MoreVertOutlinedIcon"
},
  ];
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>Tracking ID</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Customer</TableCell>
          <TableCell className='tableCell'>Date</TableCell>
          <TableCell className='tableCell'>Amount</TableCell>
          <TableCell className='tableCell'>Payment Method</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
          <TableCell className='tableCell'>Icon</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell >
              {row.id}
            </TableCell>
            <TableCell className='tableCell'>
              <div className="cellWrapper">
                <img src={row.img} className="image" alt=""/>
                {row.product}
              </div>
            </TableCell>
            <TableCell className='tableCell' >{row.customer}</TableCell>
            <TableCell className='tableCell' >{row.date}</TableCell>
            <TableCell className='tableCell' >{row.amount}</TableCell>
            <TableCell className='tableCell' >{row.method}</TableCell>
            {/* <TableCell className='tableCell' >{row.icon}</TableCell> */}
            <TableCell className='tableCell' ><span className={`status ${row.status}`}>{row.status}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}


export default List