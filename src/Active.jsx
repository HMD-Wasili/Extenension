import "./index.css";
import "./data.json";

function Active() {
  return (
    <div className="flex justify-between font-sans p-6">
      <div>
        <h1 className="text-2xl font-bold">Extension List</h1>
         </div>

        <div className="flex justify-between mx-7 gap-4 ">
        <button className="text-white rounded-full bg-orange-600 px-4 py-2">All</button>
        <button className="text-white rounded-full bg-orange-600 px-4 py-2">Active</button>
        <button className="text-white rounded-full bg-orange-600 px-4 py-2">Inactive</button>
      </div>



    </div>
  );
}

export default Active;
