import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { ContentBox } from '../base/ContentBox';
import { SectionTitle } from '../base/SectionTitle';
import { mockTimelineEvents } from './mockData';

export const TimelineDemo = () => {
  return (
    <ContentBox>
      <SectionTitle>Timeline Component</SectionTitle>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Visual representation of chronological events, perfect for displaying project roadmaps or
        release logs.
      </Typography>
      <Timeline position="alternate">
        {mockTimelineEvents.map((event, index) => (
          <TimelineItem key={event.id}>
            <TimelineOppositeContent color="text.secondary">
              <Typography variant="body2">{event.date.format('MMM D, YYYY')}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={event.color || 'primary'}>
                {event.icon === 'rocket' && <RocketLaunchIcon fontSize="small" />}
              </TimelineDot>
              {index < mockTimelineEvents.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                {event.title}
              </Typography>
              <Typography color="text.secondary">{event.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ContentBox>
  );
};
