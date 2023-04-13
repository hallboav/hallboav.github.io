import type { FC } from 'react';
import dayjs from 'dayjs';
import PeriodTypography from './PeriodTypography';

export type PeriodCertificationsProps = { finishedAt: string };

const PeriodCertifications: FC<PeriodCertificationsProps> = ({
  finishedAt,
}) => {
  const formatted = dayjs(finishedAt).format('MMM[/]YY');

  return <PeriodTypography>{formatted}</PeriodTypography>;
};

export default PeriodCertifications;
