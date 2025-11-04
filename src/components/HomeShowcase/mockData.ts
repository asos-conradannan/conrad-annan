import dayjs, { Dayjs } from 'dayjs';

// Timeline Event Interface
export interface TimelineEvent {
  id: string;
  title: string;
  date: Dayjs;
  description: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  icon?: string;
}

// Accordion Panel Interface
export interface AccordionPanel {
  id: string;
  title: string;
  content: string;
}

// Form Step Interface
export interface FormStep {
  label: string;
  description?: string;
}

// Timeline Mock Data
export const mockTimelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Project Kickoff',
    date: dayjs().subtract(6, 'months'),
    description: 'Initial project planning and team formation completed.',
    color: 'primary',
  },
  {
    id: '2',
    title: 'MVP Complete',
    date: dayjs().subtract(4, 'months'),
    description: 'Minimum Viable Product delivered with core features.',
    color: 'info',
  },
  {
    id: '3',
    title: 'Infrastructure Deployed',
    date: dayjs().subtract(2, 'months'),
    description: 'Production infrastructure setup and security audit passed.',
    color: 'warning',
  },
  {
    id: '4',
    title: 'Public Preview',
    date: dayjs().subtract(1, 'month'),
    description: 'Beta release available to selected users for testing.',
    color: 'secondary',
  },
  {
    id: '5',
    title: 'General Availability',
    date: dayjs(),
    description: 'Official product launch to all users worldwide.',
    color: 'success',
    icon: 'rocket',
  },
];

// Accordion Mock Data
export const mockAccordionPanels: AccordionPanel[] = [
  {
    id: 'overview',
    title: 'Overview',
    content:
      'This Material UI showcase demonstrates various interactive components including accordions, timelines, date pickers, and steppers. Each component is fully functional and styled according to Material Design principles.',
  },
  {
    id: 'guidelines',
    title: 'Guidelines',
    content:
      'When implementing these components, ensure proper accessibility attributes are included. Use semantic HTML where possible, provide ARIA labels for interactive elements, and maintain keyboard navigation support.',
  },
  {
    id: 'tips',
    title: 'Tips',
    content:
      'For optimal performance, consider lazy loading heavy components like DataGrid. Use React.memo for components that receive stable props. Always validate user input and provide clear error messages.',
  },
  {
    id: 'faq',
    title: 'FAQ',
    content:
      'Q: How do I customize these components? A: Material UI provides extensive theming support through the ThemeProvider. You can customize colors, typography, spacing, and component variants globally or per-instance.',
  },
];

// Stepper Form Steps
export const mockFormSteps: FormStep[] = [
  {
    label: 'Details',
    description: 'Enter your basic information',
  },
  {
    label: 'Configuration',
    description: 'Configure your preferences',
  },
  {
    label: 'Review',
    description: 'Review and confirm',
  },
];

// Form field options
export const mockCategoryOptions = [
  { value: 'frontend', label: 'Frontend Development' },
  { value: 'backend', label: 'Backend Development' },
  { value: 'fullstack', label: 'Full Stack Development' },
  { value: 'devops', label: 'DevOps & Infrastructure' },
  { value: 'design', label: 'UI/UX Design' },
];

export const mockPriorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
];
