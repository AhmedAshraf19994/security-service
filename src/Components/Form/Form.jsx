import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../utils/formValidation";
import { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ title }) => {
  const [error, setError] = useState();
  const [succeeded, setSucceeded] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  // send message function
  const onSubmit = async (formData) => {
    const templateId = "template_uxg6krn";
    const serviceId = "service_3a0ss7l";
    const key = "TGXPmUMyLGe7T0ZKV";
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: key,
      template_params: {
        from_name: formData.firstName + formData.lastName,
        message: formData.msg,
      },
    };
    try {
      setError("");
      const res = await axios.post(
        " https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res);
      setSucceeded(true);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setTimeout(() => {
        setSucceeded(false);
      }, 3000);
    }
  };

  // reset the form
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" ">
      <h1 className=" uppercase tracking-wider h1  text-center mb-3 italic text-3xl font-semibold">
        {title}
      </h1>

      <Input
        type="text"
        placeHolder="First name"
        register={register}
        name="firstName"
        error={errors?.firstName?.message}
      />
      <Input
        type="test"
        placeHolder="Last name"
        register={register}
        name="lastName"
        error={errors?.lastName?.message}
      />
      <Input
        type="text"
        placeHolder=" Email"
        register={register}
        name="email"
        error={errors?.email?.message}
      />
      <Input
        type="tel"
        placeHolder=" phone number"
        register={register}
        name="phone"
        error={errors?.phone?.message}
      />

      <div className="">
        <textarea
          name="msg"
          id=""
          cols="30"
          rows="10"
          placeholder="Message..."
          {...register("msg")}
          className="h-full w-full bg-transparent pl-3 bg-transparent border-b-[1px] border-gold outline-none placeholder:text-gold placeholder:text-opacity-60 overflow-y-auto"
        ></textarea>
        {errors?.msg?.message && (
          <p className="text-red-500 mt-1">{errors?.msg?.message}</p>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button className="uppercase tracking-wide text-xl hover:opacity-80 italic rounded-xl border py-2 px-5 border-gold hover:scale-110 transition-all duration-300 ease-in">
          {isSubmitting ? "LOADING..." : "SEND MESSAGE"}
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-center mt-5">
          {" "}
          Failed to send message please try again ....{" "}
        </p>
      )}

      {succeeded && (
        <p className="text-center text-green-600 mt-5">
          {" "}
          message sent successfully..
        </p>
      )}
    </form>
  );
};

export default Form;
