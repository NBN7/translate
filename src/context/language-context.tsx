import { createContext, useContext, useState } from "react";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContext = {
  sourceLanguage: string;
  setSourceLanguage: React.Dispatch<React.SetStateAction<string>>;

  targetLanguage: string;
  setTargetLanguage: React.Dispatch<React.SetStateAction<string>>;

  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;

  translatedText: string | null;
  setTranslatedText: React.Dispatch<React.SetStateAction<string | null>>;
};
const LanguageContext = createContext<LanguageContext | null>(null);

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [sourceLanguage, setSourceLanguage] = useState<string>("en");
  const [targetLanguage, setTargetLanguage] = useState<string>("es");

  const [text, setText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string | null>(null);

  return (
    <LanguageContext.Provider
      value={{
        sourceLanguage,
        setSourceLanguage,
        targetLanguage,
        setTargetLanguage,
        text,
        setText,
        translatedText,
        setTranslatedText,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageContextProvider"
    );
  }
  return context;
};
