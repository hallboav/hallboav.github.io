import type { FC } from 'react';
import dayjs from 'dayjs';
import PeriodTypography from './PeriodTypography';
import { Language } from '@/cv';
import { useLang } from '@/lib/LanguageProvider';

export type PeriodEducationProps = {
  startedAt: string;
  finishedAt: string;
};

const PeriodEducation: FC<PeriodEducationProps> = ({
  startedAt,
  finishedAt,
}) => {
  const lang = useLang();

  const untilText = (() =>
    ({
      [Language.ptBr]: 'até',
      [Language.enUs]: 'until',
    }[lang]))();

  const formatted = dayjs(startedAt)
    .format(`YYYY [${untilText}] `)
    .concat(dayjs(finishedAt).format('YYYY'));

  return <PeriodTypography>{formatted}</PeriodTypography>;
};

export default PeriodEducation;
