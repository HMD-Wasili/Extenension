import "./index.css";
import "./data.json";

function MyCard({ logo, /*isActive,*/ name, description }) {
  return (
    <div className=" bg-white p-6">
      

      <div className="bg-gray-300/15 shadow-gray-400 shadow-lg p-4 flex rounded-3xl gap-4 w-80 h-48">
        {/* logo */}
        <div className=" ">
          <img className="w-full h-40" src={logo} alt={name} />
        </div>

        {/* texts (name + description) */}
        <div >
          <h3 className="text-neutral-800 font-bold">{name}</h3>
          <p className="text-sm text-neutral-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
