import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState("");

  const validateEmail = (email: string) => {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Whoops, make sure it's an email");
    } else if (!validateEmail(email)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
      setSent("Submitted email:" + email);
      setEmail(""); // reset input
    }
  };

  return (
    <section className="flex flex-col gap-8 py-[75px] bg-[var(--Blue-600)]">
      <div className="text-center w-4/5 md:w-1/3 mx-auto flex flex-col gap-8">
        <p className="text-xs uppercase text-white">35,000+ already joined</p>
        <p className="text-3xl text-white">Stay up-to-date with what we’re doing</p>

        <form className="w-full" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col md:flex-row gap-2 relative">
            <div className="flex-[5] relative">
              <input
                type="text"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 rounded placeholder:text-xs bg-white placeholder-gray-300 focus:outline-none
        ${error
                    ? "border-2 border-red-500"
                    : "border-2 border-white focus:ring-2 focus:ring-blue-400"}`}
              />
              {error && (
                <>
                  <span className="absolute left-0 right-0 -bottom-[30px] h-[30px] bg-red-500 rounded-b"></span>
                  <p className="absolute left-2 -bottom-[26px] text-white italic text-xs">{error}</p>
                </>
              )}
               {sent && (
                <>
                  <p className="absolute left-2 -bottom-[26px] text-white italic text-xs">{sent}</p>
                </>
              )}
            </div>

            <button
              type="submit"
              className="text-xs flex-[2] border bg-[var(--Red-400)] hover:bg-white hover:text-[var(--Red-400)] text-white px-6 py-2 rounded cursor-pointer border-[var(--Red-400)]"
            >
              Contact Us
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;
