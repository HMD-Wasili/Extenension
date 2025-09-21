import "./index.css";
import Nav from "./Nav.jsx";
import Mycard from "./MyCard.jsx";
import data from "./data.json";
import Active from "./Active.jsx";

const logos = import.meta.glob("./assets/images/*.svg", { eager: true });

const logoMap = Object.fromEntries(
  Object.entries(logos).map(([path, module]) => [
    path.split("/").pop(), // اسم الملف
    module.default,
  ])
);



function App() {
  return (
    <div className="w-screen">
      <div className=" w-full lg:w-1440px sm:w-375px bg-sky-200/20 pt-2 text-base ">
        <div>
          <Nav />
        </div>

        <div>
          <Active  />
        </div>

        <div className="">
          <Mycard />
          <div className="grid lg:grid-col-3 md:grid-cols-2 sm:grid-clos-1 justify-between items-center font-sans p-9 ">
            {data.map((item, index) => (
              <Mycard
                key={index}
                logo={logoMap[item.logo.split("/").pop()]} // يجيب الصورة الصحيحة
                //isActive={item.isActive}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
