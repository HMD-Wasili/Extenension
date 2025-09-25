import "./index.css";
import Nav from "./Nav.jsx";
import MyCard from "./MyCard.jsx";
import data from "./data.json";
import Active from "./Active.jsx";
import { useState } from "react";

const logos = import.meta.glob("./assets/images/*.svg", { eager: true });

const logoMap = Object.fromEntries(
  Object.entries(logos).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

function App() {
  const [filter, setFilter] = useState("All");
  const [cards, setCards] = useState(data); // Switch state

  // Filtering
  const data1 = cards.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Active") return item.isActive === true;
    if (filter === "Inactive") return item.isActive === false;
  });

  // isActive
  const toggleActive = (index) => { // toggleActive
    const updatedCards = [...cards]; // copy from cards
    updatedCards[index].isActive = !updatedCards[index].isActive;
    setCards(updatedCards); // change the state 
  };

  return (
    <div className="bg-sky-200/40 min-h-screen">
      <div className="grid lg:w-1440px sm:w-375px min-h-full  pt-2 text-base ">
        <Nav />

        <Active filter={filter} setFilter={setFilter} />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-9">
          {data1.map((item, index) => (
            <MyCard
              key={index}
              logo={logoMap[item.logo.split("/").pop()]}
              isActive={item.isActive}
              name={item.name}
              description={item.description}
              onToggle={() => toggleActive(index)} // Swiche
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
