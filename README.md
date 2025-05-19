# Bitcoin Alaska Conference — Education Sessions

| Time (AKDT) | Session Title | Description |
|-------------|---------------|-------------|
| **09 : 00 – 10 : 30** | [**Cold-Storage Mastery: Air-Gapped Wallets & Multisig Fundamentals**](#session-1-cold-storage-mastery-air-gapped-wallets--multisig-fundamentals) | • Air-gapped wallets & multisig security<br>• Generating secure seeds & passphrases<br>• Robust backup & recovery strategies |
| **11 : 00 – 12 : 30** | [**Run Your Own Node: Raspberry Pi 5 + Lightning Hub in 90 Minutes**](#session-2-run-your-own-node-raspberry-pi-5--lightning-hub-in-90-minutes) | • Building & configuring Bitcoin nodes<br>• Lightning Network channel setup<br>• Node security & remote management |
| **14 : 00 – 15 : 30** | [**Home Mining 101: Build & Hash with the Bitaxe Ultra (BM1366 ASIC)**](#session-3-home-mining-101-build--hash-with-the-bitaxe-ultra-bm1366-asic) | • DIY ASIC miner assembly & setup<br>• Mining pools & Stratum v2 basics<br>• Mining profitability & environmental optimization |

---

## Session 1: Cold-Storage Mastery: Air-Gapped Wallets & Multisig Fundamentals  
**Time:** 09:00 – 10:30 AKDT  

**Session Introduction:**  
In this session, you'll master the essentials of securing your Bitcoin holdings using air-gapped hardware wallets and multisignature setups. You'll learn practical threat-modeling tailored specifically to the unique challenges of Alaska, discover how to generate truly secure cryptographic seeds, validate hardware wallet authenticity, and confidently build robust, redundant backup solutions to protect your assets in the harshest conditions.

**Detailed Lesson Plan:**  
- **Threat-Modeling for Alaskan Realities (10 mins)**  
  - Unique risks: extreme weather, remote living, physical security concerns  
  - Developing realistic security plans based on lifestyle and environment  

- **Creating True Entropy (10 mins, Hands-on)**  
  - Dice rolls, camera noise (SeedSigner), and SeedPicker validations  
  - Confirming high-quality randomness and mitigating entropy attacks  

- **Verifying Firmware & Supply-Chain Provenance (15 mins, Hands-on)**  
  - Coldcard Mk4, SeedSigner, Passport Batch 3 firmware integrity checks  
  - Using GPG signatures and SHA-256 verification to detect tampering  

- **Generating and Securing BIP-39 Seeds (15 mins, Hands-on)**  
  - Step-by-step generation of seed phrases  
  - Implementing BIP-39 passphrases ("13th word") and testing recovery processes  

- **Air-Gap Signing: PSBT Protocols (15 mins, Hands-on)**  
  - Secure offline transaction signing methods (QR codes, NFC, micro-SD)  
  - Evaluating operational security trade-offs of different air-gap techniques  

- **Multisig Vault Setup (15 mins, Hands-on)**  
  - Constructing a secure 2-of-3 multisig wallet using Bitcoin Core and Sparrow  
  - Creating watch-only wallets for secure balance monitoring  

- **Backup & Recovery Strategies (10 mins, Discussion/Demo)**  
  - Techniques: stainless-steel seed backups, Shamir’s Secret Sharing  
  - Geographically separated storage strategies for disaster resilience  
  - Rapid recovery drill: real-time restoration demo from seed phrases  

---

## Session 2: Run Your Own Node: Raspberry Pi 5 + Lightning Hub in 90 Minutes  
**Time:** 11:00 – 12:30 AKDT  

**Session Introduction:**  
This practical, hands-on session will guide you step-by-step in assembling, deploying, and managing your own Bitcoin full node using a Raspberry Pi 5. You’ll also learn how to set up a Lightning Network node to facilitate instant, low-cost Bitcoin payments. We’ll focus heavily on best practices for security, network privacy, and robust remote management, empowering you with full sovereignty over your Bitcoin interactions.

**Detailed Lesson Plan:**  
- **Node Hardware Preparation (15 mins, Hands-on)**  
  - Selecting and assembling components: Pi 5, SSD storage, active cooling  
  - Power options: PoE vs USB-C, battery-backed RTC setup  

- **Installing OS & Validating Bitcoin Core (10 mins, Hands-on)**  
  - Flashing 64-bit Debian and verifying Bitcoin Core binaries  
  - Using GPG and SHA-256 hashes for integrity  

- **Initial Block Download & Data Management (15 mins, Hands-on)**  
  - Optimizing the initial sync process (full node vs pruned options)  
  - Configuring external SSD mounts for performance and reliability  

- **Privacy & Remote Access Configuration (10 mins, Hands-on)**  
  - Setting up Tor hidden services for enhanced privacy  
  - Optional clearnet reverse proxy setup with nginx for secure remote access  

- **Installing the RaspiBolt Software Stack (15 mins, Hands-on)**  
  - electrs (Electrum Server), Lightning-Terminal, LND, RTL dashboards setup  
  - Understanding each software's role within the Bitcoin ecosystem  

- **Lightning Network Channel Management (15 mins, Hands-on)**  
  - Opening Lightning channels: Autopilot vs manual setup  
  - Setting fee structures, liquidity management, and testing LNURL authentication  

- **Node Hardening & Remote Management (10 mins, Hands-on)**  
  - Implementing security best practices: ufw firewall, Fail2ban, watchdog  
  - Remote management techniques using tmux, Tailscale, and WireGuard VPN  

---

## Session 3: Home Mining 101: Build & Hash with the Bitaxe Ultra (BM1366 ASIC)  
**Time:** 14:00 – 15:30 AKDT  

**Session Introduction:**  
This session provides a practical deep-dive into Bitcoin mining from the comfort of your home using the Bitaxe Ultra (BM1366 ASIC) hardware. You’ll assemble, configure, and operate your own miner, gaining a clear understanding of mining economics, the factors influencing profitability, and effective methods to manage noise and heat. Learn how Alaska’s unique renewable energy landscape can maximize your mining profitability and sustainability.

**Detailed Lesson Plan:**  
- **Introduction to Home Mining & Bitaxe Hardware (10 mins)**  
  - Overview of Bitaxe open-source mining project and hardware  
  - Advantages of mining Bitcoin in Alaska (renewable energy, low-cost power)  

- **Hardware Assembly & Safety (15 mins, Hands-on)**  
  - Detailed parts list: ASIC board, ESP-32, PSU, inline watt-meter  
  - Safety practices for electrical handling, surge protection, and assembly  

- **Firmware Flashing & Initial Setup (15 mins, Hands-on)**  
  - Flashing ESP-32 controller with open-source mining firmware (ESP-Tool)  
  - Configuration and initial boot-up checks  

- **Connecting & Configuring Mining Pools (15 mins, Hands-on)**  
  - Introduction to Stratum v2 protocol and mining pool selection  
  - Setting worker credentials for pools (Ocean, ViaBTC, solo-ck pool)  

- **Live Monitoring & Performance Tuning (15 mins, Hands-on)**  
  - Dashboard overview: hashrate, temperature, fan control, error rates  
  - Managing ASIC performance, identifying throttling, and optimization  

- **Mining Economics & ROI Analysis (10 mins, Discussion)**  
  - Deep dive into block subsidy, fees, difficulty adjustments  
  - Financial modeling: impact of kWh price, hash price forecasts, Bitcoin halving cycles  

- **Noise & Heat Mitigation Strategies (10 mins, Demo/Discussion)**  
  - Methods: immersion cooling, attic exhaust setups, reusing miner heat in winter  
  - Practical demonstration of immersion oil bath and exhaust techniques  

---

### Daily Learning Outcomes  

1. **Self-custody Confidence:**  
   Gain deep practical knowledge to securely store, back up, and recover Bitcoin using air-gapped wallets and multisig setups.

2. **Network Sovereignty:**  
   Learn to confidently deploy, manage, and secure your own Bitcoin and Lightning Network nodes for maximum independence and financial control.

3. **Mining Literacy:**  
   Develop the skills to effectively build, manage, and optimize a home Bitcoin mining operation, understanding the hardware, software, and economic factors that drive profitability.

