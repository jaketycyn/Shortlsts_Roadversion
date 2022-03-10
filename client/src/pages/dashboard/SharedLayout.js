import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";

import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />

        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
          <TestWrapper className="dashboard-page">
            <form>
              <input placeholder="Enter new list name"></input>
              <button>Create new List</button>
              <ol>
                Lists of things
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ol>
            </form>
          </TestWrapper>
        </div>
      </main>
    </Wrapper>
  );
};

const TestWrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  background: red;
`;

export default SharedLayout;
