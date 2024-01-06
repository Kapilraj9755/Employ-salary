import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import {addEducationalItem,deleteEducationalItem} from '../reduxdata/RegisterSlice'
import uuid from 'react-uuid';
export default function Education()
{
    const [isFormDisplay,setIsFormDisplay] = useState(false)

    const dispatch = useDispatch()
    const educationData = useSelector(state=>state.regdata.value.education)

    var unibox = undefined;
    var collegebox = undefined;
    var yearbox = undefined;
    var marksbox = undefined;

    const deleteItem = (id)=>{
        var status = window.confirm("Are you Sure to Delete ?")
        if(status){
            dispatch(deleteEducationalItem({id}))
        }
    }

    const save = (event)=>{
        var ob = {
            id : uuid(),
            university : unibox.value , college : collegebox.value , 
            year : yearbox.value , marks : marksbox.value
        }
        dispatch(addEducationalItem(ob))
        
        event.preventDefault()
    }

    return <>
        <h3 className="alert alert-info">Education Data</h3>
        
        <button onClick={()=>setIsFormDisplay(!isFormDisplay)} className="btn btn-primary">{isFormDisplay?"Close":"Add Item"}</button>
        
        <hr/>

        <form onSubmit={save} style={{display:isFormDisplay?'block':'none'}}>
            <input type="text" className="form-control" placeholder="University" ref={c=>unibox=c} required/> <br/>

            <input type="text" className="form-control" placeholder="College" ref={c=>collegebox=c} required/> <br/>

            <input type="text" className="form-control" placeholder="Year" ref={c=>yearbox=c} required/> <br/>

            <input type="text" className="form-control" placeholder="Marks" ref={c=>marksbox=c} required/> <br/>
            <button className="btn btn-success">Save Data</button>
            &nbsp;&nbsp;&nbsp;            
        </form><hr/>
        {educationData!=undefined?<table className="table table-striped">
            <thead>
                <tr>
                    <th>S. NO.</th>
                    <th>University</th>
                    <th>College</th>
                    <th>Year</th>
                    <th>Marks</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {educationData.map((data,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.university}</td>
                    <td>{data.college}</td>
                    <td>{data.year}</td>
                    <td>{data.marks}</td>
                    <th>
                        <button onClick={()=>deleteItem(data.id)} className="btn btn-warning">Delete</button>
                    </th>
                </tr>)}
            </tbody>
        </table>:""}
        <hr/>
        

        <Link to="/" className="btn btn-warning">Previous</Link>
        &nbsp;&nbsp;&nbsp;
        {educationData!=undefined?<Link to="/work" className="btn btn-warning">Next</Link>:""}
      
       
    </>
}


