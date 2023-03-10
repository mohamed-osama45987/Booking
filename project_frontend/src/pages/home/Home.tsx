import {
  Navbar,
  Header,
  Featured,
  PropertyList,
  FeaturedProperties,
  MailList,
  Footer,
} from "../../components";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured />

        <h1 className="homeTitle"> Browse by property type</h1>
        <PropertyList />

        <h1 className="homeTitle"> Homes guests love</h1>
        <FeaturedProperties />

        <MailList />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
