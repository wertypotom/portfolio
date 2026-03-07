# Vercel Deployment Guide for Multi-Domain Portfolio

## Overview

This guide covers how to deploy your portfolio to two Vercel domains with different feature sets:

- **Main Domain**: `andreypovstyanko.vercel.app` (Full features)
- **RU Domain**: `andreypovstyanko.ru.vercel.app` (Modified for Kazakhstan audience)

## Prerequisites

- Vercel account connected to your GitHub repository
- Repository: `wertypotom/portfolio` (or your repo name)

## Deployment Steps

### Option 1: Two Separate Projects (Recommended)

This approach gives you two separate Vercel projects pointing to the same repository.

#### Step 1: Deploy Main Domain (Default Variant)

1. **Go to Vercel Dashboard** → Click "Add New Project"
2. **Import Repository** → Select your portfolio repository
3. **Configure Project**:
   - **Project Name**: `portfolio-main` (or your choice)
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Environment Variables**:

   ```
   VITE_SITE_VARIANT=default
   VITE_ANTHROPIC_API_KEY=<your-key>
   ```

5. **Click "Deploy"**

6. **After deployment**, your site will be at `portfolio-main.vercel.app`
   - You can keep this as `andreypovstyanko.vercel.app` if desired

#### Step 2: Deploy RU Domain (RU Variant)

1. **Go to Vercel Dashboard** → Click "Add New Project" again
2. **Import Repository** → Select the SAME portfolio repository
3. **Configure Project**:
   - **Project Name**: `portfolio-ru`
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Environment Variables**:

   ```
   VITE_SITE_VARIANT=ru
   VITE_ANTHROPIC_API_KEY=<your-key>
   ```

5. **Click "Deploy"**

6. **After deployment**, configure custom domain:
   - Go to Project Settings → Domains
   - Add `andreypovstyanko.ru.vercel.app` as a custom domain
   - Or use the auto-generated `portfolio-ru.vercel.app`

### Option 2: Single Project with Branch-Based Deployment

If you prefer managing from a single project:

1. Create two branches:
   - `main` → For default variant
   - `ru-variant` → For RU variant

2. Configure different environment variables per branch in Vercel:
   - Project Settings → Environment Variables
   - Set `VITE_SITE_VARIANT=default` for `main` branch
   - Set `VITE_SITE_VARIANT=ru` for `ru-variant` branch

3. Configure domains to point to different branches

> **Note**: Option 1 (Two Separate Projects) is simpler and easier to manage.

## Feature Differences

### Default Variant (`VITE_SITE_VARIANT=default`)

- ✅ LinkedIn link in footer
- ✅ Location: "Milwaukee, WI • Open to relocation across the US"
- ✅ Phone: +1 414-324-2521
- ✅ Email, GitHub contacts
- ❌ No WhatsApp
- ❌ No Telegram

### RU Variant (`VITE_SITE_VARIANT=ru`)

- ❌ No LinkedIn link
- ✅ Location: "Kazakhstan, Almaty"
- ✅ Phone: +7 775 826 5262
- ✅ Email, GitHub contacts
- ✅ WhatsApp (+7 775 826 5262)
- ✅ Telegram (@wertypotom)

## Verifying Deployment

After deployment, verify each domain:

### Main Domain Checklist

- [ ] Visit `andreypovstyanko.vercel.app`
- [ ] Verify LinkedIn icon appears in footer
- [ ] Verify location shows "Milwaukee, WI"
- [ ] Click phone link → Should dial +1 414-324-2521
- [ ] Verify 4 contact icons (Phone, Email, GitHub, LinkedIn)

### RU Domain Checklist

- [ ] Visit `andreypovstyanko.ru.vercel.app`
- [ ] Verify NO LinkedIn icon in footer
- [ ] Verify location shows "Kazakhstan, Almaty"
- [ ] Click phone link → Should dial +7 775 826 5262
- [ ] Verify 5 contact icons (Phone, Email, WhatsApp, Telegram, GitHub)
- [ ] Click WhatsApp → Opens WhatsApp with correct number
- [ ] Click Telegram → Opens `t.me/wertypotom`

## Updating Both Sites

When you push changes to your repository:

- **Option 1 (Two Projects)**: Both projects will auto-deploy
- **Option 2 (Branches)**: Merge changes to both branches

## Troubleshooting

### Icons Not Showing

Ensure `react-icons` is installed:

```bash
npm install react-icons
```

### Environment Variable Not Working

- Make sure to redeploy after adding environment variables
- Check that variable name is exactly `VITE_SITE_VARIANT` (case-sensitive)

### Build Fails

Check build logs in Vercel dashboard for specific errors.
