import { createContext, useContext } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Language } from '@/cv';

const LanguageContext = createContext(Language.ptBr);

const LanguageProvider: FC<PropsWithChildren<{ lang: Language }>> = ({
  lang,
  ...props
}) => <LanguageContext.Provider value={lang} {...props} />;

export const useLang = () => useContext(LanguageContext);

export default LanguageProvider;
