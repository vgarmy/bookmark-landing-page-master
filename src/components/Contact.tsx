import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      console.log("Submitted email:", email);
      setEmail(""); // reset input
    }
  };

  return (
    <section className="flex flex-col gap-8 py-[75px] bg-[var(--Blue-600)]">
      <div className="text-center w-4/5 md:w-1/3 mx-auto flex flex-col gap-8">
        <p className="text-xs uppercase text-white">35,000+ already joined</p>
        <p className="text-3xl text-white">Stay up-to-date with what we’re doing</p>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-[5] px-4 py-2 rounded border bg-white border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            <button
              type="submit"
              className="text-xs flex-[2] border bg-[var(--Red-400)] hover:bg-white hover:text-[var(--Red-400)] text-white px-6 py-2 rounded cursor-pointer hover:border-1 border-[var(--Red-400)]"
            >
              Contact Us
            </button>
          </div>
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
