import { useLanguageContext } from "../context/language-context";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

export const LanguageSelector = () => {
  const {
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
  } = useLanguageContext();

  const switchLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleSourceClick = () => {};

  const handleTargetClick = () => {};

  return (
    <section className="flex w-full items-center justify-around p-4">
      <h2 className="text-blue-600" onClick={handleSourceClick}>
        {sourceLanguage}
      </h2>

      <HiOutlineSwitchHorizontal onClick={switchLanguages} size="17px" />

      <h2 className="text-blue-600" onClick={handleTargetClick}>
        {targetLanguage}
      </h2>
    </section>
  );
};
