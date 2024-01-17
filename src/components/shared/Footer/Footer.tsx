import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="grid justify-center items-center grid-cols-2 lg:grid-cols-3 gap-6 p-10 mx-auto text-neutral-content bg-gradient-to-r from-band-primary to-band-ternery xl:px-8 px-4 sm:px-2 rounded-t-2xl">
        <div className="flex flex-col items-center">
          <span className="footer-title">Services</span>
          <Link
            href="/"
            className="link link-hover"
          >
            Branding
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Design
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Marketing
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Advertisement
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <span className="footer-title">Company</span>
          <Link
            href="/"
            className="link link-hover"
          >
            About us
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Jobs
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Press kit
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <span className="footer-title">Legal</span>
          <Link
            href="/"
            className="link link-hover"
          >
            Terms of use
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Privacy policy
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Cookie policy
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <span className="footer-title">Social</span>
          <Link
            href="/"
            className="link link-hover"
          >
            Twitter
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Instagram
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Facebook
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Github
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <span className="footer-title">Explore</span>
          <Link
            href="/"
            className="link link-hover"
          >
            Features
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Enterprise
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Security
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Pricing
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <span className="footer-title">Apps</span>
          <Link
            href="/"
            className="link link-hover"
          >
            Mac
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Windows
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            iPhone
          </Link>
          <Link
            href="/"
            className="link link-hover"
          >
            Android
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
