# Just Tip It

A simple, easy-to-use tip calculator for those in a rush.

## Features

- Bill amount input field (with $ prefix)
- Tip percentage input field (with % suffix)
- Calculated tip amount display
- Total amount display (bill + tip)
- Number pad for easy input
- Real-time calculations (updates as user types)

## User Flow

1. Input bill amount
2. Input tip percentage
3. Tip amount is automatically calculated and displayed
4. Bill amount + tip amount is automatically calculated and displayed

## Tech Stack

- React (with TypeScript)
- Vite (build tool)

## Design

- Responsive, optimized for mobile usage
- Big buttons that are easy to tap
- Clear, large text that's easy to read
- Simple, clean look without clutter
- Works smoothly without needing to hit "enter"
- Made for one-handed phone use
- No scrolling required to view UI elements

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
just-tip-it/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Calculator.tsx
│   │   ├── DisplaySection.tsx
│   │   ├── InputSection.tsx
│   │   └── Numpad.tsx
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── README.md
``` 