import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ContentBox } from '../base/ContentBox';
import { SectionTitle } from '../base/SectionTitle';
import { mockAccordionPanels } from './mockData';

export const AccordionDemo = () => {
  const [expanded, setExpanded] = useState<string[]>(['overview']);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded((prev) =>
      isExpanded ? [...prev, panel] : prev.filter((p) => p !== panel)
    );
  };

  return (
    <ContentBox>
      <SectionTitle>Accordion Component</SectionTitle>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Expandable panels for organizing content into collapsible sections. Multiple panels can be
        expanded simultaneously.
      </Typography>
      <Box>
        {mockAccordionPanels.map((panel) => (
          <Accordion
            key={panel.id}
            expanded={expanded.includes(panel.id)}
            onChange={handleChange(panel.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panel.id}-content`}
              id={`${panel.id}-header`}
            >
              <Typography sx={{ fontWeight: 500 }}>{panel.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{panel.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </ContentBox>
  );
};
