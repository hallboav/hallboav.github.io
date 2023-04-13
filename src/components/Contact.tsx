import type { FC, CSSProperties } from 'react';
import NextLink from 'next/link';
import { Stack, Typography, Link as MuiLink } from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
  AlternateEmail as AlternateEmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import type { CurriculumVitae } from '@/cv';

const iconsMap = {
  whatsapp: WhatsAppIcon,
  email: AlternateEmailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

export type ContactProps = Pick<CurriculumVitae, 'contacts'> & {
  fontFamily: CSSProperties['fontFamily'];
};

const Contact: FC<ContactProps> = ({ contacts, fontFamily }) => (
  <Stack spacing={1}>
    <Typography variant="subtitle1">Contact</Typography>
    <Stack spacing={0.5}>
      {contacts.map(({ type, title, logo, url }) => {
        const IconComponent = iconsMap[type];

        return (
          <Stack key={type} direction="row" spacing={1}>
            <IconComponent />
            <MuiLink href={url} component={NextLink}>
              <Typography variant="body1" fontFamily={fontFamily}>
                {title}
              </Typography>
            </MuiLink>
          </Stack>
        );
      })}
    </Stack>
  </Stack>
);

export default Contact;
