export const translateText = async (
  text: string,
  targetLanguage: string,
  sourceLanguage: string,
  setTranslatedText: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: text,
      target: targetLanguage,
      source: sourceLanguage,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    setTranslatedText(data.data.translations[0].translatedText.toLowerCase());
  } catch (error) {
    console.error(error);
  }
};
