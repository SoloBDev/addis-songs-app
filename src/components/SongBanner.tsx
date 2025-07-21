import styled from "@emotion/styled";
import ThemeToggle from "./ThemeToggle";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;

  @media (max-width: 600px) {
    height: 180px;
}
    @media screen and (min-width:600px && max-width:800px) {
    height: 260px;
    }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);

  @media (max-width: 600px) {
    width: 99.9%;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  padding: 1rem 2rem;
  border-radius: 8px;

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
  }

  @media screen and (min-width: 600px && max-width: 1200px) {
    padding: 0.75rem 1.5rem;
    width: 100%;
    }
`;

const ThemeTogglePosition = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 4px;
  padding: 4px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  padding: 0.5rem 1rem;
  text-wrap: nowrap;

  @media (max-width: 400px) {
    font-size: 1.5rem;
    text-wrap: nowrap;
  }

  @media screen and (min-width: 400px && max-width: 800px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const Description = styled.p`
  margin: 1rem 0 0;
  font-size: 1.2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  padding: 0.5rem 1rem;

  @media (max-width: 400px) {
    font-size: 0.6em;
    width: 100%;
  }
  @media screen and (min-width: 400px && max-width: 800px) {
    font-size: 0.8rem;
    width: 100%;
  }
`;

interface SongBannerProps {
  title?: string;
  description?: string;
}

export const SongBanner = ({
  title = "🎵 Addis Songs",
  description = "Welcome to the Addis Songs App! Explore, add, and manage your favorite songs.",
}: SongBannerProps) => {
  return (
    <BannerContainer>
      <BannerImage
        src='https://i.ibb.co/8gWgqtKt/party.jpg'
        alt='Peoples dancing at the party'
      />
      <ThemeTogglePosition>
        <ThemeToggle />
      </ThemeTogglePosition>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </BannerContainer>
  );
};
