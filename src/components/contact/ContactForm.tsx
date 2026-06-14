import { useForm } from "react-hook-form";

type ContactInputs = {
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInputs>();

  const onSubmit = (data: ContactInputs) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary flex flex-col space-y-4 w-full mx-auto p-6 lg:p-8 rounded-xl shadow-2xl xl:max-w-120 2xl:max-w-140"
    >
      <div>
        <label
          style={{ fontFamily: "DM Sans Serif Display" }}
          className="block text-primary mb-2 font-bold"
        >
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          placeholder="email"
          className="w-full p-4 rounded bg-[#EDEAD9] outline outline-[#A4A294] text-xs"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          style={{ fontFamily: "DM Sans Serif Display" }}
          className="block text-primary  mb-2 font-bold"
        >
          Subject:
        </label>
        <input
          type="text"
          {...register("subject", { required: "Subject is required" })}
          placeholder="subject"
          className="w-full p-4 rounded bg-[#EDEAD9] outline outline-[#A4A294] text-xs"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label
          style={{ fontFamily: "DM Sans Serif Display" }}
          className="block text-primary mb-2 font-bold"
        >
          Message:
        </label>
        <textarea
          {...register("message", { required: "Message cannot be empty" })}
          rows={4}
          placeholder="Enter your message here..."
          className="w-full p-4 rounded bg-[#EDEAD9] outline outline-[#A4A294] text-xs"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary text-white text-xs p-4 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
