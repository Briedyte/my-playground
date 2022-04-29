import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ColorPalette, FontSize, Spacing } from "@config/style";

import Container from "@components/Container";
import { ContainerVariant } from "@components/Container/Container";
import Button from "@components/Button";

import { useAuth } from "@context/AuthProvider";

const Title = styled.h2`
  font-size: ${FontSize[30]};
  color: ${ColorPalette.primary};
`;

const Image = styled.img`
  border: 3px solid ${ColorPalette.black};
  border-radius: 20px;
  max-height: 60%;
  max-width: 50%;
`;

const ButtonWrapper = styled.div`
  margin: ${Spacing[60]};
`;

const Userpage = () => {
  const [foxImgUrl, setFoxImgUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const { logout } = useAuth();

  const randomFoxId = Math.trunc(Math.random() * 100);

  useEffect(() => {
    const fetchFox = async () => {
      setError("");
      setisLoading(true);

      const result = await fetch(
        `https://randomfox.ca/images/${randomFoxId}.jpg`
      )
        .then((res) => {
          if (res.ok) {
            return res;
          }

          setisLoading(false);
        })
        .catch((e) => {
          setisLoading(false);
          setError("Something went wrong...");
        });

      if (!result || !result.url) {
        setError("Something went wrong...");
        return;
      }
      setFoxImgUrl(result.url);
    };

    fetchFox();
  }, []);

  return (
    <Container variant={ContainerVariant.centeredContent}>
      {isLoading && <p>Loading...</p>}

      {foxImgUrl && (
        <>
          {!isLoading && <Title>Well, hello!</Title>}
          <Image src={foxImgUrl} alt="Fox" onLoad={() => setisLoading(false)} />
        </>
      )}

      {error && <p>{error}</p>}
      <ButtonWrapper>
        <Button onClick={() => logout()}>Log out</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Userpage;
