import { FC, useState } from "react";
import { SpellButton } from "../components/SpellButton.tsx";
import store, { spellcast } from "../store/store.ts";
import { SPELLS } from "../store/spells.ts";

const Step1: FC = () => {
  const [, setSpell] = useState(store.getState().lastSpell);

  // store.subscribe(() => setSpell(store.getState().lastSpell));

  return (
    <div>
      Step 1
      <SpellButton
        title={"Colorio!"}
        onClick={() => {
          store.dispatch(spellcast(SPELLS.colorio));
        }}
      />
    </div>
  );
};

export { Step1 };
