import React from "react";
import Image from "next/image";
import styled from "styled-components";


const ProductItem = styled.div`
  border-bottom: 1px solid rgb(172, 172, 172);
  margin: auto;
  width: 100%;
  border-bottom: 1px solid black;
  padding-bottom: 2rem;
  margin-top: 2rem;



`;

const ImageContainer = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  margin: auto;

  @media only screen and (min-width: 700px) {
    display: block;
  }
`;

const GumroadButton = styled.a`
  border: #393838 2px solid;
  border-radius: 5px;
  margin-top: 10%;
  background-color: #ff90e8;
  padding: 10px 20px;
  max-width: 100%;
  text-align: center;
  color: #000;
  display: block;
`;



export default function Product({ data }) {
  const { name, description, image, link } = data;

  return (
    <>
      <ProductItem>
        <h2>{name}</h2>
        <ImageContainer>
          <Image src={image} alt="product" width={700} height={500} />
        </ImageContainer>
        <p>{description}</p>
        <GumroadButton href={link}>
          View on Gumroad
        </GumroadButton>
      </ProductItem>
    </>
  );
}
