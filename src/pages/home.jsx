import React,{useState}  from 'react';
import {
	Navbar,
	Tools,
    Motive,
    Team,
    Search,
    Particle,
    List,
    Sign_In,
	Footer,
} from '../Components/index';
const HomePage = () => {
    const [show,setShow] = useState(false)
    const handleChange = (e) =>{
    if(show===false){
      setShow(true)
    }
    else{
      setShow(false)
    }
      
  }
	return (
		<>  
            <Particle/>
            <Navbar onClick = {handleChange} />
            <Search />
            <Motive />
            <Team />
            <Tools />
            <Footer />
            <Sign_In show = {show} onClick={handleChange} />
		</>
	);
};

export default HomePage;