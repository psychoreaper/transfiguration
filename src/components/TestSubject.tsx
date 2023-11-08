import { FC, useState } from "react";
import styled, { css } from "styled-components";
import store from "../store/store.ts";
import { SPELLS } from "../store/spells.ts";

const Subject = styled.div<{ spell: string }>(
  ({ spell }) => css`
    height: 75px;
    width: 75px;
    background-color: red;

    animation: ${spell} 1s ease-in-out forwards;

    @keyframes ${SPELLS.colorio} {
      0% {
        background-color: red;
      }

      100% {
        background-color: blue;
      }
    }
  `,
);

const TestSubject: FC = () => {
  const [spell, setSpell] = useState(store.getState().lastSpell);
  store.subscribe(() => setSpell(store.getState().lastSpell));

  return <Subject spell={spell} />;
};

export { TestSubject };
