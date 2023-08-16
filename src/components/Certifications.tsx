import type { FC } from 'react';
import NextLink from 'next/link';
import { Stack, Typography, Link as MuiLink } from '@mui/material';
import { CurriculumVitae, Language } from '@/cv';
import { parseHtml } from '@/lib';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import PeriodCertifications from './PeriodCertifications';
import { useLang } from '@/lib/LanguageProvider';
import Image from 'next/image';

export type CertificationsProps = Pick<CurriculumVitae, 'certifications'>;

const Certifications: FC<CertificationsProps> = ({ certifications }) => {
  const lang = useLang();

  const issuedByText = (() =>
    ({
      [Language.ptBr]: 'emitido por',
      [Language.enUs]: 'issued by',
    }[lang]))();

  const title = (() =>
    ({
      [Language.ptBr]: 'Certificações',
      [Language.enUs]: 'Certifications',
    }[lang]))();

  return (
    <Timeline title={title}>
      {certifications.map(
        ({ name, finishedAt, country, issuedBy, link, description }, index) => (
          <TimelineItem
            key={name}
            last={index === certifications.length - 1}
            PeriodComponent={() => (
              <PeriodCertifications finishedAt={finishedAt} />
            )}
            HeaderComponent={() => (
              <Stack>
                <Typography variant="body1" fontWeight="bold">
                  {name}{' '}
                  <Typography
                    variant="body1"
                    fontWeight="normal"
                    component="span"
                  >
                    {issuedByText}
                  </Typography>{' '}
                  {issuedBy} <Image src={country} alt="country" width={15} height={10} />
                </Typography>
                <MuiLink href={link} component={NextLink}>
                  <Typography variant="body1">{link}</Typography>
                </MuiLink>
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

export default Certifications;
