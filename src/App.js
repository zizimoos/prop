import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <GlobalStyles></GlobalStyles>
      <Home></Home>
    </Container>
  );
}

export default App;
