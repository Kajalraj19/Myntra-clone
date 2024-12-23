import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);

  const itemsArray = Array.isArray(items) ? items : [];

  return (
    <main>
      <div className="items-container">
        {itemsArray.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
