import { ChangeEvent, useState, useEffect, memo } from "react";
import { useTranslateContext } from "../context/translate-context";

import { Textarea } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";

import { translateText } from "../utils/translateText";

export const TranslateBox = memo(() => {
  const { sourceLanguage, targetLanguage, text, setText, setTranslatedText } =
    useTranslateContext();

  const [wordCounter, setWordCounter] = useState(0);

  useEffect(() => {
    if (text?.length === 0) {
      setTranslatedText(null);
    }
  }, [text]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWordCounter(e.target.value.length);
    setText(e.target.value);
  };

  const handleClick = () => {
    translateText(
      text ? text : "",
      targetLanguage,
      sourceLanguage,
      setTranslatedText
    );
  };

  const handleReset = () => {
    setText("");
    setWordCounter(0);
    setTranslatedText(null);
  };

  return (
    <>
      <section className="p-4 bg-[#27272A] rounded-md">
        <div className="flex gap-4 items-center">
          <Textarea
            autoCorrect="off"
            autoComplete="off"
            autoFocus={false}
            minRows={1}
            placeholder="type to translate"
            onChange={handleChange}
            type="text"
            maxLength={5000}
            value={text ? text : ""}
          />
          <IoClose
            size="20px"
            onClick={handleReset}
            className="cursor-pointer"
          />
        </div>

        <div className="flex justify-end text-sm text-[#A1A1AA]">
          <p>{wordCounter}/5000</p>
        </div>
      </section>

      <div className="flex w-full items-center justify-center mt-4">
        <button
          onClick={handleClick}
          className="w-full p-4 bg-[#27272A] rounded-md hover:text-blue-600"
        >
          translate
        </button>
      </div>
    </>
  );
});
