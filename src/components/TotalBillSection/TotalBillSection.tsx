import React from "react";
import { TipAndTotalInput } from "../TipAndTotalInput/TipAndTotalInput";
import { ResetButton } from "../ResetButton/ResetButton";
import { Action, State } from "../../bill_model";

interface TotalBillSectionProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TotalBillSection(props: TotalBillSectionProps) {
  const billAmount = props.state.bill;
  const noOfPeople = props.state.person;
  const tipAmount =
    ((Number(props.state.selected) / 100) * Number(billAmount)) / Number(noOfPeople);
  const totalAmountPerPerson =
    (Number(billAmount) + Number(props.state.selected)) / Number(noOfPeople);

  return (
    <div className="min-w-[305px] bg-[#00474b] rounded-[16px] flex flex-col justify-between w-full p-[59.29px] max-1100:p-[35px] max-700:p-[26px] h-full">
      <div className="flex flex-col justify-between gap-[64px] w-full max-700:gap-[27px]">
        <TipAndTotalInput
          label="Tip Amount"
          value={
            isNaN(tipAmount) || !isFinite(Number(totalAmountPerPerson))
              ? "0.00"
              : tipAmount.toFixed(2)
          }
        ></TipAndTotalInput>
        <TipAndTotalInput
          label="Total"
          value={
            isNaN(Number(totalAmountPerPerson)) ||
            !isFinite(Number(totalAmountPerPerson))
              ? "0.00"
              : totalAmountPerPerson.toFixed(2)
          }
        ></TipAndTotalInput>
      </div>
      <div className="mt-auto  ">
        <ResetButton
          state={props.state}
          dispatch={props.dispatch}
          value="RESET"
          customIsInput={props.customIsInput}
          setcustomIsInput={props.setcustomIsInput}
        />
      </div>
    </div>
  );
}
