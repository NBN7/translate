import { useTranslateContext } from "../context/translate-context";
import { useLanguageSelectorContext } from "../context/language-selector-context";

import { LanguagePadBox } from "./language-pad-box";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { LANGUAGE_TYPE } from "../constants/languageType";

export const LanguagePad = () => {
  const {
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    setLanguageType,
  } = useTranslateContext();

  const { setIsOpen } = useLanguageSelectorContext();

  const switchLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleSourceClick = () => {
    setIsOpen(true);
    setLanguageType(LANGUAGE_TYPE.SOURCE);
  };
  const handleTargetClick = () => {
    setIsOpen(true);
    setLanguageType(LANGUAGE_TYPE.TARGET);
  };

  return (
    <section className="flex w-full items-center justify-around">
      <LanguagePadBox
        handleClick={handleSourceClick}
        language={sourceLanguage}
      />

      <HiOutlineSwitchHorizontal
        className="cursor-pointer w-full"
        onClick={switchLanguages}
        size="17px"
      />

      <LanguagePadBox
        handleClick={handleTargetClick}
        language={targetLanguage}
      />
    </section>
  );
};
