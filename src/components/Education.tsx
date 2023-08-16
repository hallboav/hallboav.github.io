import type { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { CurriculumVitae, Language } from '@/cv';
import { parseHtml } from '@/lib';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import PeriodEducation from './PeriodEducation';
import { useLang } from '@/lib/LanguageProvider';
import Image from 'next/image';

export type EducationProps = Pick<CurriculumVitae, 'education'>;

const Education: FC<EducationProps> = ({ education }) => {
  const lang = useLang();

  const title = (() =>
    ({
      [Language.ptBr]: 'Educação',
      [Language.enUs]: 'Education',
    }[lang]))();

  return (
    <Timeline title={title}>
      {education.map(
        (
          {
            startedAt,
            finishedAt,
            country,
            title: educationTitle,
            issuedBy,
            description,
          },
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
                  {educationTitle[lang]}{' '}
                  <Image src={country} alt="country" width={15} height={10} />
                </Typography>
                <Typography variant="body1" fontWeight="bold">{issuedBy}</Typography>
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

export default Education;
