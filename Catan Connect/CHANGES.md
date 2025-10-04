# Catan Connect - Changes Summary

## Changes Implemented

### 1. Hover Tooltips
- ✅ Added `title` attributes to all interactive elements explaining their function
- ✅ Tooltips on: time adjustment buttons, stats button, round number, dice display, timer, pause/play, next round, and all menu items

### 2. Menu Icon Update
- ✅ Stats menu now uses 📊 icon (different from settings ⚙️)
- ✅ New Game button moved to top menu bar with 🔄 icon

### 3. Menu Layout Reorganization
- ✅ New Game button moved to inline position with Stats, Advanced Settings, Settings, and Info
- ✅ All menu items now in a single row with flex-wrap for mobile

### 4. Dice Roll Probability Analysis
- ✅ Robber dice (rolled when 7 appears) now in separate "Robber Dice Distribution" section
- ✅ 7s now show as "Robber (7s only accepted from round 11)" with count
- ✅ Main probability chart excludes 7s from calculations

### 5. Time Stats Update
- ✅ Changed from timestamp to duration tracking
- ✅ Displays "Duration" column showing round length in seconds
- ✅ CSV export updated to include "Duration (seconds)" header

### 6. Info Menu Reordering
- ✅ New order: Keyboard Shortcuts → About Catan Connect → Quick Rules → Image
- ✅ Image displays Catan_Connect_Front_v1.png at bottom

### 7. Background Color Changes
- ✅ Sun Active: Changed to burnt orange gradient (#cc5500 to #ff6600)
- ✅ Moon Active: Changed to navy blue gradient (#001f3f to #003366)
- ✅ Robber warning: Changed to forest green gradient (#0d4d0d to #1a661a)

### 8. Flash Effect Update
- ✅ Flash now uses white color instead of image
- ✅ Reduced to 75% opacity (0.75)
- ✅ Smooth fade in/out with CSS transitions

### 9. Timer Increase from Round 11
- ✅ Timer automatically adds 10 seconds to round time from round 11 onwards
- ✅ Applied to all rounds 11+

### 10. Robber Display Updates
- ✅ When robber appears, displays: "ROBBER ON [number]" split over two lines
- ✅ Added message: "If you have more than 7 resources, discard half (rounded down)"
- ✅ If 7 is rolled on robber dice, displays "Desert" instead of 7

### 11. Mobile Loading Fix
- ✅ Updated viewport meta tag with proper spacing and parameters
- ✅ Moved menu.js script to end of body for better mobile compatibility
- ✅ Added maximum-scale and user-scalable parameters

## Technical Details

### Files Modified
- `catan_connect.html` - All changes implemented in single file

### Key Functions Updated
- `startNewRound()` - Added 10-second timer increase and Desert handling
- `logRound()` - Changed to track duration instead of timestamp
- `render()` - Updated all display sections with new layouts and tooltips
- Advanced stats view - Separated robber dice analysis
- Info view - Reordered sections

### CSS Changes
- Background gradients replaced image URLs
- Flash overlay now uses white with 0.75 opacity
- Maintained all responsive breakpoints

## Testing Recommendations
1. Test on mobile devices to confirm loading works
2. Verify hover tooltips appear on desktop
3. Check robber display shows correct messages
4. Confirm timer increases by 10s from round 11
5. Verify Desert appears when 7 rolled on robber dice
6. Test CSV export includes duration column
