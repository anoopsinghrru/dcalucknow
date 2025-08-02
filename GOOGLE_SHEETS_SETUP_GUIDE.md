# Google Sheets Visitor Counter Setup Guide

## Overview
This guide will help you set up a shared visitor counter using Google Sheets as a database. This solution works for static websites and provides a real visitor count across all devices.

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Visitor Counter Database"
4. Set up the data as follows:
   - **Cell A1**: `visitor_count` (header)
   - **Cell A2**: `15000` (starting count)
5. Share the sheet:
   - Click "Share" button
   - Set to "Anyone with the link" can view
   - Copy the sheet URL for reference

## Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default code and paste this:

```javascript
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const count = sheet.getRange("A2").getValue();
  
  return ContentService
    .createTextOutput(JSON.stringify({ count: count }))
    .setMimeType(ContentService.MimeType.JSON);
}

function incrementCount() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const currentCount = sheet.getRange("A2").getValue();
  const newCount = currentCount + 1;
  sheet.getRange("A2").setValue(newCount);
  
  return ContentService
    .createTextOutput(JSON.stringify({ count: newCount }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  return incrementCount();
}
```

3. Click **Deploy** → **New deployment**
4. Choose **Web app**
5. Configure settings:
   - **Execute as**: Me
   - **Who has access**: Anyone
6. Click **Deploy**
7. **Copy the Web App URL** (you'll need this for the next step)

## Step 3: Update Configuration

1. Open `visitor-counter-config.js` in your website files
2. Replace `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'` with your actual Web App URL
3. Save the file

Example:
```javascript
const VISITOR_COUNTER_CONFIG = {
    GOOGLE_SHEETS_API_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
};
```

## Step 4: Test the Counter

1. Upload your updated files to your web server
2. Visit your website
3. Check that the visitor counter shows "Loading..." briefly, then displays the count
4. Refresh the page to see the count increment
5. Check your Google Sheet to confirm the count is updating

## How It Works

- **GET Request**: Fetches the current visitor count from the sheet
- **POST Request**: Increments the count by 1 and returns the new count
- **Fallback**: If the API fails, it falls back to localStorage
- **Animation**: Smooth counting animation when displaying the number

## Troubleshooting

### Counter shows "Loading..." indefinitely
- Check that your Google Apps Script URL is correct
- Ensure the Google Sheet is shared with "Anyone with the link" access
- Check browser console for error messages

### Counter doesn't increment
- Verify the Apps Script code is deployed correctly
- Check that the sheet has the correct data in cells A1 and A2
- Ensure the Web App is set to "Anyone" access

### CORS errors in console
- This is normal for Google Apps Script - the fallback will handle it
- The counter should still work despite these warnings

## Security Notes

- The Google Sheet is publicly readable
- Anyone can increment the counter by making POST requests
- For production use, consider adding rate limiting or authentication
- The current setup is suitable for basic visitor counting

## Benefits

✅ **Shared across all devices** - Real visitor count  
✅ **No backend required** - Works with static hosting  
✅ **Free to use** - Google Sheets and Apps Script are free  
✅ **Reliable** - Google's infrastructure  
✅ **Easy to monitor** - View count directly in Google Sheets  

## Files Modified

- `visitor-counter-config.js` - Configuration file (new)
- `scripts.js` - Updated visitor counter logic
- `index.html` - Added config script reference

Your visitor counter is now ready to track real visitors across all devices! 🎉 