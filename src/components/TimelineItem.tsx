import { Open_Sans, Fira_Mono } from 'next/font/google';
import type { FC, PropsWithChildren, ElementType } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import type { BoxProps, StackProps, TypographyProps } from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
  AlternateEmail as AlternateEmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';

const ballDiameter = 10;
const ballBorderWidth = 3;

const Mark: FC = () => (
  <Box
    width={ballDiameter + ballBorderWidth}
    height={ballDiameter + ballBorderWidth}
    border={`${ballBorderWidth}px solid`}
    borderColor="text.primary"
    borderRadius="50%"
  />
);

const Line: FC = () => (
  <Box
    position="absolute"
    left={ballBorderWidth * 2 - ballBorderWidth / 3}
    top={ballDiameter + ballBorderWidth}
    bottom={0}
    width={ballBorderWidth}
    bgcolor="text.primary"
  />
);

const EllipsisLine: FC = () => (
  <Stack spacing={1} alignItems="center">
    {[3, 1, 0.5].map((i, index) => (
      <Box
        key={i * (index + 1)}
        height={i * 10}
        width={ballBorderWidth}
        bgcolor="text.primary"
      />
    ))}
  </Stack>
);

type TimelineMarkProps = { last?: boolean; ellipsis?: boolean };

const TimelineMark: FC<TimelineMarkProps> = ({
  last = false,
  ellipsis = false,
}) => (
  <Stack alignItems="center" position="relative">
    <Mark />
    {last ? ellipsis ? <EllipsisLine /> : null : <Line />}
  </Stack>
);

export type TimelineItemProps = {
  PeriodComponent: ElementType;
  HeaderComponent: ElementType;
  last?: boolean;
  ellipsis?: boolean;
};

const TimelineItem: FC<PropsWithChildren<TimelineItemProps>> = ({
  PeriodComponent,
  HeaderComponent,
  children,
  last = false,
  ellipsis = false,
}) => (
  <Stack direction="row" spacing={1} alignItems="stretch">
    <TimelineMark last={last} ellipsis={ellipsis} />
    <PeriodComponent />
    <Stack spacing={1}>
      <HeaderComponent />
      <Box pb={0.5}>{children}</Box>
    </Stack>
  </Stack>
);

export default TimelineItem;
