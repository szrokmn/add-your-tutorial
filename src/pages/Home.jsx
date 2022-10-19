import AddTutorial from '../components/AddTutorial'
import TutorialList from '../components/TutorialList'
import axios from "axios";
import {useEffect, useState} from "react"


const Home = () => {
    const [tutorials, setTutorials] = useState([])
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials"

    const getTutorials = async() => {
        const { data } = await axios(url);
        console.log(data)
        setTutorials(data);
    }
   useEffect(() => {
     getTutorials();
   }, [])

  return (
    <div>
      <AddTutorial/>
      <TutorialList tutor={tutorials}/>
    </div>
  )
}
export default Home
