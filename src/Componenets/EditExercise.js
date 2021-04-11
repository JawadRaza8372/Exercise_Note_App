import React,{useState,useParams} from 'react'
import EditIcon from '@material-ui/icons/Edit';
import axios from "axios"
import {Toast} from "react-bootstrap"
function EditExercise(props) {
      const id=  props.match.params.id;
    const [form, setform] = useState({description:'',duration:''})
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [user, setUser] = useState('');
    function fetchUsers(){
        axios.get("http://localhost:5000/user/").then(data=>{setUser(data.data)}).catch(e=>console.log(e))
    }
    const submitForm=(e)=>{
        e.preventDefault();
        console.log(form)
        axios.post(`http://localhost:5000/exercise/update/${id}`,form).then(data=>{(data.status=== 200)?setShow(true):setShow2(true)}).catch(e=>console.log(e));
        setform({description:'',duration:''})
            }
        
        
        
        
            const handleForm=(e)=>{
                const name=e.target.id;
                const value=e.target.value;
                setform((prevalue)=>{
                    return{
                        ...prevalue,
                        [name]:value
                    }
                })}
        
        
    return (
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
        <div className="col-6 mx-auto">
        <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-8 col-xl-6">
               
                <form style={{border:"2px solid blueviolet",padding:"15px",height:"auto",alignSelf:"center"}} onSubmit={submitForm}>
                <center>
                <h1 className="justColor"><EditIcon  style={{fontSize:"45px"}}/>Update Exercise</h1>
               
      <div className="mb-3">
        <input  style={{border:"2px solid blueviolet",color:"blueviolet"}} type="text" id="description" name="description" minLength={6} className="form-control" value={form.description} onChange={handleForm} placeholder=" description"  required/>
      </div>
      <div className="mb-3">
        <input  style={{border:"2px solid blueviolet",color:"blueviolet"}} type="number" id="duration" name="duration" maxLength={2} className="form-control" value={form.duration} onChange={handleForm} placeholder=" duration" required/>
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
      <button type="submit" className="navbtn2">Submit</button>
              </center>  </form></div></div></div></div></div></section>
    )
}

export default EditExercise
