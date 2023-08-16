import type { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import type { CurriculumVitae } from '@/cv';
import { parseHtml } from '@/lib';
import { useLang } from '@/lib/LanguageProvider';

export type IntroProps = Pick<CurriculumVitae, 'name' | 'role' | 'intro'>;

const Intro: FC<IntroProps> = ({ name, role, intro }) => {
  const lang = useLang();

  return (
    <Stack spacing={1}>
      <Stack spacing={1} direction="row" alignItems="center">
        <Typography variant="h1">{name}</Typography>
        <Typography variant="body1">{role[lang]}</Typography>
      </Stack>
      <div>{parseHtml(intro[lang])}</div>
    </Stack>
  );
};

export default Intro;
