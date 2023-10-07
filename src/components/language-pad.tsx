import { useCallback } from "react";

import { useTranslateContext } from "../context/translate-context";
import { useLanguageSelectorContext } from "../context/language-selector-context";

import { LanguagePadBox } from "./language-pad-box";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { LANGUAGE_TYPE } from "../constants/languageType";

import { iconStyle } from "../styles/iconStyle";

export const LanguagePad = () => {
  const {
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    setLanguageType,
    text,
    setText,
    translatedText,
    setTranslatedText,
  } = useTranslateContext();

  const { setIsOpen } = useLanguageSelectorContext();

  const switchLanguages = useCallback(() => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);

    setText(translatedText);
    setTranslatedText(text);
  }, [text, translatedText, targetLanguage, sourceLanguage]);

  const handleSourceClick = useCallback(() => {
    setIsOpen(true);
    setLanguageType(LANGUAGE_TYPE.SOURCE);
  }, []);

  const handleTargetClick = useCallback(() => {
    setIsOpen(true);
    setLanguageType(LANGUAGE_TYPE.TARGET);
  }, []);

  return (
    <section className="flex w-full items-center justify-around">
      <LanguagePadBox
        handleClick={handleSourceClick}
        language={sourceLanguage}
      />

      <div className="w-full p-4" onClick={switchLanguages}>
        <HiOutlineSwitchHorizontal
          className={`${iconStyle} w-full`}
          size="20px"
        />
      </div>

      <LanguagePadBox
        handleClick={handleTargetClick}
        language={targetLanguage}
      />
    </section>
  );
};
