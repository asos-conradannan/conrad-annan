import { Box, Paper } from '@mui/material';
import type { ReactNode } from 'react';

interface ContentBoxProps {
  children: ReactNode;
}

export const ContentBox = ({ children }: ContentBoxProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 2,
      }}
    >
      <Box>{children}</Box>
    </Paper>
  );
};
