# Quick Netlify Deployment — Step by Step

## 🚀 Deploy Your Website in 5 Minutes

Follow these simple steps to deploy your Yume Psicologia website on Netlify.

---

## Step 1: Go to Netlify

1. Open your browser and go to: **https://netlify.com**
2. You should see the Netlify homepage

---

## Step 2: Sign Up or Log In

### If you don't have a Netlify account:
1. Click **"Sign up"** button
2. Click **"Sign up with GitHub"** (easiest option)
3. Click **"Authorize Netlify"** to connect your GitHub account
4. Complete your profile setup

### If you already have a Netlify account:
1. Click **"Log in"**
2. Click **"GitHub"** to log in with GitHub

---

## Step 3: Create a New Site

After logging in, you'll see the Netlify dashboard:

1. Click **"Add new site"** button (top-right area)
2. Select **"Import an existing project"**
3. Click **"GitHub"** as your Git provider
4. A popup will appear asking to authorize Netlify

---

## Step 4: Authorize Netlify to Access GitHub

1. Click **"Authorize Netlify"** in the popup
2. You may need to enter your GitHub password
3. Netlify will now have access to your repositories

---

## Step 5: Select Your Repository

1. Search for **"yume-psicologia"** in the search box
2. Click on your **"yume-psicologia"** repository
3. Click **"Install"** to grant Netlify access

---

## Step 6: Configure Build Settings

After selecting your repository, Netlify will show a configuration page:

### Fill in these settings:

**Branch to deploy:** `main`

**Build command:** 
```
pnpm build
```

**Publish directory:** 
```
dist/public
```

**Environment variables:** (Leave empty for now)

---

## Step 7: Deploy!

1. Click the **"Deploy site"** button
2. Netlify will start building your website
3. Watch the build process in real-time (should take 2-3 minutes)

### You'll see:
```
Installing dependencies...
Running build command...
Building with Vite...
✓ Build complete
Deploying site...
✓ Site deployed
```

---

## Step 8: Your Site is Live! 🎉

After deployment completes, you'll see:

- **Site URL:** Something like `https://yume-psicologia.netlify.app`
- **Status:** "Published"
- **Build status:** "Success"

**Visit your site:** Click the URL to see your live website!

---

## Step 9: Add Your Custom Domain (Optional)

If you have a custom domain like `yumepsicologia.com.br`:

1. In Netlify dashboard, go to **"Site settings"**
2. Click **"Domain management"**
3. Click **"Add custom domain"**
4. Enter your domain: `yumepsicologia.com.br`
5. Click **"Verify"**
6. Follow the DNS setup instructions (Netlify will guide you)

---

## ✅ Deployment Checklist

- [ ] Created Netlify account
- [ ] Authorized Netlify to access GitHub
- [ ] Selected your repository
- [ ] Set build command to `pnpm build`
- [ ] Set publish directory to `dist/public`
- [ ] Clicked "Deploy site"
- [ ] Waited for build to complete
- [ ] Visited your live site
- [ ] Verified everything looks good

---

## 🔄 Automatic Deployments

**Great news:** Every time you push changes to GitHub, Netlify automatically rebuilds and deploys your site!

### To make updates:

1. Edit your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. Netlify automatically deploys within 2-3 minutes
4. Your changes appear on your live site

---

## 🆘 Troubleshooting

### Build Failed

**Error:** "Build failed"

**Solution:**
1. Click on the failed deployment to see logs
2. Look for error messages
3. Common issues:
   - Wrong build command (should be `pnpm build`)
   - Wrong publish directory (should be `dist/public`)
   - Missing dependencies

### Site Not Loading

**Error:** "Cannot GET /"

**Solution:**
1. Check that publish directory is `dist/public`
2. Verify build command is `pnpm build`
3. Try redeploying

### Domain Not Working

**Error:** "Cannot find server"

**Solution:**
1. Wait 24-48 hours for DNS to propagate
2. Check your DNS settings in your domain registrar
3. Verify nameservers match Netlify's settings

---

## 📊 Monitor Your Site

After deployment, you can:

1. **View Analytics:** Click "Analytics" tab
   - See visitor stats
   - Track page views
   - Monitor performance

2. **View Deployments:** Click "Deploys" tab
   - See all deployments
   - View build logs
   - Rollback to previous versions

3. **Check Performance:** Click "Analytics" → "Performance"
   - Page load times
   - Bandwidth usage
   - Core Web Vitals

---

## 🎯 Before Going Live

**Update these in your code before deploying:**

1. **WhatsApp Number** — Replace `5511999999999` with your real number
2. **Email Address** — Replace `contato@yumepsicologia.com.br`
3. **Team Information** — Update names and credentials
4. **Legal Details** — Update CNPJ and CRP numbers

Then commit and push:
```bash
git add .
git commit -m "Update contact information"
git push origin main
```

Netlify will automatically redeploy! ✨

---

## 📞 Need Help?

- **Netlify Support:** https://support.netlify.com
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Help:** https://docs.github.com

---

**That's it! Your website is now live on Netlify!** 🚀

For more detailed information, see [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md)
