import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import {addWorkItem ,deleteWorkItem} from '../reduxdata/RegisterSlice'
import uuid from 'react-uuid';

export default function Work() 
{
  const [isFormDisplay,setIsFormDisplay] = useState(false)

  const dispatch = useDispatch()
  const WorkData = useSelector(state=>state.regdata.value.Work)

  var organisationbox = undefined;
  var postbox = undefined;
  var salarybox = undefined;
  var startbox = undefined;
  var endbox = undefined;

  const deleteItem = (id)=>{
      var status = window.confirm("Are you Sure to Delete ?")
      if(status){
          dispatch(deleteWorkItem({id}))
      }
  }

  const save = (event)=>{
      var ob = {
          id : uuid(),
          organisation: organisationbox.value , post : postbox.value , 
          salary : salarybox.value , start : startbox, 
          end : endbox.value
      }
      dispatch(addWorkItem(ob))
      
      event.preventDefault()
  }


  return <>
  <h3 className="alert alert-secondary" > Work Data</h3>
  <button onClick={()=>setIsFormDisplay(!isFormDisplay)} className="btn btn-primary">{isFormDisplay?"Close":"Add Item"}</button>

  <form onSubmit={save} style={{display:isFormDisplay?'block':'none'}}>
  <input type="text"  ref={c=>organisationbox=c}  className="form-control" placeholder="Organisation Name" required /><br/>
  <input type="text"  ref={c=>postbox=c}  className="form-control" placeholder="Post" required /><br/>
  <input type="text"  ref={c=>salarybox=c}  className="form-control" placeholder="Salary" required /><br/>
  <input type="date"  ref={c=>startbox=c}  className="form-control" placeholder="Start Date" required /><br/>
  <input type="date"  ref={c=>endbox=c}  className="form-control" placeholder="End Date" required /><br/>
  <button className=" btn btn-success">Save Data</button>  &nbsp;&nbsp;&nbsp;

 

  </form>
  <hr/>

  
  {WorkData!=undefined?<table className="table table-striped">
            <thead>
                <tr>
                    <th>S. NO.</th>
                    <th>Organisation</th>
                    <th>Post</th>
                    <th>Salary</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
            </thead>
            <tbody>
                {WorkData.map((data,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.organisation}</td>
                    <td>{data.post}</td>
                    <td>{data.salary}</td>
                    <td>{data.start}</td>
                    <td>{data.end}</td>
                    <th>
                        <button onClick={()=>deleteItem(data.id)} className="btn btn-warning">Delete</button>
                    </th>
                </tr>)}
            </tbody>
        </table>:""}
        <hr/>
        

  
  <Link className="btn btn-warning" to="/education" > Preivous </Link>&nbsp;&nbsp;

  
  <Link className="btn btn-warning" to="/final" > Next </Link>
 
  
  
  </>
  
}

