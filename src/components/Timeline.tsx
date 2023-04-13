import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

export type TimelineProps = { title: ReactNode };

const Timeline: FC<PropsWithChildren<TimelineProps>> = ({
  title,
  children,
}) => (
  <Stack spacing={1.5}>
    <Typography variant="subtitle1">{title}</Typography>
    <div>{children}</div>
  </Stack>
);

export default Timeline;
