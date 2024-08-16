import { NavLink } from "react-router-dom";

const Footer = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <footer className="py-16 bg-veryDarkBlue">
      <div className="container mx-auto text-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-row gap-4 justify-center">
            <NavLink to={"/"} className="uppercase hover:text-softBlue">
              Privacy Policy
            </NavLink>
            <NavLink to={"/"} className="uppercase hover:text-softBlue">
              Sitemap
            </NavLink>
            <NavLink to={"/"} className="uppercase hover:text-softBlue">
              Contact
            </NavLink>
            <NavLink to={"/"} className="uppercase hover:text-softBlue">
              Terms of Use
            </NavLink>
            <NavLink to={"/"} className="uppercase hover:text-softBlue">
              Faq
            </NavLink>
          </div>

          <div className="flex flex-col justify-end items-center lg:justify-end lg:items-end text-gray-400">
            <p>
              Planning and Implementation: Cabinet Division, a2i, BCC, DOICT,
              BASIS.
            </p>
            <div className="flex justify-center items-center gap-4">
              <p>Technical Support: </p>

              <img
                src="https://moi.gov.bd/themes/responsive_npf/img/np-logo-set.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="text-sm my-4 text-gray-300">
          <p className="text-center lg:text-end">
            Site Was last updated: <span>{today}</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
