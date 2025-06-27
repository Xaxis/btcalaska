# Deployment Guide: GitHub Pages Setup

This guide will help you deploy the Bitcoin Alaska presentation to GitHub Pages.

## Quick Setup (5 minutes)

### Step 1: Fork or Create Repository
1. **Fork this repository** or create a new one
2. **Clone to your local machine** (optional)
3. **Name your repository** (e.g., `btcalaska-edu-sessions`)

### Step 2: Update Configuration
Edit `_config.yml` and update these fields:
```yaml
url: "https://YOURUSERNAME.github.io"
baseurl: "/YOURREPOSITORYNAME"

author:
  name: "Your Name"
  email: "your.email@example.com"
  twitter: "YourTwitter"
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### Step 4: Access Your Presentation
Your presentation will be available at:
```
https://YOURUSERNAME.github.io/YOURREPOSITORYNAME/
```

## Advanced Configuration

### Custom Domain (Optional)
1. **Purchase a domain** (e.g., `bitcoinalaska.org`)
2. **Add CNAME file** to repository root:
   ```
   bitcoinalaska.org
   ```
3. **Configure DNS** with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOURUSERNAME.github.io
   ```
4. **Update _config.yml**:
   ```yaml
   url: "https://bitcoinalaska.org"
   baseurl: ""
   ```

### SSL Certificate
GitHub Pages automatically provides SSL certificates for:
- `*.github.io` domains
- Custom domains (after DNS verification)

### Analytics (Optional)
Add Google Analytics to `_config.yml`:
```yaml
google_analytics: UA-XXXXXXXX-X
```

## Customization

### Update Slide Content
Edit `js/slides.js` to modify slide content:
```javascript
const slideData = [
    {
        id: 1,
        title: "Your Title",
        subtitle: "Your Subtitle",
        theme: "philosophy-theme",
        content: `<p>Your content here</p>`
    }
    // Add more slides...
];
```

### Modify Styling
Edit the `<style>` section in `index.html`:
```css
.bitcoin-orange {
    color: #F7931A; /* Your brand color */
}
```

### Add Images
1. **Upload images** to `assets/` folder
2. **Reference in slides**:
   ```html
   <img src="assets/your-image.jpg" alt="Description">
   ```

## Testing Locally

### Option 1: Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Option 2: Jekyll (Full GitHub Pages simulation)
```bash
# Install Jekyll
gem install bundler jekyll

# Create Gemfile
echo 'source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins' > Gemfile

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve
```

## Troubleshooting

### Common Issues

**1. 404 Error**
- Check repository name in `_config.yml`
- Ensure GitHub Pages is enabled
- Verify branch selection (usually `main`)

**2. CSS/JS Not Loading**
- Check `baseurl` in `_config.yml`
- Ensure file paths are correct
- Clear browser cache

**3. Images Not Displaying**
- Verify image files are in `assets/` folder
- Check file names and extensions
- Ensure images are properly committed

**4. Slides Not Loading**
- Check JavaScript console for errors
- Verify `js/slides.js` syntax
- Ensure all required files are present

### Build Errors
Check the **Actions** tab in your GitHub repository for build logs.

Common fixes:
- Fix YAML syntax in `_config.yml`
- Remove invalid characters from file names
- Ensure all required files are present

## Performance Optimization

### Image Optimization
- Compress images before uploading
- Use appropriate formats (JPG for photos, PNG for graphics)
- Consider WebP format for better compression

### Caching
GitHub Pages automatically handles caching with appropriate headers.

### CDN
GitHub Pages uses a global CDN for fast loading worldwide.

## Security

### HTTPS
- Always enabled for `*.github.io` domains
- Automatically configured for custom domains

### Content Security
- Avoid inline JavaScript when possible
- Use HTTPS for all external resources
- Validate user inputs if adding interactive features

## Backup and Version Control

### Git Best Practices
```bash
# Regular commits
git add .
git commit -m "Update slide content"
git push origin main

# Create releases for major versions
git tag -a v1.0 -m "Initial release"
git push origin v1.0
```

### Backup Strategy
- Repository is automatically backed up on GitHub
- Consider additional backups for important customizations
- Export slide content periodically

## Monitoring

### GitHub Pages Status
- Check [GitHub Status](https://www.githubstatus.com/) for service issues
- Monitor repository **Actions** tab for build status

### Analytics
- Set up Google Analytics for visitor tracking
- Monitor presentation usage and popular slides

## Support

### Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Community Forum](https://github.community/)

### Getting Help
1. Check this documentation first
2. Search GitHub Issues in this repository
3. Create a new issue with detailed description
4. Contact the maintainers

---

**Your presentation should be live within 5-10 minutes of enabling GitHub Pages!**
