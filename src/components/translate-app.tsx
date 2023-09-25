import { LanguageContextProvider } from "../context/language-context";

import { LanguageSelector } from "./language-selector";
import { TranslateBox } from "./translate-box";
import { TranslatedBox } from "./translated-box";

export const TranslateApp = () => {
  return (
    <main className="md:flex md:flex-col md:items-center w-full h-screen p-4 dark overflow-hidden">
      <div className="md:w-[400px]">
        <LanguageContextProvider>
          <LanguageSelector />
          <TranslateBox />
          <TranslatedBox />
        </LanguageContextProvider>
      </div>
    </main>
  );
};
