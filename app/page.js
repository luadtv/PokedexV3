import "./styles.scss";
import Navbar from "./componets/Navbar";
import CardList from "./componets/CardList";



export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <CardList />
    </main>
  );
}
