import "./index.css";
import "./data.json";

function Active({ filter, setFilter }) {
  return (
    <>
      <div className="flex justify-between m-4 p-4">
        <div>
          <h1 className="text-4xl font-bold">Extension List</h1>
        </div>

        <div className="flex  mx-7 gap-4">
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "All" ? "bg-red-500 text-white" : "bg-white shadow-lg"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={`px-4 py-2 rounded-full ${
              filter === "Active" ? "bg-red-500 text-white" : "bg-white shadow-lg"
            }`}
            onClick={() => setFilter("Active")}
          >
            Active
          </button>

          <button
            className={`px-4 py-2 rounded-full ${
              filter === "Inactive" ? "bg-red-500 text-white" : "bg-white shadow-lg"
            }`}
            onClick={() => setFilter("Inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
    </>
  );
}

export default Active;
