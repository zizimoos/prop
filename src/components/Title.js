import styled from "styled-components";

const Name = styled.div`
  font-size: 26px;
`;

const Title = ({ ...bts }) => {
  console.log(bts.name);
  return (
    <>
      <Name>name : {bts.name}</Name>
      <div>age : {bts.age}</div>
    </>
  );
};
export default Title;
