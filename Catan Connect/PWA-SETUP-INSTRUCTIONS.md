# 📱 Catan Connect PWA Setup Instructions

## What is a PWA?

A **Progressive Web App (PWA)** allows users to install your web app on their phone or tablet like a native app. It will:
- ✅ Work completely **offline** (no internet needed)
- ✅ Install to the home screen with an icon
- ✅ Open in fullscreen without browser UI
- ✅ Cache all assets for instant loading

---

## 🎨 Step 1: Generate PWA Icons

1. **Open the icon generator:**
   - Double-click `generate-icons.html` in this folder
   - It will open in your browser

2. **Upload your logo:**
   - Click or drag `catan logo.png` into the upload area

3. **Generate icons:**
   - Click "Generate All Icons"
   - You'll see 4 preview icons created

4. **Download all icons:**
   - Click "Download All Icons" button
   - Or click individual download buttons
   - Save these files to the **Catan Connect** folder:
     - `icon-192.png`
     - `icon-512.png`
     - `icon-maskable-192.png`
     - `icon-maskable-512.png`

---

## 📤 Step 2: Upload Files to Your Server

Make sure **ALL** of these files are in your `Catan Connect` folder on your web server:

### Required Files:
- ✅ `catan_connect.html` (updated with PWA support)
- ✅ `manifest.json` (PWA configuration)
- ✅ `service-worker.js` (offline caching)
- ✅ `tailwind.standalone.js` (Tailwind CSS for offline use)
- ✅ `ding-sfx-330333_by_kakaist.mp3` (sound file)
- ✅ `catan logo.png` (original logo)
- ✅ `Catan_Connect_Front_v1.png` (game card image)
- ✅ `Catan_Connect_Back_v1.png` (game card image)
- ✅ `icon-192.png` (generated icon)
- ✅ `icon-512.png` (generated icon)
- ✅ `icon-maskable-192.png` (generated icon)
- ✅ `icon-maskable-512.png` (generated icon)

### Files you can delete (not needed on server):
- ❌ `generate-icons.html` (only needed for icon generation)
- ❌ `PWA-SETUP-INSTRUCTIONS.md` (this file)

---

## 📱 Step 3: Install on Phone/Tablet

### On Android (Chrome):
1. Open `catan_connect.html` in Chrome browser
2. On the start screen, look for the blue **"📱 Install App (Works Offline)"** button
3. Click it and confirm installation
4. **OR** tap the ⋮ menu → "Install app" / "Add to Home screen"
5. The app icon will appear on your home screen

### On iPhone/iPad (Safari):
1. Open `catan_connect.html` in Safari browser
2. Tap the Share button (📤)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it "Catan Connect" and tap "Add"
5. The app icon will appear on your home screen

### On Desktop (Chrome/Edge):
1. Open `catan_connect.html` in browser
2. Look for the install icon (⊕) in the address bar
3. Click it and confirm installation
4. The app will open in its own window

---

## 🧪 Step 4: Test Offline Functionality

1. **Install the app** using the instructions above
2. **Open the app** from your home screen (not the browser)
3. **Turn on Airplane Mode** or disconnect from WiFi
4. **Try using the app:**
   - Start a new game
   - Timer should work
   - Chime should play
   - Dice rolling should work
   - Everything should function normally

---

## 🔧 How It Works

### Service Worker (`service-worker.js`)
- Caches all files when you first visit the app
- Serves files from cache when offline
- Automatically updates when you make changes

### Manifest (`manifest.json`)
- Defines app name, icon, colors, and display settings
- Tells the browser this is an installable app
- Configures how the app looks when installed

### Tailwind CSS (`tailwind.standalone.js`)
- Previously loaded from CDN (required internet)
- Now bundled locally for offline use
- Falls back to CDN if local file fails

---

## ❓ Troubleshooting

### "Install App" button doesn't appear:
- Make sure you're accessing via HTTPS (or localhost)
- PWAs require a secure connection
- GitHub Pages automatically provides HTTPS

### App won't install:
- Check that `manifest.json` is in the same folder as the HTML
- Check browser console for errors (F12)
- Make sure all icon files exist

### App doesn't work offline:
- Wait a few seconds after first load for caching to complete
- Check browser console for service worker errors
- Try uninstalling and reinstalling the app

### Chime doesn't work offline:
- Make sure `ding-sfx-330333_by_kakaist.mp3` is uploaded
- Check that the filename matches exactly (case-sensitive on some systems)
- Try enabling chime and testing while online first

---

## 🔄 Updating the App

When you make changes to the code:

1. Update the version number in `service-worker.js`:
   ```javascript
   const CACHE_NAME = 'catan-connect-v1.0.1'; // Increment this
   ```

2. Upload the changed files to your server

3. Users will get the update next time they:
   - Open the app
   - Refresh the page
   - Close and reopen the app

The service worker will automatically detect changes and update the cache.

---

## 📊 What Users Will See

### Before Installation:
- Regular webpage in browser
- Blue "Install App" button on start screen
- Can still use normally in browser

### After Installation:
- App icon on home screen with Catan logo
- Opens in fullscreen (no browser UI)
- Works completely offline
- Feels like a native app

---

## 🎉 You're Done!

Your Catan Connect timer is now a fully installable Progressive Web App that works offline on any device!

**Share the link with your gaming group and they can install it on their phones and tablets.**

---

## 📝 Notes

- The PWA works alongside the regular web version
- Users can choose to install it or just use it in their browser
- The service worker only activates after the first visit
- All assets are cached for offline use (images, sounds, CSS, etc.)
- The app will automatically update when you push changes

Enjoy your offline-capable Catan Connect timer! 🎲🏝️
