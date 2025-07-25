/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { Search } from "lucide-react";
import { ThemeType } from "../../theme";
import { useThemeToggle } from "../theme/CustomThemeProvider";

interface NavBarProps {
  title: string;
  query: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddClick: () => void;
  searchPlaceholder?: string;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: space-between;
    width: 96%;
    margin-top: .5em;
    margin-bottom: 1.2em;
  }

  @media (min-width: 1280px) {
  justify-content: space-around}
`;

const Title = styled.h2`
  display: block;
  font-size: 1.8em;
  font-weight: bold;
  white-space: nowrap;

  @media (max-width: 420px) {
    font-size: 1em;
    white-space: wrap;
    width: 60px;
    display: block;
  }

  @media screen and (min-width: 420px) and (max-width: 800px) {
    display: none !important;
  }
`;

const AddButton = styled.button`
  background-color: #2e2e2e;
  color: white;
  padding: 1em 1em;
  border: none;
  border-radius: 0.375em;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #5b5c5fff;
  }

  @media (max-width: 400px) {
    font-size: 0.6em;
  }
`;

const InputWrapper = styled.div<{ theme: ThemeType }>`
  position: relative;
  width: 65%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  place-content: center;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

const IconWrapper = styled.span<{ theme: ThemeType }>`
  position: absolute;
  top: 50%;
  left: 2em;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.icon};
  pointer-events: none;

  @media (max-width: 400px) {
    left: 1em;
    font-size: 0.8em;
  }
`;

const StyledInput = styled.input<{ theme: ThemeType }>`
  width: 100%;
  padding: 0.8em 1em 0.8em 4.5em;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  border: 0.5px solid ${({ theme }) => theme.colors.primary || "#ccc"};
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  @media (max-width: 400px) {
    font-size: 0.8em;
    padding: 0.7em 1em 0.7em 4em;
  }
`;

export const NavBar: React.FC<NavBarProps> = ({
  title,
  query,
  onSearchChange,
  onAddClick,
  searchPlaceholder = "Search...",
}) => {
  const { currentTheme } = useThemeToggle();

  return (
    <Header>
      <Title>{title}</Title>
      <InputWrapper theme={currentTheme}>
        <IconWrapper theme={currentTheme}>
          <Search />
        </IconWrapper>
        <StyledInput
          theme={currentTheme}
          type='text'
          value={query}
          onChange={onSearchChange}
          placeholder={searchPlaceholder}
        />
      </InputWrapper>
      <AddButton onClick={onAddClick}>Add New Song</AddButton>
    </Header>
  );
};
