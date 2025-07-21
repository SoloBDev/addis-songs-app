import { SongBanner } from "./components/SongBanner";
import SongList from "./components/SongList";
import "./styles.css";
import styled from "@emotion/styled";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: brightness(0.7);
`;

const HeroText = styled.div`
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
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
`;

const Description = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1.1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;
const App = () => {
  return (
    <div>
      <SongBanner />
      <SongList />
    </div>
  );
};

export default App;
