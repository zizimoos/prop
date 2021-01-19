import styled from "styled-components";

const Img = styled.img`
  width: 300px;
`;

const Jin = ({ ...banco }) => {
  return (
    <>
      <Img src={banco.imgPath} alt="jin"></Img>
    </>
  );
};
export default Jin;
