import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#111111] text-white border border-t-[#27272A] border-b-0 border-l-0 border-r-0 py-8  pb-0 px-0">
      <div className="flex items-center justify-center flex-col ">
        <Link to={"/"} className="text-3xl  font-revamped ">
          GV
        </Link>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <span className="text-sm">Country/Region: Philippines</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 px-4 md:px-12 ">
        <div className="flex flex-col gap-3 text-sm">
          <span>Support</span>
          <span>Privacy Policy</span>
          <span>Do Not Share My Personal Information</span>
          <span>Website Terms of Use</span>
          <span>Sitemap</span>
          <span>Playstation Studios</span>
          <span>Legal</span>
          <span>About GV</span>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span>GV Terms of Service</span>
          <span>GV Store Cancellation Policy</span>
          <span>Health Warnings</span>
          <span>About Ratings</span>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Youtube</span>
          <span>Instagram</span>
          <span>Android App</span>
          <span>iOS App</span>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-3 mt-16 px-4 md:px-12 ">
        <img
          src="/images/privacy.svg"
          alt="privacy"
          className="w-[40px] object-cover"
          loading="lazy"
        />
        <h2 className="text-center text-sm">
          © {currentYear} Gameverse Interactive Entertainment LLC
        </h2>
      </div>

      <div className="bg-[#F9F9F9] text-black mt-8  py-1 px-2 md:px-4">
        <h1 className="text-right font-revamped tracking-widest">Gameverse</h1>
      </div>
    </div>
  );
};

export default Footer;
