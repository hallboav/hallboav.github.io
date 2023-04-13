import type { FC } from 'react';
import NextLink from 'next/link';
import { Stack, Typography, Link as MuiLink } from '@mui/material';
import type { CurriculumVitae } from '@/cv';
import { parseHtml } from '@/lib';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import PeriodCertifications from './PeriodCertifications';

export type CertificationsProps = Pick<CurriculumVitae, 'certifications'>;

const Certifications: FC<CertificationsProps> = ({ certifications }) => (
  <Timeline title="Certifications">
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
                  issued by
                </Typography>{' '}
                {issuedBy} {country}
              </Typography>
              <MuiLink href={link} component={NextLink}>
                <Typography variant="body1">{link}</Typography>
              </MuiLink>
            </Stack>
          )}
        >
          {parseHtml(description)}
        </TimelineItem>
      )
    )}
  </Timeline>
);

export default Certifications;
