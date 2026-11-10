# Lighthouse Agency Website - Beginner Deployment & Management Guide

Welcome to the official repository for **Lighthouse** video editing agency website. This guide explains how to deploy your site for free, update content, and manage collaborators.

---

## 1. How to Deploy for Free on GitHub Pages

1. Create a new public repository on GitHub (e.g., named `lighthouse-agency`).
2. Upload these files to the repository root directory:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/logo.png`
3. Go to your repository **Settings** -> **Pages**.
4. Under **Build and deployment**, select **Source** as `Deploy from a branch` and choose `main` / `root` directory, then click **Save**.
5. Your website will be live in less than a minute at: `https://yourusername.github.io/lighthouse-agency/`

---

## 2. How to Edit Content & Portfolio Videos

* **To update texts:** Open `index.html` or `script.js` and look for comments marked with `[EDIT HERE]`.
* **To add/change portfolio videos:** 
  In `index.html`, locate the iframe source links:
  ```html
  <iframe src="[https://www.youtube.com/embed/YOUR_VIDEO_ID_1](https://www.youtube.com/embed/YOUR_VIDEO_ID_1)" ...></iframe>