import type { FC, CSSProperties } from 'react';
import NextLink from 'next/link';
import { Stack, Typography, Link as MuiLink } from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
  AlternateEmail as AlternateEmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { ContactType, Language } from '@/cv';
import type { CurriculumVitae } from '@/cv';
import { useLang } from '@/lib/LanguageProvider';

const iconsMap = {
  [ContactType.WhatsApp]: WhatsAppIcon,
  [ContactType.Email]: AlternateEmailIcon,
  [ContactType.LinkedIn]: LinkedInIcon,
  [ContactType.GitHub]: GitHubIcon,
};

export type ContactProps = Pick<CurriculumVitae, 'contacts'> & {
  fontFamily: CSSProperties['fontFamily'];
};

const Contact: FC<ContactProps> = ({ contacts, fontFamily }) => {
  const lang = useLang();

  const title = (() =>
    ({
      [Language.ptBr]: 'Contato',
      [Language.enUs]: 'Contact',
    }[lang]))();

  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1">{title}</Typography>
      <Stack spacing={0.5}>
        {contacts.map(({ type, title: contactTitle, url }) => {
          const IconComponent = iconsMap[type];

          return (
            <Stack key={type} direction="row" spacing={1}>
              <IconComponent />
              <MuiLink href={url} component={NextLink}>
                <Typography variant="body1" fontFamily={fontFamily}>
                  {contactTitle}
                </Typography>
              </MuiLink>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Contact;
