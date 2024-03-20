import Header from "./components/Header/index";
import HomeInfoDiv from "./components/HomeInfoDiv";
// import Navbar from "./components/Navbar";
import PaymentLogos from "./components/PaymentLogos";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <HomeInfoDiv />
      <hr></hr>
      <PaymentLogos />
      <hr></hr>
    </>
  );
};
export default Home;
