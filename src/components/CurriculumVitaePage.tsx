'use client';

import { Open_Sans, Fira_Mono } from 'next/font/google';
import { FC, useEffect } from 'react';
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  Stack,
  ThemeProvider,
} from '@mui/material';
import getTextDecoration from '@mui/material/Link/getTextDecoration';
import type { StackProps, Theme } from '@mui/material';
import {
  Intro,
  Experience,
  Certifications,
  Education,
  Contact,
  Techs,
} from '@/components';
import type { CurriculumVitae } from '@/cv';
import { Language } from '@/cv';
import LanguageProvider from '@/lib/LanguageProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/en';

const Bookmark: FC<StackProps> = (props) => <Stack {...props} />;

const Content: FC<StackProps> = (props) => <Stack {...props} />;

const globalStyles = {
  body: {
    margin: '0 auto',
    width: '210mm',
    height: '297mm',
  },
  '@media print': {
    body: { width: 'initial', height: 'initial' },
  },
};

const LAYOUT_SPACING = 2;

const openSans400 = Open_Sans({ subsets: ['latin'], weight: '400' });
const openSans600 = Open_Sans({ subsets: ['latin'], weight: '600' });
const firaMono400 = Fira_Mono({ subsets: ['latin'], weight: '400' });

const themeOptions = {
  typography: {
    fontFamily: openSans400.style.fontFamily,
    fontSize: 10,
    h1: {
      fontFamily: openSans600.style.fontFamily,
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontFamily: openSans600.style.fontFamily,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.text.primary,
          textDecorationColor: getTextDecoration({
            theme,
            ownerState: { color: theme.palette.text.primary },
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: { marginBottom: 8 },
      },
    },
  },
};

const CurriculumVitaePage: FC<{ cv: CurriculumVitae }> = ({ cv }) => {
  const theme = createTheme(themeOptions);

  const margins = {
    ml: 3,
    mt: 3,
    mr: 2.5,
    mb: 2.5,
  };

  const highlighted = [
    'aws',
    'docker',
    'gitlab',
    'java',
    'kubernetes',
    'linux',
    'next.js',
    'node.js',
    'php',
    'react.js',
    'redux',
    'shell script',
    'symfony',
    'typescript',
  ];

  const MAX_EXPERIENCE_ITEMS = 4;

  const lang = Language.enUs;
  dayjs.locale('en-us');

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <LanguageProvider lang={lang}>
        <ThemeProvider theme={theme}>
          <Stack
            {...margins}
            spacing={LAYOUT_SPACING}
            direction="row"
            height="100%"
          >
            <Content height="100%" spacing={0.5}>
              <Intro name={cv.name} role={cv.role} intro={cv.intro} />
              <Experience
                experiences={cv.experiences}
                maxItems={MAX_EXPERIENCE_ITEMS}
              />
              <Certifications certifications={cv.certifications} />
              <Education education={cv.education} />
            </Content>

            <Bookmark width="33%" spacing={1.5}>
              <Contact
                contacts={cv.contacts}
                fontFamily={firaMono400.style.fontFamily}
              />
              <Techs techs={cv.techs} highlighted={highlighted} />
            </Bookmark>
          </Stack>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
};

export default CurriculumVitaePage;
