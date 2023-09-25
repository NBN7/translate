import { useTranslateContext } from "../context/translate-context";

export const TranslatedBox = () => {
  const { translatedText } = useTranslateContext();
  return (
    <>
      {translatedText && (
        <section className="p-4 mt-4">
          <h2 className="text-blue-600">{translatedText}</h2>
        </section>
      )}
    </>
  );
};
