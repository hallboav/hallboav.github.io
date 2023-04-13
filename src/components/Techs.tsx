import type { FC } from 'react';
import { Chip, Stack, Typography } from '@mui/material';
import type { CurriculumVitae } from '@/cv';

export type TechsProps = Pick<CurriculumVitae, 'techs'> & {
  highlighted: string[];
};

const Techs: FC<TechsProps> = ({ techs, highlighted }) => (
  <Stack spacing={1}>
    <Typography variant="subtitle1">Techs</Typography>
    <Stack
      direction="row"
      gap={0.75}
      flexWrap="wrap"
      justifyContent="flex-start"
    >
      {techs.map((tech) => (
        <Chip
          key={tech}
          sx={{
            boxShadow: (theme) => `0 0 0 1px inset ${theme.palette.grey[300]}`,
          }}
          label={
            highlighted.includes(tech.toLowerCase()) ? (
              <Typography variant="body2" component="strong" fontWeight="bold">
                {tech}
              </Typography>
            ) : (
              <Typography variant="body2" component="span">
                {tech}
              </Typography>
            )
          }
          size="small"
        />
      ))}
    </Stack>
  </Stack>
);

export default Techs;
