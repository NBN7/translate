import { createContext, useContext, useState, useEffect } from "react";
import { fetchLanguages } from "../utils/fetchLanguages";

type LanguageSelectorContextProviderProps = {
  children: React.ReactNode;
};

type LanguageSelectorContext = {
  languages: { language: string }[];

  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LanguageSelectorContext = createContext<LanguageSelectorContext | null>(
  null
);

export const LanguageSelectorContextProvider = ({
  children,
}: LanguageSelectorContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [languages, setLanguages] = useState([{ language: "" }]);

  useEffect(() => {
    const getLanguages = async () => {
      const response = await fetchLanguages();
      const data = response.data.languages;
      data.forEach((language: any) =>
        setLanguages((prev) => [...prev, { language: language.language }])
      );
    };
    getLanguages();
  }, []);

  return (
    <LanguageSelectorContext.Provider value={{ isOpen, setIsOpen, languages }}>
      {children}
    </LanguageSelectorContext.Provider>
  );
};

export const useLanguageSelectorContext = () => {
  const context = useContext(LanguageSelectorContext);
  if (!context) {
    throw new Error(
      "useLanguageSelectorContext must be used within a LanguageSelectorContextProvider"
    );
  }
  return context;
};
