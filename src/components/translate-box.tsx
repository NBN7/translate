import { ChangeEvent, useState, memo } from "react";
import { useTranslateContext } from "../context/translate-context";

import { Textarea } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";

import { translateText } from "../utils/translateText";

export const TranslateBox = memo(() => {
  const { sourceLanguage, targetLanguage, text, setText, setTranslatedText } =
    useTranslateContext();

  const [wordCounter, setWordCounter] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWordCounter(e.target.value.length);
    setText(e.target.value);
  };

  const handleReset = () => {
    setText("");
    setWordCounter(0);
  };

  return (
    <>
      <section className="p-4 bg-[#27272A] rounded-md">
        <div className="flex gap-4 items-center">
          <Textarea
            autoCorrect="off"
            autoComplete="off"
            minRows={1}
            placeholder="type to translate"
            onChange={handleChange}
            type="text"
            maxLength={5000}
            value={text}
          />
          <IoClose size="20px" onClick={handleReset} className="cursor-pointer" />
        </div>

        <div className="flex justify-end text-sm text-[#A1A1AA]">
          <p>{wordCounter}/5000</p>
        </div>
      </section>

      <button
        onClick={() =>
          translateText(text, targetLanguage, sourceLanguage, setTranslatedText)
        }
        className="w-full p-4 mt-2 rounded-xl"
      >
        translate
      </button>
    </>
  );
});
