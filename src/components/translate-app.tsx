import { lazy, Suspense } from "react";

import { TranslateContextProvider } from "../context/translate-context";
import { LanguageSelectorContextProvider } from "../context/language-selector-context";

import { LanguagePad } from "./language-pad";
import { TranslateBox } from "./translate-box";
import { TranslatedBox } from "./translated-box";
const LanguageSelector = lazy(() => import("./language-selector"));

export const TranslateApp = () => {
  return (
    <main className="dark flex justify-center w-full h-screen p-4 overflow-hidden">
      <TranslateContextProvider>
        <LanguageSelectorContextProvider>
          <div className="md:w-[400px] w-full">
            <LanguagePad />
            <TranslateBox />
            <TranslatedBox />
          </div>

          <Suspense>
            <LanguageSelector />
          </Suspense>
        </LanguageSelectorContextProvider>
      </TranslateContextProvider>
    </main>
  );
};
