# HomeShowcase Component

A comprehensive Material UI component showcase demonstrating interactive UI patterns and best practices.

## Overview

This showcase provides live, interactive demonstrations of popular Material UI components including Accordion, Timeline, DateTime Picker, and Stepper. Each demo is self-contained with mock data and full interactivity.

## Components

### AccordionDemo
**Purpose:** Demonstrates collapsible content panels for organizing information.

**Features:**
- Multiple simultaneous expansion
- Controlled state management
- FAQ-style layout
- Smooth animations

**Use Cases:** FAQs, guidelines, documentation sections

### TimelineDemo
**Purpose:** Visual representation of chronological events.

**Features:**
- Alternating left/right layout
- Color-coded milestones
- Custom icons
- Date formatting with dayjs

**Use Cases:** Project roadmaps, release logs, event histories

### DateTimePickerDemo
**Purpose:** Interactive date and time selection with validation.

**Features:**
- Dual pickers (start/end)
- Real-time validation
- Duration calculation
- Error/success alerts
- LocalizationProvider integration

**Use Cases:** Event scheduling, booking systems, date range filters

### StepperDemo
**Purpose:** Multi-step form wizard with validation.

**Features:**
- 3-step progression (Details → Configuration → Review)
- Field validation per step
- Back/next navigation
- Form submission with confirmation
- Accessible navigation

**Use Cases:** Registration flows, checkout processes, multi-step forms

## Mock Data

All mock data is defined in `mockData.ts` with proper TypeScript interfaces:

- `TimelineEvent`: Event data with dates, descriptions, colors
- `AccordionPanel`: Panel content with titles and descriptions
- `FormStep`: Step configuration for stepper
- Category/Priority options for form dropdowns

## Architecture

```
HomeShowcase/
├── index.tsx                    # Main container
├── mockData.ts                  # Type-safe mock data
├── AccordionDemo.tsx
├── TimelineDemo.tsx
├── DateTimePickerDemo.tsx
├── StepperDemo.tsx
├── __tests__/                   # Component tests
└── README.md                    # This file
```

## Usage

```tsx
import { HomeShowcase } from './components/HomeShowcase';

function App() {
  return <HomeShowcase />;
}
```

## Customization

### Styling
Components use Material UI's `sx` prop for styling. Modify theme in `App.tsx` for global changes.

### Mock Data
Edit `mockData.ts` to customize:
- Timeline events and dates
- Accordion panel content
- Form field options
- Step labels and descriptions

### Validation Logic
Form validation is in `StepperDemo.tsx` in the `validateStep` function. Modify validation rules as needed.

## Testing

Run tests with:
```bash
npm run test
```

Test coverage includes:
- Component rendering
- User interactions (clicks, typing)
- Form validation
- State changes
- Accessibility

## Accessibility

All components follow WCAG guidelines:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Semantic HTML
- Color contrast compliance

## Dependencies

- `@mui/material` - Core UI components
- `@mui/lab` - Timeline component
- `@mui/x-date-pickers` - Date/time pickers
- `@mui/icons-material` - Icons
- `dayjs` - Date handling
- `@emotion/react` & `@emotion/styled` - Styling

## Future Enhancements

Possible additions (out of current scope):
- Code snippet toggle for each demo
- DataGrid demonstration
- Advanced theming examples
- Dark mode toggle
- Performance optimizations with lazy loading
- Additional component demos (Autocomplete, Transfer List, etc.)

## Related Documentation

- [Material UI Documentation](https://mui.com/)
- [MUI X Date Pickers](https://mui.com/x/react-date-pickers/)
- [Day.js Documentation](https://day.js.org/)

## License

Part of the conrad-annan project.
