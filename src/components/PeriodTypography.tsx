import type { FC, PropsWithChildren } from 'react';
import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

export type PeriodTypographyProps = Omit<
  TypographyProps,
  'variant' | 'textAlign' | 'minWidth' | 'maxWidth'
>;

const PeriodTypography: FC<PropsWithChildren<PeriodTypographyProps>> = (
  props
) => (
  <Typography
    {...props}
    minWidth={40}
    maxWidth={40}
    textAlign="center"
    variant="body2"
  />
);

export default PeriodTypography;
