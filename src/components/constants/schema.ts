import { emailRegex, passwordRegex } from "./regex";

export const emailSchema = {
  required: {
    value: true,
    message: "Please fill out this field",
  },
  pattern: {
    value: emailRegex,
    message: "Please enter a valid email",
  },
};

export const passwordSchema = {
  required: {
    value: true,
    message: "Please fill out this field",
  },
  pattern: {
    value: passwordRegex,
    message: "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters.",
  },
};

export const nameSchema = {
    required: {
      value: true,
      message: "Please fill out this field",
    },
    minLength: {
        value: 3,
        message: 'Name must have 3 characters atleast'
    }
  };
