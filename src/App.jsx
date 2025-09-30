// import "./index.css";
import Nav from "./Nav.jsx";
import MyCard from "./MyCard.jsx";
// import data from "./data.json";
import Active from "./Active.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

// const logos = import.meta.glob("./assets/images/*.svg", { eager: true });

// const logoMap = Object.fromEntries(
//   Object.entries(logos).map(([path, module]) => [
//     path.split("/").pop(),
//     module.default,
//   ])
// );

function App() {
  {
    /* How to writte a Fuctions in JS:

  1- الطريقة الأولى
  function nameOfFunction(){
    console.log("Hammad killing me")
  }
    nameOfFunction();

  2-   الطريقة الثانية  arrow function 
    const arrow = () => console.log("Hammad is threatening me")
    arrow();

    EXM:
     const arrow = (name, age) => {
    console.log(`what's up ${name}`);
    console.log(`Just look up and moving forward your age is ${age}`);
  };
  arrow("Hamad", 28);
  
  3-
      Some of what ARROW FUNCTIONS has do:
       1
      const numbers = [1, 2, 3, 4, 5, 6];
      const squares = numbers.map((element) => Math.pow(element, 2) );
      console.log(squares);

      2
      const numbers = [1, 2, 3, 4, 5, 6];
      const evenNums = numbers.filter((element) => element % 2 === 0) );   ما يحتاج تحط return اذا كان سطر واحد
      console.log(evenNums);

      */
  }

      

 

  // const [filter, setFilter] = useState("All");
  // const [cards, setCards] = useState(data); // Switch state

  // here we store the data
  const [cards, setCards] = useState([]);
  // here we store loading state (true, false)
  const [isLoading, setIsLoading] = useState(false);
  // here we store the error message when catch happens
  const [error, setError] = useState(null);

  // Axios  (خليتعها كا متغير عشان  ما يحتاج اغير الرابط  في ال get & post ... )
  const extensionAPI = axios.create({
    baseURL: "https://base-tamimha.techwin.sa/api/",
  });


  // GET CARDS  
  const getCards = async () => {
    setIsLoading(true);

    try {
      const response = await extensionAPI.get("cards");
      console.log(response);
      setCards(response.data.data);
    } catch (error) {
      isLoading(false);
      console.log(error);
    }
  };

  // DELETE CARDS=
  const deleteCard = async(id) => {
    try {
     const response = await extensionAPI.delete(`cards/delet/${id}`);
      console.log(response)

    } catch (error) {
      console.error(error)
    }

  };

  useEffect(() => {
    getCards();
  }, []);

  //  async function getCards() {

  //  }
  // Filtering
  // const data = cards.filter((item) => {
  //   if (filter === "All") return true;
  //   if (filter === "Active") return item.isActive === true;
  //   if (filter === "Inactive") return item.isActive === false;
  // });

  // isActive

  const toggleActive = (index) => {
    // toggleActive
    const updatedCards = [...cards]; // copy from cards
    updatedCards[index].isActive = !updatedCards[index].isActive;
    setCards(updatedCards); // change the state
  };

  if (cards.length === 0) {
    return <div>The length is 0 </div>;
  }
  return (
    <div className="bg-sky-200/40 min-h-screen">
      <div className="grid lg:w-1440px sm:w-375px pt-2 text-base ">
        <Nav />

        {/* <Active filter={filter} setFilter={setFilter} /> */}
        <Active />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  ">
          {cards.map((item) => (
            <MyCard
              key={item.id}
              logo={item.icon} // change from item.logo to item.icon
              isActive={item.isActive}
              name={item.title} // change from item.name to item.title
              description={item.description}
              onToggle={() => toggleActive(item)} // Swiche
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
