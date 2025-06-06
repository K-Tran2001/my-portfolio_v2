import { useState } from "react";

const languages = [
  {
    code: "vi",
    label: "Tiếng Việt",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
  },
  {
    code: "en",
    label: "English",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
];

const Select = ({ lang, callback }) => {
  const [selectedLang, setSelectedLang] = useState(lang || "vi");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code) => {
    setSelectedLang(code);
    callback(code);
    setIsOpen(false);
  };

  return (
    <div className="p-4 flex flex-col gap-4  max-w-[200px] ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="select-button flex gap-2 items-center border border-gray-400 rounded-md p-2"
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
        <ul className="select-dropdown">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex gap-2 p-2"
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
