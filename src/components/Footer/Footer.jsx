import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import NavbarLogo from "../Navbar/NavbarLogo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-6 p-4 md:p-8 mt-16 bg-color-dark-1/50 rounded-lg">
      <div className="flex-1">
        <NavbarLogo />
        <p className="mt-4 leading-relaxed text-color-dark-3">
          Cinemagix is a film catalog website that offers access to millions of
          movies for discovery. Users can search for and add films to their
          favorites. This project was developed using React.js and utilizes the{" "}
          <Link
            target="_blank"
            className="hover:underline text-color-primary"
            to="https://developer.themoviedb.org/reference/intro/getting-started"
          >
            TMDB API
          </Link>{" "}
          for movie data.
        </p>
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-bold py-1">About Developer</h2>
        <p className="text-color-dark-3 md:mt-4 mt-1 leading-relaxed">
          This website was developed by{" "}
          <Link
            to="https://www.linkedin.com/in/dedek-tegar-apriyandi-9b8997269/"
            target="_blank"
            className="hover:underline text-color-primary"
          >
            Dedek Tegar Apriyandi
          </Link>
          , a web development enthusiast who has a passion for learning new
          things.
        </p>
        <div className="flex gap-2 mt-3">
          <Link
            to="https://instagram.com/dedektegar"
            target="_blank"
            className="inline-block border rounded-full p-2 transition hover:bg-color-primary hover:border-color-primary"
          >
            <InstagramLogo size={20} weight="fill" className="" />
          </Link>
          <Link
            to="https://github.com/dedektegarr/cinemagix"
            target="_blank"
            className="inline-block border rounded-full p-2 transition hover:bg-color-primary hover:border-color-primary"
          >
            <GithubLogo size={20} weight="fill" className="" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/dedek-tegar-apriyandi-9b8997269/"
            target="_blank"
            className="inline-block border rounded-full p-2 transition hover:bg-color-primary hover:border-color-primary"
          >
            <LinkedinLogo size={20} weight="fill" className="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
