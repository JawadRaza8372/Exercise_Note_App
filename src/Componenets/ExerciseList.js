import React,{useState,useEffect} from 'react'
import ADDPost from './ADDPost'
import Post from './Post'
import axios from "axios"
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
function ExerciseList() {
const [data, setData] = useState(null)
    function fetchExercise(){
        axios.get("http://localhost:5000/exercise/").then(dtta=>{setData(dtta.data);}).catch(e=>console.log(e))
    }

    useEffect(() => {
      fetchExercise();
    },[]);

const deltt=(idd)=>{
    setData(data.filter(dat=>dat._id !== idd))}
    return (
        <div style={{overflow:"hidden"}}>
        <center>            <h1 className="justColor"><AccessibilityNewIcon  style={{fontSize:"45px"}}/>Exercise List</h1>
</center>
            <div className="row justify-content-center">
<div className="col-10"><div className="row">
{ data && data.map((dt)=>{
    return <Post username={dt.username} key={dt._id} id={dt._id} description={dt.description}  duration={dt.duration}  date={dt.date} delateFun={()=>{deltt(dt._id)}}/>

})

}
            <ADDPost/>

</div></div>


        </div>
        </div>
    )
}

export default ExerciseList
