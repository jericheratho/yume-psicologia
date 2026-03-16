# Yume Psicologia — Deployment Guide

This guide covers all deployment options for your website, from the easiest (Manus built-in hosting) to self-hosted solutions.

---

## 🚀 Option 1: Deploy on Manus (Recommended — Easiest)

**Manus provides built-in hosting with custom domain support, SSL certificates, and automatic deployments.**

### Prerequisites

- Active Manus project (already created)
- Latest checkpoint saved
- Updated contact information (WhatsApp, email)

### Steps

1. **Save a Checkpoint**
   ```bash
   # In the Manus Management UI, create a checkpoint
   # This is required before publishing
   ```

2. **Publish the Website**
   - Click the **"Publish"** button in the top-right of the Management UI
   - Manus will build and deploy automatically
   - You'll receive a public URL: `https://yume-psicologia.manus.space`

3. **Set Up Custom Domain (Optional)**
   - Go to **Settings → Domains** in the Management UI
   - **Option A:** Purchase a new domain directly in Manus
   - **Option B:** Bind an existing domain (update DNS records)
   - **Option C:** Use the auto-generated Manus subdomain

### Advantages

✅ Zero configuration  
✅ Automatic SSL certificates (HTTPS)  
✅ Global CDN  
✅ One-click deployments  
✅ Automatic backups  
✅ Analytics included  
✅ No server management  

### Cost

- Manus hosting is included with your subscription
- Custom domains may have additional fees

---

## 🌐 Option 2: Deploy on Vercel (Popular for React)

**Vercel is optimized for Next.js/React and offers free tier with excellent performance.**

### Prerequisites

- GitHub account
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/yume-psicologia.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

3. **Configure Build Settings**
   - **Framework:** Vite
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `pnpm install`

4. **Add Environment Variables**
   - Go to **Settings → Environment Variables**
   - Add any required `.env` variables (if using backend features)

5. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Your site is live at `https://yume-psicologia.vercel.app`

6. **Connect Custom Domain**
   - Go to **Settings → Domains**
   - Add your custom domain
   - Update DNS records (Vercel provides instructions)

### Advantages

✅ Free tier (up to 100 GB bandwidth/month)  
✅ Automatic deployments on git push  
✅ Built-in SSL  
✅ Global CDN  
✅ Analytics & monitoring  
✅ Easy rollbacks  

### Disadvantages

❌ Requires GitHub  
❌ Limited backend capabilities (use serverless functions)  
❌ Paid tier for high traffic  

### Cost

- Free tier: $0/month (sufficient for most small businesses)
- Pro tier: $20/month (if needed)

---

## 🚀 Option 3: Deploy on Netlify

**Netlify is similar to Vercel with excellent React support.**

### Prerequisites

- GitHub account
- Netlify account (free tier available)

### Steps

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site → Import an existing project"
   - Select GitHub and authorize
   - Choose your repository

3. **Configure Build Settings**
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist/public`
   - **Node version:** 22 (or latest)

4. **Deploy**
   - Netlify auto-deploys on git push
   - Your site is live at `https://yume-psicologia.netlify.app`

5. **Connect Custom Domain**
   - Go to **Domain settings**
   - Add your custom domain
   - Update DNS records

### Advantages

✅ Free tier with generous limits  
✅ Automatic deployments  
✅ Built-in SSL  
✅ Form handling (if needed)  
✅ Serverless functions support  

### Cost

- Free tier: $0/month
- Pro tier: $19/month

---

## 🐳 Option 4: Deploy on Railway (Simple Self-Hosted)

**Railway is a modern platform for deploying full-stack applications with minimal configuration.**

### Prerequisites

- GitHub account
- Railway account (free tier available)

### Steps

1. **Push to GitHub**

2. **Connect to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project → Deploy from GitHub"
   - Authorize and select your repository

3. **Configure Environment**
   - Railway auto-detects Node.js
   - No additional configuration needed for static sites

