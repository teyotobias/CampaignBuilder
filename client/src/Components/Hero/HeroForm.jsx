import React from "react";
import { useForm } from "react-hook-form";
import HeroFormButton from "./HeroFormButton";

export default function HeroForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzt0ukh_caePkYx3A5ntGRy3vEGj-XioCovAqWcWb-ldaj56Yoe0NESUcaOIz03YbZx/exec",
        {
          method: "POST",
          mode: "no-cors", // This is necessary if CORS isn't enabled on the server
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Form submitted successfully");
      alert("Form submitted successfully"); // Alert if needed
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit the form");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register("email", {
          required: "Email is required",
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        })}
        placeholder="Email"
        className={`p-2 bg-transparent border-2  ${
          errors.email ? "border-red-500" : "border-white"
        } text-white placeholder-white w-3/4`}
      />
      <div className="flex flex-col sm:flex-row justify-start gap-2">
        <input
          {...register("phone", { required: "Phone number is required" })}
          placeholder="Phone"
          className={`p-2 bg-transparent border-2 ${
            errors.phone ? "border-red-500" : "border-white"
          } text-white placeholder-white w-3/8`}
        />
        <input
          {...register("zip", { required: "ZIP code is required" })}
          placeholder="ZIP"
          className={`p-2 bg-transparent border-2 ${
            errors.zip ? "border-red-500" : "border-white"
          } text-white placeholder-white w-3/8`}
        />
      </div>
      <HeroFormButton />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
    </form>
  );
}
