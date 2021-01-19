import styled from "styled-components";

const Img = styled.img`
  width: 400px;
  opacity: ${(jhop) => (jhop.size ? 1 : 0.3)};
`;

const Jhop = ({ size }) => {
  return (
    <Img
      size={size}
      src="https://i.pinimg.com/736x/9e/37/9c/9e379cbe0a872123d30ce136637f26ca.jpg"
      alt="jhop"
    ></Img>
  );
};

export default Jhop;
