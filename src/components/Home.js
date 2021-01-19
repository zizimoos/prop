import { useState } from "react";
import styled from "styled-components";
import Jhop from "./Jhop";
import Jin from "./Jin";
import Title from "./Title";

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: dodgerblue;
`;

const Home = () => {
  return (
    <Container>
      <h1>BTS Forever</h1>
      <Jin
        imgPath={
          "https://pds.joins.com/news/component/htmlphoto_mmdata/201910/04/2e1b2a38-2574-4025-98dc-23a54ae75fd5.jpg"
        }
      ></Jin>
      <Title name={"Jin"} age={23}></Title>
      <Jhop size={true}></Jhop>
      <Title name={"Jhop"} age={21}></Title>
    </Container>
  );
};

export default Home;
