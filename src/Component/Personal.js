
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import {addPersonalData} from '../reduxdata/RegisterSlice'



export default function Personal()
{
    var namebox = undefined;
    var phonebox = undefined;
    var emailbox = undefined;
    var dobbox = undefined;

    var dispatch = useDispatch()
    var personalData = useSelector(state=>state.regdata.value.personal) 

    console.log(">> ",personalData)

    const save = (event)=>{
        var ob = {
            name : namebox.value , phone : phonebox.value,
            email : emailbox.value , dob : dobbox.value
        }
        dispatch(addPersonalData(ob))
        event.preventDefault()
    }
    return <>
        <h3 className="alert alert-info">Personal Data</h3>
        <form onSubmit={save}>
            <input type="text" className="form-control" placeholder="Name" Value={personalData!=undefined? personalData.name:""} ref={c=>namebox=c} required/> <br/>

            <input type="text" className="form-control" placeholder="Phone" Value={personalData!=undefined? personalData.phone:""} ref={c=>phonebox=c} required/> <br/>

            <input type="text" className="form-control" placeholder="Email" Value={personalData!=undefined? personalData.email:""} ref={c=>emailbox=c} required/> <br/>

            <input type="date" className="form-control" placeholder="DOB" Value={personalData!=undefined? personalData.dob:""} ref={c=>dobbox=c} required/> <br/>

            <button className="btn btn-success">Save Data</button>
            &nbsp;&nbsp;&nbsp;
            {personalData!=undefined?<Link to="/education" className="btn btn-warning">Next</Link>:""}
        </form>
       
    </>
}