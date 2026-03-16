# Deploy Yume Psicologia on Netlify — Complete Guide

This guide walks you through deploying your React website on Netlify with automatic deployments from GitHub.

---

## 📋 Prerequisites

Before you start, you'll need:

1. **GitHub Account** — Free at [github.com](https://github.com)

1. **Netlify Account** — Free at [netlify.com](https://netlify.com)

1. **Your project files** — Already prepared and ready to push to GitHub

1. **Git installed** — On your local machine (if deploying from your computer)

---

## Step 1: Push Your Project to GitHub

### 1.1 Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in

1. Click the **"+"** icon in the top-right → **"New repository"**

1. Fill in the details:
  - **Repository name:** `yume-psicologia`
  - **Description:** "Psychology clinic website — React + Tailwind"
  - **Visibility:** Public (required for free Netlify deployments)
  - **Initialize repository:** Leave unchecked (we'll push existing code)

1. Click **"Create repository"**

### 1.2 Push Your Code to GitHub how do I do that?



Open your terminal and run these commands in your project directory:

```bash
# Navigate to your project
cd /path/to/yume-psicologia

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Yume Psicologia website"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/yume-psicologia.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Expected output:**

```
Enumerating objects: 250, done.
Counting objects: 100% (250/250 ), done.
...
To https://github.com/YOUR_USERNAME/yume-psicologia.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ Your code is now on GitHub!

---

## Step 2: Connect GitHub to Netlify

### 2.1 Create Netlify Account

1. Go to [netlify.com](https://netlify.com)

1. Click **"Sign up"**

1. Choose **"Sign up with GitHub"** (easiest option)

1. Authorize Netlify to access your GitHub account

1. Complete your profile

### 2.2 Import Your Repository

1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**

1. Choose **"GitHub"** as your Git provider

1. Authorize Netlify (if prompted)

1. Search for and select **`yume-psicologia`** repository

1. Click **"Install"** to grant Netlify access

---

## Step 3: Configure Build Settings

### 3.1 Set Build Configuration

After selecting your repository, Netlify will show build settings. Configure as follows:

**Build settings:**

- **Branch to deploy:** `main`

- **Build command:** `pnpm build`

- **Publish directory:** `dist/public`

- **Node version:** 22 (or latest)

**Environment variables:** (Leave empty for now — not needed for static site)

### 3.2 Review and Deploy

1. Click **"Deploy site"**

1. Netlify will start building your site

1. Watch the build logs in real-time

**Build process typically takes 2–3 minutes:**

```
Installing dependencies...
Running build command...
Building with Vite...
✓ Build complete
Deploying site...
✓ Site deployed
```

✅ Your site is now live at `https://yume-psicologia.netlify.app`

---

## Step 4: Connect Your Custom Domain

### 4.1 Add Custom Domain

1. In Netlify dashboard, go to **"Site settings"** → **"Domain management"**

1. Click **"Add custom domain"**

1. Enter your domain: `yumepsicologia.com.br`

1. Click **"Verify"**

### 4.2 Configure DNS

Netlify will show DNS configuration options:

**Option A: Use Netlify's DNS (Recommended )**

1. Click **"Set up Netlify DNS"**

1. Netlify provides nameservers: `dns1.netlify.com`, `dns2.netlify.com`, etc.

1. Update your domain registrar (GoDaddy, Namecheap, etc.):
  - Log into your registrar's dashboard
  - Find "Nameservers" or "DNS" settings
  - Replace existing nameservers with Netlify's nameservers
  - Save changes

**Option B: Use Your Registrar's DNS (Advanced)**

1. Click **"Set up external DNS"**

1. Netlify provides an IP address

1. Create an A record in your registrar pointing to this IP

1. Save changes

### 4.3 Verify Domain

1. Wait 5–30 minutes for DNS to propagate

1. Visit `https://yumepsicologia.com.br` in your browser

1. Verify your site loads correctly

1. Check for the green lock icon (HTTPS )

✅ Your custom domain is now live!

---

## Step 5: Enable Automatic Deployments

Netlify automatically deploys whenever you push to GitHub. To test:

1. Make a small change to your code (e.g., update text in `Footer.tsx`)

1. Commit and push to GitHub:

   ```bash
   git add .
   git commit -m "Update footer text"
   git push origin main
   ```

1. Watch Netlify automatically build and deploy

1. Your changes appear on your live site within 2–3 minutes

---

## Step 6: Update Contact Information Before Going Live

**Before your site goes live, update these details:**

### 6.1 Update WhatsApp Number

Replace `5511999999999` with your real WhatsApp number:

```bash
# Find all occurrences
grep -r "5511999999999" client/src/

# Files to update:
# - client/src/components/Navbar.tsx (lines 72, 109)
# - client/src/components/sections/Services.tsx (line 202)
# - client/src/components/sections/HowItWorks.tsx
# - client/src/components/sections/FAQ.tsx
# - client/src/components/sections/CTABanner.tsx
# - client/src/components/Footer.tsx (lines 42, 91)
```

Edit each file and replace the number. Then commit:

```bash
git add .
git commit -m "Update WhatsApp contact number"
git push origin main
```

### 6.2 Update Email Address

Replace `contato@yumepsicologia.com.br` with your real email:

```bash
grep -r "contato@yumepsicologia.com.br" client/src/
```

Files to update:

- `client/src/components/Footer.tsx` (line 114)

- `client/src/components/sections/Team.tsx` (recruitment link)

### 6.3 Update Team Information

Edit `client/src/components/sections/Team.tsx`:

- Update team member names

- Update credentials (CRP numbers)

- Update specializations

- Update Instagram links

### 6.4 Update Legal Information

Edit `client/src/components/Footer.tsx`:

- Update CNPJ number (line 138)

- Update company name

- Update CRP numbers (line 141)

- Ensure LGPD compliance statement

Commit all changes:

```bash
git add .
git commit -m "Update contact info and legal details"
git push origin main
```

Netlify will automatically deploy your updates!

---

## Step 7: Set Up Analytics

### 7.1 Enable Netlify Analytics (Optional)

1. Go to **"Site settings"** → **"Analytics"**

1. Click **"Enable Netlify Analytics"**

1. Choose your plan (free tier available)

1. Start tracking visitor data

### 7.2 View Analytics

- **Dashboard:** Shows real-time visitor stats

- **Bandwidth:** Monitor data usage

- **Builds:** Track deployment history

- **Performance:** Check page load times

---

## Step 8: Configure SSL Certificate

**Netlify automatically provides free SSL certificates via Let's Encrypt.**

### Verify HTTPS

1. Visit your domain: `https://yumepsicologia.com.br`

1. Look for the green lock icon in your browser

1. Click the lock to verify certificate details

### SSL Settings (Optional )

1. Go to **"Site settings"** → **"Domain management"**

1. Under your domain, you'll see SSL certificate status

1. Netlify auto-renews certificates (no action needed)

✅ Your site is secure with HTTPS!

---

## Step 9: Set Up Redirects (Optional)

If you want to redirect `www.yumepsicologia.com.br` to `yumepsicologia.com.br`:

1. Create a file: `public/_redirects`

1. Add:

   ```
   https://www.yumepsicologia.com.br/* https://yumepsicologia.com.br/:splat 301!
   ```

1. Commit and push:

   ```bash
   git add public/_redirects
   git commit -m "Add www redirect"
   git push origin main
   ```

---

## Step 10: Post-Deployment Checklist

After deploying, verify everything works:

- [ ] Website loads on custom domain (`https://yumepsicologia.com.br` )

- [ ] HTTPS works (green lock icon)

- [ ] All pages load correctly

- [ ] Navigation links work

- [ ] WhatsApp links work (test clicking a CTA button)

- [ ] Email links work

- [ ] Images load correctly

- [ ] Mobile responsive (test on phone)

- [ ] Smooth scroll animations work

- [ ] Footer links work

- [ ] Analytics tracking active (check Netlify dashboard)

---

## 🔄 Ongoing Maintenance

### Making Updates

Every time you update your code:

```bash
# Make changes to your files
# Then:
git add .
git commit -m "Describe your changes"
git push origin main
# Netlify automatically deploys!
```

### Monitoring Deployments

1. Go to Netlify dashboard

1. Click **"Deploys"** tab

1. See all deployments with timestamps

1. Click any deployment to see build logs

### Rollback to Previous Version

If something breaks:

1. Go to **"Deploys"** tab

1. Find the previous working deployment

1. Click the three dots → **"Publish deploy"**

1. Your site reverts to that version instantly

---

## 🆘 Troubleshooting

### Build Fails

**Error:** "Build failed"

**Solution:**

1. Check build logs in Netlify dashboard

1. Common issues:
  - Missing dependencies: Run `pnpm install` locally
  - Wrong build command: Should be `pnpm build`
  - Wrong publish directory: Should be `dist/public`

### Site Not Loading

**Error:** "Cannot GET /"

**Solution:**

1. Verify publish directory is `dist/public`

1. Check that `pnpm build` creates this directory

1. Verify `client/index.html` exists in the project

### Domain Not Resolving

**Error:** "Cannot find server"

**Solution:**

1. Wait 24–48 hours for DNS propagation

1. Check DNS settings in your registrar

1. Use online DNS checker: [dnschecker.org](https://dnschecker.org)

1. Verify nameservers match Netlify's settings

### WhatsApp Links Not Working

**Error:** Links open but don't work

**Solution:**

1. Verify phone number format: `+55 11 99999-9999` (with country code)

1. Test URL encoding: `https://wa.me/5511999999999`

1. Ensure number is valid and has WhatsApp

### Images Not Loading

**Error:** Broken image icons

**Solution:**

1. Check image URLs in component files

1. Verify CDN URLs are correct

1. Test image URLs directly in browser

1. Ensure images are still hosted on CDN

---

## 📊 Performance Optimization

### Netlify Performance Tips

1. **Enable Netlify Edge Functions** (for advanced caching )

1. **Use Netlify's CDN** (automatic, no setup needed)

1. **Enable compression** (automatic)

1. **Monitor Core Web Vitals** in Analytics

### Check Performance

1. Go to **"Analytics"** → **"Performance"**

1. View page load times

1. Monitor bandwidth usage

1. Check for performance issues

---

## 🔐 Security Best Practices

1. **Keep dependencies updated:**

   ```bash
   pnpm update
   pnpm audit
   ```

1. **Use environment variables for secrets** (if needed)

1. **Enable branch protection on GitHub:**
  - Go to repository → **"Settings"** → **"Branches"**
  - Require pull request reviews before merging

1. **Monitor Netlify security alerts:**
  - Check **"Site settings"** → **"Security"** regularly

---

## 💰 Netlify Pricing

| Feature | Free Tier | Pro Tier |
| --- | --- | --- |
| **Bandwidth** | 100 GB/month | Unlimited |
| **Build minutes** | 300/month | 1,000/month |
| **Deployments** | Unlimited | Unlimited |
| **Custom domains** | ✅ | ✅ |
| **SSL certificate** | ✅ Auto | ✅ Auto |
| **Analytics** | ❌ | ✅ |
| **Cost** | $0/month | $19/month |

**For most small businesses, the free tier is sufficient.**

---

## 📞 Support Resources

- **Netlify Docs:** [https://docs.netlify.com](https://docs.netlify.com)

- **Netlify Support:** [https://support.netlify.com](https://support.netlify.com)

- **Netlify Community:** [https://community.netlify.com](https://community.netlify.com)

- **GitHub Help:** [https://docs.github.com](https://docs.github.com)

---

## 🎉 You're Done!

Your Yume Psicologia website is now live on Netlify with:

✅ Professional hosting✅ Automatic deployments✅ Free SSL certificate✅ Global CDN✅ Custom domain✅ Analytics✅ Easy rollbacks

**Next steps:**

1. Share your domain with friends and family

1. Monitor analytics in Netlify dashboard

1. Make updates by pushing to GitHub

1. Plan future enhancements

---

## Quick Reference: Common Commands

```bash
# Update WhatsApp number in all files
sed -i 's/5511999999999/YOUR_REAL_NUMBER/g' client/src/**/*.tsx

# Check build locally
pnpm build

# Preview production build
pnpm preview

# Update dependencies
pnpm update

# Check for security issues
pnpm audit

# Deploy changes to GitHub (Netlify auto-deploys )
git add .
git commit -m "Your message"
git push origin main
```

---

**Last Updated:** March 16, 2026**Version:** 1.0.0**Platform:** Netlify

