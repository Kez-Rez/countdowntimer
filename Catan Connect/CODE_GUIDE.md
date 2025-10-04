# Catan Connect - Code Organization Guide

## Current Code Structure

The code is well-organized but could be simplified. Here's what each section does:

### 1. CSS CUSTOMIZATION (Lines ~10-50)
**Easy to adjust colors here:**
```css
:root {
  --color-dice-number: #ffffff;
  --color-sun-active: #ffffff;
  --color-moon-active: #ffffff;
  --color-robber-label: #fca5a5;
  --color-robber-number: #ffffff;
  --color-timer: #ffffff;
  --color-round-number: #ffffff;
}
```

**Background colors (Lines ~55-75):**
- `.bg-sun` - Burnt orange gradient for Sun rounds
- `.bg-moon` - Navy blue gradient for Moon rounds
- `.bg-warning` - Forest green for robber warning

### 2. GAME STATE (Lines ~90-110)
All game variables in one place:
- `round` - Current round number
- `roundTime` - Base seconds per round
- `timeLeft` - Countdown timer
- `diceNumber` - Current dice roll
- `robberNumber` - Robber placement number
- `roundLog` - History of all rounds

### 3. CORE GAME FUNCTIONS

**Dice Rolling (Lines ~150-180):**
- `rollDice()` - Simulates 2d6 (returns 2-12)
- `getRandomNumber(excludeSeven)` - Gets dice roll, optionally excluding 7s

**Round Management (Lines ~190-220):**
- `startNewRound()` - Rolls dice, sets timer, handles robber
- `logRound()` - Records round to history

**Timer Control (Lines ~230-280):**
- `startTimer()` - Starts countdown and flash effects
- `stopTimerAndFlash()` - Stops all timers
- `handleNext()` - Moves to next round with countdown
- `togglePause()` - Pause/resume game

### 4. SETTINGS & STATS (Lines ~400-700)
- `showStatsPrompt()` - Opens stats menu
- `copyStats()` - Copy stats to clipboard
- `exportStatsCSV()` - Download stats as CSV
- `adjustRoundTime()` - Change round duration

### 5. RENDER FUNCTION (Lines ~710-1100)
Displays the UI based on current state:
- Pause modal
- Stats/Settings/Info views
- Warning screen (round 11)
- Countdown (3-2-1)
- Start screen
- Main game (dice + timer)
- Robber screen

## Key Settings You Might Want to Adjust

### Timer Settings
```javascript
roundTime: 30,              // Default seconds per round
robberStartRound: 11,       // When robber becomes active
```

### Flash Settings
```javascript
flashSpeed: 600,            // Milliseconds between flashes (lower = faster)
vibrationEnabled: true,     // Vibrate at 5 seconds
```

### Round 11 Behavior
When round 11 starts, the code:
1. Shows warning screen for 3 seconds
2. Adds 10 seconds to `roundTime` permanently
3. Allows 7s to be rolled (activates robber)

## Simplification Recommendations

The code is actually quite well-structured! Here are minor improvements:

1. **Separate files** (if you want):
   - `catan-styles.css` - All CSS
   - `catan-game.js` - Game logic
   - `catan-ui.js` - Rendering
   - `catan-stats.js` - Statistics

2. **Configuration object** at top:
```javascript
const CONFIG = {
  DEFAULT_ROUND_TIME: 30,
  ROBBER_START_ROUND: 11,
  ROUND_11_TIME_INCREASE: 10,
  WARNING_DURATION: 3000,
  FLASH_SPEED: 600,
  COLORS: {
    SUN: '#cc5500',
    MOON: '#001f3f',
    ROBBER_WARNING: '#0d4d0d'
  }
};
```

3. **Constants for magic numbers**:
```javascript
const COUNTDOWN_START = 3;
const WARNING_TIME_SECONDS = 5;
const VIBRATION_PATTERN = [200, 100, 200];
```

## Current Code Quality: ✅ GOOD

**Strengths:**
- Clear function names
- Logical organization
- Good comments
- Single responsibility functions
- State management in one place

**Minor improvements possible:**
- Extract magic numbers to constants
- Split into multiple files (optional)
- Add more inline comments for complex logic

The code is already quite readable and maintainable as-is!