4. **Deploy**
   - Click "Deploy"
   - Railway builds and deploys automatically
   - Your site is live at `https://yume-psicologia.up.railway.app`

5. **Connect Custom Domain**
   - Go to **Settings → Domains**
   - Add your custom domain
   - Update DNS records

### Advantages

✅ Simple deployment  
✅ Free tier with $5 credit/month  
✅ Built-in SSL  
✅ Environment variables support  
✅ Good for full-stack apps  

### Cost

- Free tier: $5 credit/month (usually sufficient)
- Pay-as-you-go: $0.50/hour for compute

---

## 🏠 Option 5: Self-Hosted on VPS (Advanced)

**For full control, deploy on your own server (DigitalOcean, Linode, AWS, etc.).**

### Prerequisites

- VPS with Ubuntu 22.04 (or similar)
- SSH access to server
- Domain name

### Steps

1. **Prepare Your Server**
   ```bash
   # SSH into your server
   ssh root@YOUR_SERVER_IP
   
   # Update system
   apt update && apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   apt install -y nodejs
   
   # Install pnpm
   npm install -g pnpm
   
   # Install Nginx (reverse proxy)
   apt install -y nginx
   
   # Install SSL (Certbot)
   apt install -y certbot python3-certbot-nginx
   ```

2. **Clone Your Repository**
   ```bash
   cd /var/www
   git clone https://github.com/YOUR_USERNAME/yume-psicologia.git
   cd yume-psicologia
   pnpm install
   ```

3. **Build the Application**
   ```bash
   pnpm build
   # Creates dist/public/ (static files) and dist/index.js (server)
   ```

4. **Configure Nginx**
   ```bash
   # Create Nginx config
   sudo nano /etc/nginx/sites-available/yume-psicologia
   ```

   Add:
   ```nginx
   server {
       listen 80;
       server_name yumepsicologia.com.br www.yumepsicologia.com.br;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   # Enable the site
   sudo ln -s /etc/nginx/sites-available/yume-psicologia /etc/nginx/sites-enabled/
   
   # Test Nginx config
   sudo nginx -t
   
   # Restart Nginx
   sudo systemctl restart nginx
   ```

5. **Set Up SSL Certificate**
   ```bash
   sudo certbot --nginx -d yumepsicologia.com.br -d www.yumepsicologia.com.br
   ```

6. **Start the Application**
   ```bash
   # Install PM2 (process manager)
   npm install -g pm2
   
   # Start the app
   cd /var/www/yume-psicologia
   pm2 start dist/index.js --name "yume-psicologia"
   
   # Enable auto-restart on reboot
   pm2 startup
   pm2 save
   ```

7. **Set Up Auto-Deployments (Optional)**
   ```bash
   # Create a deploy script
   nano /var/www/yume-psicologia/deploy.sh
   ```

   Add:
   ```bash
   #!/bin/bash
   cd /var/www/yume-psicologia
   git pull origin main
   pnpm install
   pnpm build
   pm2 restart yume-psicologia
   ```

   Make it executable:
   ```bash
   chmod +x /var/www/yume-psicologia/deploy.sh
   ```

8. **Update DNS**
   - Point your domain to your server's IP address
   - Update A record: `yumepsicologia.com.br → YOUR_SERVER_IP`

### Advantages

✅ Full control  
✅ No vendor lock-in  
✅ Scalable  
✅ Cheap (VPS from $5/month)  

### Disadvantages

❌ Requires server management  
❌ Manual deployments  
❌ Need to manage SSL certificates  
❌ Responsible for security & backups  

### Cost

- VPS: $5–$20/month (DigitalOcean, Linode)
- Domain: $10–$15/year

---

## 📊 Deployment Comparison

