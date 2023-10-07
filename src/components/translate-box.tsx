import { ChangeEvent, useState, useEffect, memo, useCallback } from "react";
import { useTranslateContext } from "../context/translate-context";

import { Textarea, Button } from "@nextui-org/react";
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

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setWordCounter(e.target.value.length);
    setText(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    translateText(
      text ? text : "",
      targetLanguage,
      sourceLanguage,
      setTranslatedText
    );
  }, [text]);

  const handleReset = useCallback(() => {
    setText(null);
    setTranslatedText(null);
    setWordCounter(0);
  }, []);

  return (
    <>
      <section className="p-4 bg-[#27272A] rounded-xl">
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
        <Button
          size="lg"
          variant="light"
          color="primary"
          className="w-full"
          onClick={handleClick}
        >
          Translate
        </Button>
      </div>
    </>
  );
});
