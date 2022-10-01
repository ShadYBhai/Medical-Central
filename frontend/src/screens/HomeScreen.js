import Announcement from "../components/Announcemnet";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ShopByProduct from "../components/ShopByProduct";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <div>
      {/* <Announcement/> */}
      <Navbar />
      <Header />
      <Categories />
      <Div>
        <ShopByProduct />
      </Div>
    </div>
  );
};

const Div = styled.div`
  margin-top: 5rem;
`;

export default HomeScreen;
