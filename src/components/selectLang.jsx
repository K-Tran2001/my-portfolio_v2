import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";

const languages = [
  {
    code: "vi",
    label: "VN",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
  },
  {
    code: "en",
    label: "EN",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
];

const Select = ({ lang, callback }) => {
  const context = useContext(MainContext);
  const { languagePage } = context;
  const [selectedLang, setSelectedLang] = useState(languagePage);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code) => {
    setSelectedLang(code);
    callback(code);
    localStorage.setItem("@lang", code);
    setIsOpen(false);
  };

  return (
    <div className="relative p-4 flex flex-col gap-4  max-w-[200px] ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="select-button flex gap-2 items-center bg-[var(--body-color)] border border-gray-200 rounded-md p-2 h-11 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      >
        <div className="flex gap-2">
          <img
            src={languages.find((l) => l.code === selectedLang).flag}
            alt={selectedLang}
            className="flag-icon w-[20px] h-[20px]"
          />
          {languages.find((l) => l.code === selectedLang).label}
        </div>
        <span className="dropdown-icon">▼</span>
      </button>
      {isOpen && (
        <ul className="select-dropdown dark:bg-gray-700 bg-gray-300 rounded-sm -mt-6 pt-2 ">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                handleSelect(lang.code);
              }}
              className="flex gap-2 p-2 dark:border-gray-800 dark:text-gray-400"
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="flag-icon w-[20px] h-[20px]"
              />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
