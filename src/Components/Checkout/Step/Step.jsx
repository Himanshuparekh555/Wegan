import React, { useContext } from "react";
import { FormContext } from "../Checkout";
import { Details, Shipping, Summary, Payment } from "../Forms";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Details />;
      break;
    case 1:
      stepContent = <Shipping />;
      break;
    case 2:
      stepContent = <Summary />;
      break;
    case 3:
      stepContent = <Payment />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
