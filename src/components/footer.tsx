import { BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-[150px] border-t-2 border-[#27272A] p-6 gap-4">
      <span>©2023 Ignacio Biran All rights reserved</span>
      <div className="flex gap-4">
        <a
          className="hover:text-blue-600 transition-all duration-200"
          href="https://ar.linkedin.com/in/ignacio-biran-893113257"
        >
          <BiLogoLinkedinSquare size="25px" />
        </a>
        <a
          className="hover:text-gray-500 transition-all duration-200"
          href="https://github.com/NBN7"
        >
          <BiLogoGithub size="25px" />
        </a>
      </div>
    </footer>
  );
};
