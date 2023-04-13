import type { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import type { CurriculumVitae } from '@/cv';
import { parseHtml } from '@/lib';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import PeriodEducation from './PeriodEducation';

export type EducationProps = Pick<CurriculumVitae, 'education'>;

const Education: FC<EducationProps> = ({ education }) => (
  <Timeline title="Education">
    {education.map(
      (
        { startedAt, finishedAt, country, title, issuedBy, description },
        index
      ) => (
        <TimelineItem
          key={title}
          last={index === education.length - 1}
          PeriodComponent={() => (
            <PeriodEducation startedAt={startedAt} finishedAt={finishedAt} />
          )}
          HeaderComponent={() => (
            <Stack>
              <Typography variant="body1" fontWeight="bold">
                {title} {country}
              </Typography>
              <Typography variant="body1">{issuedBy}</Typography>
            </Stack>
          )}
        >
          {parseHtml(description)}
        </TimelineItem>
      )
    )}
  </Timeline>
);

export default Education;
