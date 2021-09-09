import { useState } from 'react';
import { removeLeadingZeros } from '@utils/common';

type ValidationSuccessCallback = (validValue: string) => void;

interface HookParams {
  numbersOnly: boolean;
  minNumber: number;
  maxNumber: number;
  onChange: (v: string) => void;
}

function useValidateInput({ numbersOnly, minNumber, maxNumber, onChange }: HookParams) {
  const [ prevValidValue, setPrevValidValue ] = useState('');

  function validateInput(examinatedValue: string, onSuccessCallback?: ValidationSuccessCallback): void {
    if (numbersOnly) {
      validateNumberInput(examinatedValue, onSuccessCallback);
    } else if (onSuccessCallback) {
      onSuccessCallback(examinatedValue);
    }
  }

  function validateNumberInput(examinatedValue: string, onSuccessCallback?: ValidationSuccessCallback): void {
    const inputNumber = Number(examinatedValue);

    if (Number.isNaN(Number(prevValidValue)) || prevValidValue === '') {
      setPrevValidValue(minNumber.toString());
    }

    if (Number.isNaN(inputNumber)) {
      onChange(prevValidValue);
      return;
    }

    if (examinatedValue === '') {
      onChange(minNumber.toString());
      return;
    }

    if (inputNumber < minNumber) {
      onChange(minNumber.toString());
      return;
    }

    if (inputNumber > maxNumber) {
      onChange(maxNumber.toString());
      return;
    }

    setPrevValidValue(removeLeadingZeros(examinatedValue));

    if (onSuccessCallback) {
      onSuccessCallback(removeLeadingZeros(examinatedValue));
    }
  }

  return validateInput;
}

export default useValidateInput;