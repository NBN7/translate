import { memo } from "react";

import { useTranslateContext } from "../context/translate-context";
import { useLanguageSelectorContext } from "../context/language-selector-context";

import { LANGUAGE_TYPE } from "../constants/languageType";
import { ChangeEvent } from "react";

import { IoClose } from "react-icons/io5";

const LanguageSelector = memo(() => {
  const { setSourceLanguage, setTargetLanguage, languageType } =
    useTranslateContext();
  const { isOpen, setIsOpen, languages } = useLanguageSelectorContext();

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsOpen(false);
    if (languageType === LANGUAGE_TYPE.SOURCE) {
      setSourceLanguage(e.target.value);
      return;
    }
    setTargetLanguage(e.target.value);
  };

  return (
    <>
      {isOpen && (
        <section className="absolute backdrop-blur-sm w-full md:w-[400px] h-screen flex items-center justify-center z-40 p-4">
          <div className="flex flex-col p-4 bg-[#27272A] rounded-md w-[300px] h-[300px] z-50">
            <div className="flex w-full justify-end">
              <IoClose
                className="cursor-pointer"
                onClick={handleCloseClick}
                size="20px"
              />
            </div>

            <div className="w-full h-full flex items-center">
              <select
                onChange={handleSelectChange}
                className="outline-none appearance-none w-full p-4 rounded-md"
              >
                <option defaultValue="">Select Language</option>
                {languages.map((language, index) => (
                  <option key={index} value={language.language}>
                    {language.language}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
      )}
    </>
  );
});

export default LanguageSelector;
