import Header from "../components/Home/Header";
import Filter from "../components/Home/Filter";
import Jobs from "../components/Home/Jobs";

const Home = () => {
  return (
    <div className="Home">
      <Header />

      <section className="main-home-section">
        <Filter />
        <Jobs itemsPerPage={5} />
      </section>
    </div>
  );
};

export default Home;
