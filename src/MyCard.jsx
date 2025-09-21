import "./index.css";
import "./data.json";

function MyCard({ logo, /*isActive,*/ name, description }) {
  return (
    <div className="grid justify-between font-sans p-6">
      {/* <div>
        <h1 className="text-3xl"><b>Extension List</b></h1>
         </div>

        <div className="flex justify-between  w-12 mx-7 gap-4 flex-wrap">
        <button className="text-white rounded-full border-solid bg-orange-600 px-4 py-2">All</button>
        <button className="text-white rounded-full bg-orange-600 px-4 py-2" >Active</button>
        <button className="text-white rounded-full bg-orange-600 px-4 py-2" >Inactive</button>
      </div> */}

      <div className="bg-gray-300/15 shadow-gray-400 shadow-lg p-4 flex rounded-3xl gap-4 w-80 h-48">
        {/* logo */}
        <div className="flex items-start">
          <img className="w-full h-40" src={logo} alt={name} />
        </div>

        {/* texts (name + description) */}
        <div className="flex flex-col">
          <h3 className="text-neutral-800 font-bold">{name}</h3>
          <p className="text-sm text-neutral-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
