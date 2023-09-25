type LanguageBoxProps = {
  handleClick: () => void;
  language: string;
};

export const LanguagePadBox = ({ handleClick, language }: LanguageBoxProps) => {
  return (
    <div
      onClick={handleClick}
      className="flex justify-center w-full p-4 cursor-pointer"
    >
      <h2 className="text-blue-600">{language}</h2>
    </div>
  );
};
