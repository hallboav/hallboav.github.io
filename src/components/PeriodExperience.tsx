import type { FC } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { parseHtml } from '@/lib';
import PeriodTypography from './PeriodTypography';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export type PeriodExperienceProps = {
  startedAt: string;
  finishedAt?: string;
};

const PeriodExperience: FC<PeriodExperienceProps> = ({
  startedAt: startedAtStr,
  finishedAt: finishedAtStr,
}) => {
  const startedAt = dayjs(startedAtStr);
  const finishedAt = dayjs(finishedAtStr);

  const formatted = ''
    .concat(startedAt.format('MMM[/]YY [until] '))
    .concat(finishedAt.format('MMM[/]YY'))
    .concat('<br /><em>(~')
    .concat(dayjs.duration(finishedAt.diff(startedAt)).humanize())
    .concat(')</em>');

  return <PeriodTypography>{parseHtml(formatted)}</PeriodTypography>;
};

export default PeriodExperience;
