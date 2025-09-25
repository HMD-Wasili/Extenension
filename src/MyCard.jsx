import "./index.css";

function MyCard({ logo, isActive, name, description, onToggle }) {
  return (
    <div className="p-6 gap-5">
      <div
        className={`shadow-lg p-4 flex flex-col justify-between rounded-3xl gap-4 w-80 h-44 ${
          isActive ? "bg-white" : "bg-gray-200 opacity-70"
        }`}
      >
        {/* Card*/}
        <div className="flex gap-4">
          <div>
            <img className="w-16 h-16" src={logo} alt={name} />
          </div>
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-neutral-600">{description}</p>
          </div>
        </div>

        {/* Toggle button */}
        <div className="flex justify-end items-center">
          <button
            onClick={onToggle} 
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              isActive ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                isActive ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
