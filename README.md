# Bitcoin Alaska: Open Forum & Education Sessions

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://yourusername.github.io/btcalaska-edu-sessions/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Interactive Bitcoin education presentation for Alaska** - covering philosophy, technical skills, and Alaska-specific opportunities.

## 🎯 Live Presentation

**View the presentation:** [https://xaxis.github.io/btcalaska/](https://xaxis.github.io/btcalaska/)

## 📋 Session Overview

**Format Update:** We've transformed our structured sessions into a relaxed, community-driven open Q&A forum and workgroup. Come with your questions, curiosity, and desire to learn together!

### Key Features
- **Open Forum Format:** Interactive Q&A and hands-on demonstrations
- **Philosophy Focus:** Deep dive into the philosophy of money and Bitcoin's role as sound money
- **Technical Topics:** Cold storage, node operation, mining, Lightning Network, and more
- **Community Learning:** Your questions drive our discussion
- **Alaska-Specific:** Tailored for Alaska's unique environment and opportunities

## 🎮 Presentation Controls

### Navigation
- **Arrow Keys:** Previous/Next slide
- **Spacebar:** Next slide
- **Home/End:** First/Last slide
- **F or F11:** Toggle fullscreen
- **Escape:** Exit fullscreen

### Mobile Support
- **Swipe left:** Next slide
- **Swipe right:** Previous slide
- **Touch controls:** Navigation buttons

### Features
- **Progress bar:** Visual progress indicator
- **Auto-save:** Remembers your position
- **URL navigation:** Direct links to specific slides
- **Print support:** Print all slides
- **Responsive design:** Works on all devices

## 📚 Content Overview

| Topic Category | Content |
|----------------|---------|
| [**Philosophy of Money & Bitcoin**](#philosophy) | Sound money principles, Austrian economics, individual sovereignty |
| [**Cold Storage & Security**](#security) | Air-gapped wallets, multisig security, Alaska-specific threat modeling |
| [**Node Operation**](#nodes) | Raspberry Pi Bitcoin nodes, Lightning Network, privacy & sovereignty |
| [**Home Mining**](#mining) | Bitaxe Ultra ASIC mining, renewable energy advantages, heat recovery |

## 🚀 Getting Started

### For Presenters
1. **Fork this repository**
2. **Update `_config.yml`** with your GitHub username and repository name
3. **Enable GitHub Pages** in repository settings
4. **Customize content** in `js/slides.js` if needed
5. **Present!** Share the GitHub Pages URL

### For Developers
```bash
# Clone the repository
git clone https://github.com/yourusername/btcalaska-edu-sessions.git
cd btcalaska-edu-sessions

# Serve locally (optional)
python -m http.server 8000
# or
npx serve .

# Open in browser
open http://localhost:8000
```

## 📁 Project Structure

```
btcalaska-edu-sessions/
├── index.html              # Main presentation file
├── js/
│   ├── slides.js           # Slide content and data
│   └── presentation.js     # Presentation logic and controls
├── assets/                 # Images, icons, and media
├── slide-*.md             # Individual slide content (markdown)
├── _config.yml            # GitHub Pages configuration
└── README.md              # This file
```

## 🎨 Customization

### Adding New Slides
Edit `js/slides.js` and add new slide objects:

```javascript
{
    id: 18,
    title: "Your New Slide",
    subtitle: "Optional subtitle",
    theme: "philosophy-theme", // or "alaska-theme" or ""
    content: `
        <h3 class="bitcoin-orange">Your Content</h3>
        <p>Your slide content here...</p>
    `
}
```

### Styling
- **Bitcoin Orange:** `#F7931A`
- **Gold:** `#FFD700`
- **Themes:** `philosophy-theme`, `alaska-theme`
- **CSS:** Modify styles in `index.html` `<style>` section

### Configuration
Update `_config.yml` with your:
- GitHub username
- Repository name
- Contact information
- Social media links

## 📖 Content Overview (22 Slides)

### Main Presentation (Slides 1-17)
1. **Title & Introduction** - Community-driven learning approach
2. **Format Change** - Why open forum works better
3. **Session Overview** - Philosophy and technical tracks
4. **What is Money?** - Complete history and evolution
5. **Fiat Problems** - Detailed analysis of current system
6. **Bitcoin's Foundation** - Satoshi's vision and principles
7. **Sound Money** - Bitcoin's perfection of money properties
8. **Individual Sovereignty** - Self-custody and financial freedom
9. **Austrian Economics** - Economic theory behind Bitcoin
10. **Alaska Perspective** - Unique advantages and alignment
11. **Technical Overview** - Hands-on skills introduction
12. **Cold Storage** - Security for Alaska's environment
13. **Node Operation** - Running your own Bitcoin node
14. **Alaska Mining** - Energy abundance and mining opportunities
15. **Open Forum** - How the interactive session works
16. **Key Takeaways** - Essential principles to remember
17. **Thank You** - Community building and next steps

### Detailed Appendices (Slides 18-22)
18. **Appendix A: Essential Resources** - Comprehensive reading list, podcasts, learning schedules
19. **Appendix B: Hardware Guide** - Detailed specs for wallets, nodes, mining equipment
20. **Appendix C: Security Protocols** - Advanced security frameworks for Alaska
21. **Appendix D: Alaska Opportunities** - Economic analysis and business development
22. **Appendix E: Technical Deep Dive** - Bitcoin protocol, Lightning Network, development

### Content Topics

### Philosophy
- **What is Money?** Historical evolution and properties of sound money
- **Fiat Currency Problems:** Inflation, central bank control, currency failures
- **Bitcoin's Foundation:** Satoshi's vision, decentralization, cryptographic proof
- **Austrian Economics:** Sound money theory, time preference, Cantillon effect
- **Individual Sovereignty:** Financial freedom, privacy, censorship resistance
- **Alaska Perspective:** Self-reliance, energy abundance, financial independence

### Technical
- **Cold Storage & Security:** Hardware wallets, multisig, backup strategies
- **Node Operation:** Raspberry Pi setup, Lightning Network, privacy
- **Home Mining:** Bitaxe Ultra, renewable energy, heat recovery
- **Lightning Network:** Instant payments, channel management, LNURL

### Alaska-Specific
- **Energy Advantages:** Renewable resources, stranded energy monetization
- **Climate Benefits:** Natural cooling, heat recovery systems
- **Cultural Alignment:** Self-reliance values, community cooperation
- **Economic Opportunities:** Mining, tourism, financial services

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Content Contributions
- Improve existing slide content
- Add new slides or topics
- Enhance Alaska-specific information
- Update technical details

### Technical Contributions
- Improve presentation functionality
- Add new features (timer, notes, etc.)
- Enhance mobile experience
- Optimize performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website:** [bitcoinalaska.org](https://bitcoinalaska.org)
- **Email:** info@bitcoinalaska.org
- **Twitter:** [@BitcoinAlaska](https://twitter.com/BitcoinAlaska)
- **Telegram:** @BitcoinAlaska

## 🙏 Acknowledgments

- **Satoshi Nakamoto** - For creating Bitcoin
- **Bitcoin Community** - For continuous education and development
- **Alaska Bitcoin Community** - For local support and collaboration
- **Open Source Contributors** - For tools and inspiration

---

**Built with ❤️ for the Alaska Bitcoin community**
