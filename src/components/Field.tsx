import { FC } from "react";
import { Step1 } from "../steps/Step1.tsx";
import styled from "styled-components";
import { TestSubject } from "./TestSubject.tsx";

const PlayField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 555px;
  background-color: white;
  border-radius: 10px;
  margin: 20px;
`;

const Field: FC = () => {
  return (
    <div>
      Transfiguration Class 101
      <PlayField>
        <TestSubject />
      </PlayField>
      <Step1 />
    </div>
  );
};

export { Field };
