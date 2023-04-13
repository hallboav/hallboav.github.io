import type { FC } from 'react';
import dayjs from 'dayjs';
import PeriodTypography from './PeriodTypography';

export type PeriodEducationProps = {
  startedAt: string;
  finishedAt: string;
};

const PeriodEducation: FC<PeriodEducationProps> = ({
  startedAt,
  finishedAt,
}) => {
  const formatted = dayjs(startedAt)
    .format('YYYY [until] ')
    .concat(dayjs(finishedAt).format('YYYY'));

  return <PeriodTypography>{formatted}</PeriodTypography>;
};

export default PeriodEducation;
