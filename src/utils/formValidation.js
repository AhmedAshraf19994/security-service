import * as yup from "yup";

export const contactFormSchema = yup.object({
  firstName: yup.string().required("first name is required").default(""),
  lastName: yup.string().required("last name is required").default(""),
  email: yup
    .string()
    .email("please enter a valid email ")
    .required("Email is required")
    .default(""),
  phone: yup.string().required("phone number is required").default(""),
  msg: yup
    .string()
    .required("Message is required")
    .default("")
    .min(4, "message is too short"),
});
