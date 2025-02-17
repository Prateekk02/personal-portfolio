import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#070F2B] text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Personal Note */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              Built with 💻 and ☕ by{" "}
              <span className="text-gray-100 font-semibold">
                Prateek Kumar
              </span>
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <a
              href="https://github.com/codeWalker66"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prateekk02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/codeWalker66"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LeetCode
            </a>
            <a
              href="https://kaggle.com/Prateekk0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Kaggle
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Prateek Kumar. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
