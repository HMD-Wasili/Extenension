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
    <div className="">
      <div className="lg:w-1440px sm:w-375px min-h-screen bg-sky-100 pt-2 text-base ">
        <div className="">
          <Nav />
        </div>

        <div>
          <Active  />
        </div>

        <div className="">
          <Mycard />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-clos-1 justify-between items-center  font-sans p-9 ">
            {data.map((item, id) => (
              <Mycard
                key={id}
                logo={logoMap[item.logo.split("/").pop()]} // يجيب الصورة الصحيحة
                isActive={item.isActive}
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
