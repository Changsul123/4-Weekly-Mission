import { useState } from "react";

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

const useValidation = (initialValue: string, validations: Validation) => {
  const [input, setInput] = useState(initialValue);
  const [error, setError] = useState("");

  const validate = () => {
    for (const validation in validations) {
      if (validation === "required") {
        const currentValidation = validations[validation] as {
          value: boolean;
          message: string;
        };
        if (currentValidation.value && input === "") {
          setError(currentValidation.message);
          return false;
        }
      }
      if (validation === "pattern") {
        const currentValidation = validations[validation] as {
          value: string;
          message: string;
        };
        if (
          currentValidation.value &&
          !RegExp(currentValidation.value).test(input)
        ) {
          setError(currentValidation.message);
          return false;
        }
      }
      if (validation === "custom") {
        const currentValidation = validations[validation] as {
          isValid: (value: string) => boolean;
          message: string;
        };
        if (currentValidation.isValid && !currentValidation.isValid(input)) {
          setError(currentValidation.message);
          return false;
        }
      }
    }
    setError("");
    return true;
  };
  return { input, setInput, error, validate };
};

export default useValidation;
