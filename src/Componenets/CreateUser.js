import React,{useState} from 'react'
import axios from "axios"
import {Toast} from "react-bootstrap"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
function CreateUser() {
    const [form, setform] = useState({name:''});
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const submitForm=(e)=>{
e.preventDefault();
axios.post("http://localhost:5000/user/add",form).then(data=>{(data.status=== 200)?setShow(true):setShow2(true)}).catch(e=>console.log(e))
setform({name:''});
    }

    const handleForm=(e)=>{
        const nameee=e.target.id;
        const value=e.target.value;
        setform((prevalue)=>{
            return{
                ...prevalue,
                [nameee]:value
            }
        })}
    return (<section id="header" className="d-flex align-items-center">
    <div className="container-fluid">
        <div className="row">
    <div className="col-6 mx-auto">
    <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-10 col-md-8 col-lg-8 col-xl-6">
           
            <form style={{border:"2px solid blueviolet",padding:"15px",height:"auto",alignSelf:"center"}} onSubmit={submitForm}>
            <center>
            <br/>
            <h1 className="justColor"><PersonAddIcon style={{fontSize:"45px"}}/>Create User</h1>
            <br/>
  <div className="mb-3">
    <input style={{border:"2px solid blueviolet",color:"blueviolet"}} minLength={6} type="text" id="name" name="name"  value={form.name}  className="form-control"  onChange={handleForm} placeholder="Enter User Name"  required/>
  </div>

 

{show &&
    (<Toast onClose={() => setShow(false)} show={show} delay={2000} autohide animation>
<center>
     <h6  style={{color:"green",marginTop:"20px",marginBottom:"20px"}}>successfully Added</h6></center>
    </Toast>)

}

{ show2 &&
    (<Toast onClose={() => setShow2(false)} show={show2} delay={2000} autohide animation>
<center>
     <h6  style={{color:"green",marginTop:"20px",marginBottom:"20px"}}>Error</h6></center>
    </Toast>)
}

  <button type="submit" className="navbtn2">Create</button><br/></center>
            </form>
        </div>
       </div></div></div></div></section>
    )
}

export default CreateUser


