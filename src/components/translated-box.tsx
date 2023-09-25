import { useLanguageContext } from "../context/language-context";

export const TranslatedBox = () => {
  const { translatedText } = useLanguageContext();
  return (
    <section className="p-4 mt-4">
      {translatedText && <h2 className="text-blue-600">{translatedText}</h2>}
    </section>
  );
};
