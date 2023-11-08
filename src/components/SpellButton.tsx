import { FC } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 200px;
  height: 50px;
  background: yellow;
`;

const SpellButton: FC<{ title: string; onClick: () => void }> = ({
  title,
  onClick,
}) => {
  return <ButtonWrapper onClick={onClick}>{title}</ButtonWrapper>;
};

export { SpellButton };
