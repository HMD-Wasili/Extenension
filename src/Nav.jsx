import NavLlogo from "./assets/images/logo.svg";
import moon from "./assets/images/icon-moon.svg";
import "./index.css"

 function Nav() {
  return (
    <div className="flex justify-between items-center p-3 m-4 bg-white shadow-lg max-h- rounded-3xl">
      
      <div>
      <img src={NavLlogo} alt="logo svg" /> 
      </div>

      <div className=" flex  bg-gray-200  rounded-[2vw] p-3 ">
        <img src={moon} alt="moon svg" />
      </div>
        

    </div>
  );
}

export default Nav;