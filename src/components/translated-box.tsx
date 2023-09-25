import { motion, AnimatePresence } from "framer-motion";

import { useTranslateContext } from "../context/translate-context";

export const TranslatedBox = () => {
  const { translatedText } = useTranslateContext();
  return (
    <AnimatePresence>
      {translatedText && (
        <motion.section
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="p-4 mt-4"
        >
          <h2 className="text-blue-600">{translatedText}</h2>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