| Feature | Manus | Vercel | Netlify | Railway | Self-Hosted |
|---------|-------|--------|---------|---------|-------------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Cost** | Included | Free | Free | $5/mo | $5–$20/mo |
| **SSL/HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Manual |
| **Custom Domain** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Global CDN** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Auto-Deploy** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Uptime SLA** | 99.9% | 99.95% | 99.99% | 99.5% | Your responsibility |
| **Support** | Manus team | Vercel team | Netlify team | Railway team | Community |

---

## 🎯 Recommended Deployment Path

### For Most Users: **Manus Built-in Hosting**

1. Save a checkpoint in the Manus Management UI
2. Click "Publish" button
3. Add custom domain in Settings → Domains
4. Done! Your site is live with SSL, CDN, and analytics

**Why?**
- Zero configuration
- Already integrated with your project
- Automatic deployments
- Professional support
- Included with your subscription

---

## 🔄 Post-Deployment Checklist

After deploying, verify:

- [ ] Website loads on custom domain
- [ ] HTTPS works (lock icon in browser)
- [ ] All pages accessible
- [ ] WhatsApp links work
- [ ] Email links work
- [ ] Images load correctly
- [ ] Mobile responsive (test on phone)
- [ ] Navigation smooth scrolls
- [ ] Forms submit correctly (if applicable)
- [ ] Analytics tracking active

---

## 🚨 Important: Update Before Deploying

**Update these in your code before publishing:**

1. **WhatsApp Number**
   ```bash
   # Find and replace 5511999999999 with your real number
   grep -r "5511999999999" client/src/
   ```

2. **Email Address**
   ```bash
   # Find and replace contato@yumepsicologia.com.br
   grep -r "contato@yumepsicologia.com.br" client/src/
   ```

3. **Team Information**
   - Update team member names, credentials, and photos
   - Update Instagram links
   - Update CRP numbers

4. **Legal Information**
   - Update CNPJ in footer
   - Update company name if different
   - Ensure LGPD compliance

---

## 🔐 Security Best Practices

1. **Enable HTTPS** (all platforms do this automatically)
2. **Set Security Headers**
   ```nginx
   # Add to Nginx config if self-hosting
   add_header X-Frame-Options "SAMEORIGIN";
   add_header X-Content-Type-Options "nosniff";
   add_header X-XSS-Protection "1; mode=block";
   ```

3. **Keep Dependencies Updated**
   ```bash
   pnpm update
   pnpm audit
   ```

4. **Use Environment Variables** for sensitive data
5. **Regular Backups** (especially if self-hosting)

---

## 📈 Monitoring & Analytics

### Manus Analytics
- Built-in dashboard in Management UI
- Track visitors, page views, bounce rate
- No additional setup needed

### Vercel Analytics
- Go to **Analytics** tab in project dashboard
- Real-time metrics

### Netlify Analytics
- Go to **Analytics** tab
- Track performance & traffic

### Self-Hosted Monitoring
- Use Umami (already integrated)
- Configure in `client/index.html`

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist pnpm-lock.yaml
pnpm install
pnpm build
```

### Site Not Loading
- Check domain DNS records
- Verify SSL certificate
- Check server logs

### Slow Performance
- Verify images are optimized (WebP format)
- Check CDN cache settings
- Monitor server resources

### WhatsApp Links Not Working
- Verify phone number format (include country code)
- Test link in browser
- Ensure URL encoding is correct

---

## 📞 Support

- **Manus Support:** https://help.manus.im
- **Vercel Support:** https://vercel.com/support
- **Netlify Support:** https://support.netlify.com
- **Railway Support:** https://docs.railway.app

---

## Next Steps

1. **Choose a deployment platform** (recommend Manus)
2. **Update contact information** in code
3. **Save a checkpoint** in Manus
4. **Deploy** using your chosen platform
5. **Test thoroughly** on live site
6. **Monitor analytics** and performance
7. **Plan updates** for future enhancements

---

**Last Updated:** March 16, 2026  
**Version:** 1.0.0
