import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orange; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">Hello jvvmkv</Heading>
          <div>
            {/* here give as means it will render as h2 no metter it is the h1 stylinng or what this is the style compoment feature */}
            <Heading as="h2">Check in and out</Heading>
            <Button
              variation="primary"
              size="medium"
              onClick={() => alert("Check in")}
            >
              Check in
            </Button>
            <Button
              variation="secondary"
              size="small"
              onClick={() => alert("hello")}
            >
              Check out
            </Button>
          </div>
        </Row>

        <Row type="vertical">
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="Number of guest" />
            <Input type="number" placeholder="Number of guest" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
