import { NextUIProvider } from "@nextui-org/react";
import { TranslateApp } from "./components/translate-app";

function App() {
  return (
    <NextUIProvider>
      <TranslateApp />
    </NextUIProvider>
  );
}

export default App;
