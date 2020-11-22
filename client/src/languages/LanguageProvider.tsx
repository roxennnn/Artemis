import React, {
  useState,
  createContext,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { FixMeLater } from '../constants/Utilities';

export interface ContextType {
  language: string;
  strings: FixMeLater;
  updateLanguage: FixMeLater;
}

export const LanguageContext = createContext<ContextType>({
  language: 'es',
  strings: {},
  updateLanguage: () => {},
});

type Props = { children: FixMeLater; fetchTranslations: FixMeLater };

export const LanguageProvider = (props: Props) => {
  const [{ language, strings }, setLanguage] = useState({
    language: 'es',
    strings: {},
  });
  const initialStringsLoaded = useRef(false);

  const updateLanguage = useCallback(
    async (newLang) => {
      if (initialStringsLoaded.current && newLang === language) return;
      const newStrings = await props.fetchTranslations({ language: newLang });
      initialStringsLoaded.current = true;
      setLanguage({
        language: newLang,
        strings: newStrings,
      });
    },
    [language, props.fetchTranslations]
  );

  useEffect(() => {
    updateLanguage(language);
  }, [language, updateLanguage]);

  const context: ContextType = {
    language,
    strings,
    updateLanguage: updateLanguage,
  };

  return (
    <LanguageContext.Provider value={context}>
      {props.children}
    </LanguageContext.Provider>
  );
};
