import "../../App.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { TipOptionsPanel } from "../TipOptionsPanel/TipOptionsPanel";
import { Action, State } from "../../bill_model";
import "../../App.css";

export interface FirstHalfProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const errorMsg = { bill: "", person: "" };

export function FirstHalf({
  state,
  dispatch,
  customIsInput,
  setcustomIsInput,
}: FirstHalfProps) {
  const validateNumber = (value: string): string => {
    if (parseInt(value) < 0) return "The value is negative";
    return "";
  };

  const handleInputChange = (field: "bill" | "person") => (value: string) => {
    dispatch({ type: "SET_VALUE", field, value });
    errorMsg[field] = validateNumber(value);
  };

  return (
    <div
      className={`
        bg-white flex flex-col items-center justify-between gap-[56px] w-full 
         
        max-550:gap-[32px] max-550:w-full 
      `}
    >
      {/* min-w-[350.5px]  min-w-[350.5px] */}
      <NumberInput
        label="Bill"
        typeOfIcon="dollar"
        value={state.bill.toString()}
        onChange={handleInputChange("bill")}
        errorMsg={errorMsg.bill}
      />
      <TipOptionsPanel
        chooseTipText="Select Tip %"
        state={state}
        dispatch={dispatch}
        customIsInput={customIsInput}
        setcustomIsInput={setcustomIsInput}
      />
      <NumberInput
        label="Number of people"
        typeOfIcon="person"
        value={state.person.toString()}
        onChange={handleInputChange("person")}
        errorMsg={errorMsg.person}
      />
    </div>
  );
}
