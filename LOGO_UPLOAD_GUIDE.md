# How to Upload Your Logo — Step by Step

Follow these simple steps to upload your logo to the navbar.

---

## 📋 Before You Start

Make sure you have:
- ✅ Your logo image file ready (PNG, JPG, or SVG)
- ✅ Logo with transparent background (PNG is best)
- ✅ Logo size: at least 200x100 pixels
- ✅ File size: under 1 MB

---

## 🚀 Step-by-Step Instructions

### Step 1: Open the Visual Editor

1. Go to your **Manus Management UI** (right side of your screen)
2. Click on the **"Preview"** panel to see your website
3. Look for an **"Edit"** button or pencil icon
4. Click it to enter **visual editing mode**

### Step 2: Click on the Logo Area

1. In the preview, look at the **top-left corner** of your website (the navbar)
2. You should see a placeholder where your logo goes
3. **Click on the logo area** — it will be highlighted with a blue border

### Step 3: Upload Your Logo Image

1. After clicking the logo, a **right panel** will appear
2. Look for an **"Image"** or **"Upload"** section
3. Click **"Upload image"** or **"Choose file"**
4. Select your logo file from your computer
5. The image will upload to the CDN

### Step 4: Confirm the Upload

1. Your logo will appear in the navbar
2. The image will automatically resize to fit (height: 40px on mobile, 48px on desktop)
3. The width will adjust automatically to maintain your logo's aspect ratio

### Step 5: Save Your Changes

1. Click outside the logo area to deselect it
2. Your changes are **auto-saved**
3. Create a **checkpoint** to backup your work:
   - Go to **"Checkpoint"** section
   - Click **"Save checkpoint"**
   - Add a description: "Uploaded logo"

---

## 📸 Logo Best Practices

### File Format
- **PNG** — Best choice (supports transparency)
- **JPG** — Works but no transparency
- **SVG** — Perfect for scalable logos

### Logo Size
| Dimension | Recommendation |
|-----------|-----------------|
| **Width** | 200–400 pixels |
| **Height** | 100–150 pixels |
| **File size** | Under 500 KB |
| **Aspect ratio** | 2:1 or 3:1 |

### Background
- **Transparent** — Recommended (PNG with alpha channel)
- **White** — Works if you don't have transparency
- **Avoid** — Colored backgrounds (won't match navbar)

### Logo Placement
Your logo will appear:
- **Mobile:** 40px tall, left-aligned in navbar
- **Desktop:** 48px tall, left-aligned in navbar
- **Responsive:** Automatically scales on all screen sizes

---

## 🎨 Logo Size Adjustment

If your logo is too big or too small, you can adjust it:

### In the Visual Editor:
1. Click on the logo
2. Look for **"Size"** or **"Dimensions"** options
3. Adjust the height (the width adjusts automatically)
4. Recommended: 40–50px height

### In the Code (Advanced):
Edit `client/src/components/Navbar.tsx` line 53:
```jsx
className="h-10 md:h-12 w-auto"
```

Change `h-10` (40px) to `h-12` (48px) or `h-14` (56px) for larger logo.

---

## ✅ Troubleshooting

### Logo Not Uploading

**Problem:** Upload button doesn't work or file won't upload

**Solution:**
1. Check file size (should be under 1 MB)
2. Check file format (PNG, JPG, or SVG)
3. Try a different image
4. Refresh the page and try again

### Logo Looks Blurry

**Problem:** Logo appears pixelated or blurry

**Solution:**
1. Use a higher resolution logo (at least 200x100 pixels)
2. Use PNG or SVG format (better quality)
3. Avoid JPG compression artifacts

### Logo Doesn't Fit Right

**Problem:** Logo is too big or too small, or looks stretched

**Solution:**
1. Check your logo's aspect ratio
2. Adjust the height in the visual editor
3. Make sure logo has transparent background
4. Try a different logo size

### Logo Disappeared

**Problem:** Logo was uploaded but now it's gone

**Solution:**
1. Check if the image URL is still valid
2. Try uploading the logo again
3. Rollback to a previous checkpoint if needed

---

## 🔄 Replacing Your Logo

If you want to change your logo later:

1. **Click on the logo** in the visual editor
2. Look for **"Replace image"** or **"Upload new image"** option
3. Select your new logo file
4. The old logo will be replaced
5. Save a checkpoint with your new logo

---

## 📱 Mobile Preview

Always check how your logo looks on mobile:

1. In the Preview panel, click the **mobile icon**
2. See how your logo appears on phones
3. Make adjustments if needed
4. Test on an actual mobile device if possible

---

## 💡 Pro Tips

1. **Use SVG format** — Best for logos (scalable, small file size)
2. **Transparent background** — Makes logo look professional
3. **Test on mobile** — Ensure logo looks good on small screens
4. **Keep it simple** — Avoid overly complex logos
5. **High contrast** — Make sure logo stands out against the navbar background

---

## 🎉 You're Done!

Your logo is now displayed in the navbar. Every time someone visits your website, they'll see your professional branding!

---

## 📞 Need Help?

If you have issues uploading your logo:
1. Check the troubleshooting section above
2. Make sure your logo file is in the right format
3. Try uploading a test image first
4. Contact Manus support at https://help.manus.im

---

**Happy branding!** 🚀
