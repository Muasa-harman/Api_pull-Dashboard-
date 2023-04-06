import React from 'react'
import './Widget.scss'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
// import useFetch from "../Hooks/useFetch";

const Widget = ({type}) => {
  // const { data} = useFetch(
  //   'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');

  let data;
const users = 100
  // temporary
 
  
  switch(type){
    case "user":
        data={title:"USERS",
         icon:<PeopleOutlinedIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(128,0,128,0.2)",}}/>,
    };
    break;
    case "active users":
        data={title:"ACTIVE USERS",
         icon:<GroupsOutlinedIcon className='icon' style={{backgroundColor:"rgba(218,165,32,0.2)",color
        :"purple"}}/>
    };
    break;
    case "users with loans":
        data={title:"USERS WITH LOANS",
     icon:<DescriptionOutlinedIcon className='icon' style={{backgroundColor:"rgba(128,0,128,0.2)",color
    :"orange"}}/>
    };
    break;
    case "users with savings":
        data={title:"USERS WITH SAVINGS",
     icon:<SavingsOutlinedIcon className='icon' style={{backgroundColor:"rgba(128,0,128,0.2)",color
    :"indigo",}}/>
    };
    break;
    default:
      break;  
}
  return (
    <div className='widget'>
      <div className='left'>
        <span className='icon'>{data.icon}</span>
        <span className='title'>{data.title}</span>
        <span className='counter'>{users}</span>
        <span className='link'>{data.link}</span>
      </div>
    </div>
  )
}

export default Widget