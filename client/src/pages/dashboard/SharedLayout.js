import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-list">Add a list</Link>
        <Link to="all-lists">All Lists</Link>
      </nav>
    </Wrapper>
  );
};

export default SharedLayout;
