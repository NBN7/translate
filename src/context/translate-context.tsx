import { createContext, useContext, useState } from "react";
import { LANGUAGE_TYPE } from "../constants/languageType";

type TranslateContextProviderProps = {
  children: React.ReactNode;
};

type LanguageType = typeof LANGUAGE_TYPE.SOURCE | typeof LANGUAGE_TYPE.TARGET;

type TranslateContext = {
  sourceLanguage: string;
  setSourceLanguage: React.Dispatch<React.SetStateAction<string>>;

  targetLanguage: string;
  setTargetLanguage: React.Dispatch<React.SetStateAction<string>>;

  text: string | null;
  setText: React.Dispatch<React.SetStateAction<string | null>>;

  translatedText: string | null;
  setTranslatedText: React.Dispatch<React.SetStateAction<string | null>>;

  languageType: LanguageType;
  setLanguageType: React.Dispatch<React.SetStateAction<LanguageType>>;
};

const TranslateContext = createContext<TranslateContext | null>(null);

export const TranslateContextProvider = ({
  children,
}: TranslateContextProviderProps) => {
  const [sourceLanguage, setSourceLanguage] = useState<string>("en");
  const [targetLanguage, setTargetLanguage] = useState<string>("es");

  const [text, setText] = useState<string | null>(null);
  const [translatedText, setTranslatedText] = useState<string | null>(null);

  const [languageType, setLanguageType] = useState<LanguageType>(
    LANGUAGE_TYPE.SOURCE
  );

  return (
    <TranslateContext.Provider
      value={{
        sourceLanguage,
        setSourceLanguage,
        targetLanguage,
        setTargetLanguage,
        text,
        setText,
        translatedText,
        setTranslatedText,
        languageType,
        setLanguageType,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslateContext = () => {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageContextProvider"
    );
  }
  return context;
};
