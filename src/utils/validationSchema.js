import * as Yup from "yup";

export const TASK_SCHEMA = Yup.object({
  body: Yup.string()
    .trim()
    .min(3, "Must be 3 symbols")
    .max(20, "Must be less 21 symbols")
    .required('You must read something!'),
});
