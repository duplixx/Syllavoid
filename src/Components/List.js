import React  from 'react'
import {useNavigate,BrowserRouter as Router,Link,useLocation,useQuery} from 'react-router-dom';

import data from '../data/collegeslist'


export default function List(props) {
    const navigate = useNavigate();  
    const { search } = useLocation(); 
    let query = useQuery();
    const filteredData = data.filter((el) => {
        
        
        //if no input the return the original
        if (props.input === '') {
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input);
        }
    })
  return (
    <div>
         <ul>
            {filteredData.map((item) => (
                <li key={item.id}
                onClick={() => navigate(`/${item.id}`)}
                >{item.name}</li>
            ))}
        </ul>
    </div>
  )
}
