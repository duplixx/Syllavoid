import React  from 'react'
import {useNavigate,} from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import data from '../data/collegeslist'
import PdfViewer from './college/pdfviewer';


export default function List(props) {
    const navigate = useNavigate();   
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
                        <Link to="./pdfviewer" props={item.id}><li key={item.id}
                        >{item.name}</li></Link>
                    ))}
                </ul>
            </div>
  )
}
