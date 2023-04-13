import type { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { CurriculumVitae } from '@/cv';
import { parseHtml } from '@/lib';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import PeriodExperience from './PeriodExperience';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const DEFAULT_MAX_ITEMS = 6;

export type ExperienceProps = Pick<CurriculumVitae, 'experiences'> & {
  maxItems?: number;
};

const Experience: FC<ExperienceProps> = ({
  experiences,
  maxItems = DEFAULT_MAX_ITEMS,
}) => {
  const slicedExperiences = experiences.slice(0, maxItems);

  const diff = experiences.reduce((prev, curr) => {
    return prev + dayjs(curr.finishedAt).diff(curr.startedAt);
  }, 0);

  const expTime = dayjs.duration(diff).humanize();

  return (
    <Timeline
      title={
        <Stack spacing={1} direction="row" alignItems="center">
          <span>Experience</span>
          <Typography variant="body2">(~{expTime} in total)</Typography>
        </Stack>
      }
    >
      {slicedExperiences.map(
        (
          {
            startedAt,
            finishedAt,
            country,
            locatedAt,
            company,
            role,
            description,
          },
          index
        ) => (
          <TimelineItem
            key={locatedAt || company}
            last={index === slicedExperiences.length - 1}
            ellipsis={slicedExperiences.length === maxItems}
            PeriodComponent={() => (
              <PeriodExperience startedAt={startedAt} finishedAt={finishedAt} />
            )}
            HeaderComponent={() => (
              <Stack>
                <Typography variant="body1" fontWeight="bold">
                  {role}{' '}
                  <Typography
                    variant="body1"
                    fontWeight="normal"
                    component="span"
                  >
                    at
                  </Typography>{' '}
                  {company} {country}
                </Typography>
                {locatedAt && (
                  <Typography variant="body1" fontWeight="bold">
                    <Typography
                      variant="body1"
                      fontWeight="normal"
                      component="span"
                    >
                      Working for
                    </Typography>{' '}
                    {locatedAt}
                  </Typography>
                )}
              </Stack>
            )}
          >
            {parseHtml(description)}
          </TimelineItem>
        )
      )}
    </Timeline>
  );
};

export default Experience;
