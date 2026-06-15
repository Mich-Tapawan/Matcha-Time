import ContactForm from "../components/contact/ContactForm";
import contactBg from "../assets/contact-bg.jpg";

export default function Contact() {
  return (
    <div
      className="w-screen min-h-screen pt-16 grid bg-cover bg-center bg-no-repeat px-4 place-content-center justify-center align-middle gap-12 lg:px-12 lg:gap-10 xl:grid-cols-2 xl:px-20 2xl:px-32 2xl:gap-16"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div style={{ color: "white" }} className="space-y-5 max-w-163">
        <h1 className="text-shadow-lg">What can we do?</h1>
        <p style={{ lineHeight: "2rem" }} className="text-shadow-lg ">
          Whether you have a question about our ceremonial menu, want to know
          more about our sourcing from Uji, or simply want to share your
          teahouse experience, we’d love to hear from you. Drop us a line below,
          and our team will get back to you within 24 hours over a warm cup of
          tea.
        </p>

        <div className="flex w-full justify-between gap-10 text-shadow-lg">
          <span className="h-0.5 w-full bg-secondary place-self-center shadow-lg"></span>
          <p
            style={{ color: "white" }}
            className="place-self-center text-center font-bold"
          >
            OR
          </p>
          <span className="h-0.5 w-full bg-secondary place-self-center shadow-lg"></span>
        </div>

        <div
          style={{ color: "white", lineHeight: "5px" }}
          className="grid grid-cols-2 gap-3 text-shadow-lg"
        >
          <p className="font-bold">Get In Touch:</p>
          <p>555-0199</p>
          <p>matchatime@gmail.com</p>
          <p>+1 212-555-0143</p>
        </div>
      </div>

      <div className="w-full">
        <ContactForm />
      </div>
    </div>
  );
}
