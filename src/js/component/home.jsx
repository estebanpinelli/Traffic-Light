import React from "react";
import Redlight from "./redlight";
import Yellowlight from "./yellowlight";
import Greenlight from "./greenlight";


//create your first component
const Home = () => {
	return (

	      <div className="container-fluid text-center">
      	<div className="row justify-content-center">
        <div className="col-2 bg-dark m-5 p-2 rounded">
		<Redlight/>
		<Yellowlight/>
		<Greenlight/>
		</div>
		</div>
		</div>

	);
}
  
export default Home;
