import type { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { CurriculumVitae, Language } from '@/cv';
import { parseHtml } from '@/lib';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import PeriodExperience from './PeriodExperience';
import { useLang } from '@/lib/LanguageProvider';
import Image from 'next/image';

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
  const lang = useLang();

  const workingForText = (() =>
    ({
      [Language.ptBr]: 'Trabalhando para',
      [Language.enUs]: 'Working for',
    }[lang]))();

  const atText = (() =>
    ({
      [Language.ptBr]: 'em',
      [Language.enUs]: 'at',
    }[lang]))();

  const title = (() =>
    ({
      [Language.ptBr]: 'Experiência',
      [Language.enUs]: 'Expierience',
    }[lang]))();

  const diff = experiences.reduce((prev, curr) => {
    return prev + dayjs(curr.finishedAt).diff(curr.startedAt);
  }, 0);

  const expTime = dayjs.duration(diff).humanize();

  const subtitle = (() =>
    ({
      [Language.ptBr]: `mostrando últimas ${maxItems}`,
      [Language.enUs]: `showing last ${maxItems}`,
    }[lang]))();

  const slicedExperiences = experiences.slice(0, maxItems);

  return (
    <Timeline
      title={
        <Stack spacing={1} direction="row" alignItems="center">
          <span>{title}</span>
          <Typography variant="body2">({subtitle})</Typography>
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
            key={company[lang].concat(String(index))}
            last={index === slicedExperiences.length - 1}
            ellipsis={slicedExperiences.length === maxItems}
            PeriodComponent={() => (
              <PeriodExperience startedAt={startedAt} finishedAt={finishedAt} />
            )}
            HeaderComponent={() => (
              <Stack>
                <Typography variant="body1" fontWeight="bold">
                  {role[lang]}{' '}
                  <Typography
                    variant="body1"
                    fontWeight="normal"
                    component="span"
                  >
                    {atText}
                  </Typography>{' '}
                  {company[lang]}{' '}
                  <Image src={country} alt="country" width={15} height={10} />
                </Typography>
                {locatedAt && (
                  <Typography variant="body1" fontWeight="bold">
                    <Typography
                      variant="body1"
                      fontWeight="normal"
                      component="span"
                    >
                      {workingForText}
                    </Typography>{' '}
                    {locatedAt[lang]}
                  </Typography>
                )}
              </Stack>
            )}
          >
            {parseHtml(description[lang])}
          </TimelineItem>
        )
      )}
    </Timeline>
  );
};

export default Experience;
