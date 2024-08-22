import React from "react";
import { Tip } from "../Tip/Tip";
import { Action, State } from "../../bill_model";

interface TipOptionsPanelProps {
  chooseTipText: string;
  state: State;
  dispatch: React.Dispatch<Action>;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TipOptionsPanel(props: TipOptionsPanelProps) {
  const tipValues = [5, 10, 15, 25, 50, "Custom"];
  const handleTipSelection = (value: number | string) => {
    if (value === "Custom") {
      props.dispatch({ type: "SET_SELECTED", value: "Custom" });
      props.setcustomIsInput(true);
      return;
    }
    props.setcustomIsInput(false);
    const selectedValue = props.state.selected;
    if (selectedValue === JSON.stringify(value)) {
      props.dispatch({ type: "SET_SELECTED", value: JSON.stringify("") });
    } else {
      props.dispatch({ type: "SET_SELECTED", value: JSON.stringify(value) });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const selectedValue = props.state.selected;
    if (selectedValue) {
      let index = tipValues.findIndex(
        (tip) => JSON.stringify(tip) === selectedValue
      );

      if (index === -1) return;

      if (e.key === "ArrowRight") {
        index = (index + 1) % tipValues.length;
      } else if (e.key === "ArrowLeft") {
        index = (index - 1 + tipValues.length) % tipValues.length;
      }

      handleTipSelection(tipValues[index]);
    }
  };

  return (
    <div
      className="bg-white w-full"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="font-inherit font-bold text-[1.25rem] leading-[1.5] tracking-[0.1em] text-label-color mb-[24px] w-full max-1100:text-[1rem] max-550:text-[0.875rem] max-550:mb-[16px]">
        {props.chooseTipText}
      </div>
      <div className="grid grid-cols-3 gap-[24px] w-full max-1100:gap-[10px] max-550:gap-[16px] max-550:grid-cols-2">
        {tipValues.map((value) => (
          <Tip
            key={value}
            state={props.state}
            dispatch={props.dispatch}
            value={value}
            onClick={() => handleTipSelection(value)}
            isSelected={props.state.selected === value}
            tipValues={tipValues}
            customIsInput={props.customIsInput}
            setcustomIsInput={props.setcustomIsInput}
          />
        ))}
      </div>
    </div>
  );
}
