import {Route,Routes} from 'react-router-dom'
import Education from './Component/Education'
import Final from './Component/Final'
import Personal from './Component/Personal'
import Work from './Component/Work'
import './App.css'
export default function App()

{
  return<>
  <h1 className="alert alert-danger text-center"> Naukri User Registration </h1>
  <div className="container">
    <div className="row text-center" >
  
  <div className="col-lg-3 col-md-3">
   <b className='lbl'>Personal Information </b>  </div>
  <div className="col-lg-3 col-md-3">
  <b className='lbl'> Education Information </b> </div>
  <div className="col-lg-3 col-md-3">
  <b className='lbl'> Experience Information </b> </div>
  <div className="col-lg-3 col-md-3">
  <b className='lbl'> Final Data </b></div>
    </div>
  </div>
  <hr/>
  

  <Routes>
    <Route path="" element={<Personal/>} />
    <Route path="education" element={<Education/>} />
    <Route path="work" element={<Work/>} />
    <Route path="final" element={<Final/>} />
  </Routes>
  
  </>
}