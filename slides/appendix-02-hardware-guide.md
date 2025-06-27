# Appendix B: Complete Hardware Guide
## Detailed Specifications and Setup Instructions for Bitcoin Hardware

### 🔒 **Hardware Wallets - Complete Comparison**

#### **Coldcard Mk4 - The Gold Standard**

**Technical Specifications:**
- **Secure Element:** ATECC608B (Common Criteria EAL5+)
- **Main Processor:** STM32L4A6 (ARM Cortex-M4)
- **Display:** 128x64 OLED, white on black
- **Storage:** MicroSD card slot (up to 32GB)
- **Power:** USB-C or 2x AAA batteries
- **Operating Temperature:** -20°C to +60°C (perfect for Alaska)
- **Dimensions:** 89mm x 55mm x 9.8mm
- **Weight:** 38 grams

**Security Features:**
- **Air-Gap Capable:** Complete offline operation via QR codes or SD card
- **Duress PIN:** Brick device or show decoy wallet under coercion
- **Brick Me PIN:** Permanently destroy device if compromised
- **Secure Boot:** Verified firmware signatures
- **Tamper Evidence:** Physical security features
- **True Random Number Generator:** Hardware-based entropy

**Alaska-Specific Advantages:**
- **Extreme Temperature Operation:** Functions in -20°C Alaska winters
- **Battery Operation:** Works without power during outages
- **Rugged Construction:** Designed for harsh environments
- **Offline Capability:** No internet required for signing

**Setup Process (Detailed):**
1. **Unboxing Verification:**
   - Check tamper-evident bag integrity
   - Verify serial number on device matches packaging
   - Inspect for physical damage or modifications

2. **Initial Power-On:**
   - Insert batteries or connect USB-C
   - Device performs self-test and displays firmware version
   - Verify firmware signature (advanced users)

3. **PIN Setup:**
   - Choose 4-12 digit PIN (avoid patterns, birthdates)
   - Set optional secondary PIN for duress situations
   - Configure brick-me PIN for ultimate security

4. **Seed Generation:**
   - Choose 12 or 24-word seed phrase
   - Use dice for entropy (recommended for maximum security)
   - Device generates seed using hardware RNG + dice entropy
   - Write seed words on provided cards

5. **Seed Verification:**
   - Device tests seed by asking for random words
   - Verify you wrote down words correctly
   - Test recovery process before storing funds

**Advanced Features:**
- **Multisig Support:** Up to 15-of-15 multisig wallets
- **BIP39 Passphrase:** Additional 25th word protection
- **Address Verification:** Always verify receive addresses on device
- **PSBT Support:** Partially Signed Bitcoin Transactions
- **Electrum Integration:** Works with Electrum wallet software

**Price:** $150-200
**Where to Buy:** Coinkite.com (direct), authorized resellers
**Warranty:** 1 year limited warranty

---

#### **SeedSigner - DIY Security Champion**

**Technical Specifications:**
- **Base Hardware:** Raspberry Pi Zero 2W
- **Camera:** Raspberry Pi Camera Module v2 (8MP)
- **Display:** Waveshare 1.3" LCD HAT (240x240)
- **Storage:** MicroSD card (16GB minimum)
- **Power:** USB-C or battery pack
- **Operating Temperature:** 0°C to +50°C
- **Dimensions:** 65mm x 30mm x 20mm (assembled)
- **Weight:** 45 grams (with case)

**Security Philosophy:**
- **Stateless Operation:** No persistent storage of keys
- **Air-Gap Only:** Never connects to internet or computers
- **Open Source:** Fully auditable hardware and software
- **Reproducible Builds:** Verify software integrity
- **Camera-Based:** All communication via QR codes

**Components List (DIY Build):**
1. **Raspberry Pi Zero 2W** - $15
2. **Waveshare 1.3" LCD HAT** - $25
3. **Pi Camera Module v2** - $30
4. **MicroSD Card (32GB)** - $10
5. **3D Printed Case** - $5 (materials)
6. **Assembly Hardware** - $5
7. **Total Cost:** ~$90

**Alaska Assembly Considerations:**
- **Dry Environment:** Low humidity reduces static electricity risk
- **Temperature Control:** Assemble in heated space (15-25°C)
- **Component Sourcing:** Order extra components for remote locations
- **Local Maker Spaces:** University of Alaska or community workshops

**Detailed Assembly Instructions:**

**Step 1: Prepare Components**
- Verify all components against checklist
- Check for physical damage during shipping
- Gather tools: small screwdriver, anti-static wrist strap

**Step 2: SD Card Preparation**
- Download SeedSigner image from official GitHub
- Verify SHA256 hash of downloaded image
- Flash image to SD card using Raspberry Pi Imager
- Verify successful flash by checking files

**Step 3: Hardware Assembly**
- Connect camera ribbon cable to Pi Zero
- Attach LCD HAT to GPIO pins (ensure proper alignment)
- Insert SD card into Pi Zero slot
- Mount components in 3D printed case

**Step 4: Initial Testing**
- Power on device with USB-C cable
- Verify LCD displays SeedSigner boot screen
- Test camera functionality with QR code scan
- Confirm all buttons respond correctly

**Step 5: Security Verification**
- Generate test seed phrase using dice
- Create test wallet and verify addresses
- Test PSBT signing workflow
- Verify QR code generation and scanning

**Advanced Features:**
- **Dice Entropy:** Generate seeds using physical dice rolls
- **Camera Entropy:** Extract randomness from camera sensor noise
- **Seed XOR:** Split seeds across multiple devices
- **Custom Wordlists:** Support for multiple languages
- **Passphrase Support:** BIP39 passphrase functionality

**Alaska-Specific Modifications:**
- **Extended Temperature Case:** 3D print with ABS for cold resistance
- **Battery Pack Integration:** Add rechargeable battery for remote use
- **Ruggedized Case:** Extra protection for outdoor activities
- **Backup Components:** Keep spare parts for field repairs

---

#### **Passport - User Experience Leader**

**Technical Specifications:**
- **Secure Element:** Microchip ATECC608B
- **Main Processor:** STM32H753 (ARM Cortex-M7, 480MHz)
- **Display:** 2.7" e-ink display (264x176)
- **Storage:** Internal flash + microSD slot
- **Connectivity:** USB-C, QR codes
- **Battery:** Rechargeable Li-ion (1000mAh)
- **Operating Temperature:** -10°C to +50°C
- **Dimensions:** 120mm x 64mm x 10mm
- **Weight:** 85 grams

**Unique Features:**
- **E-ink Display:** Easy to read in bright sunlight
- **Rechargeable Battery:** No need for replaceable batteries
- **Beautiful Design:** Premium materials and finish
- **Intuitive Interface:** Smartphone-like user experience
- **Camera:** Built-in for QR code scanning

**Setup Process:**
1. **Unboxing and Verification:**
   - Check security seal integrity
   - Verify device authenticity via Foundation website
   - Inspect for tampering or damage

2. **Initial Setup:**
   - Charge device fully before first use
   - Power on and follow setup wizard
   - Choose PIN (6-12 digits recommended)

3. **Seed Generation:**
   - Select seed length (12 or 24 words)
   - Choose entropy source (device RNG or dice)
   - Write down seed words carefully
   - Verify seed by entering random words

4. **Wallet Configuration:**
   - Choose single-sig or multisig setup
   - Configure derivation paths if needed
   - Set up passphrase if desired
   - Test receive address generation

**Alaska Advantages:**
- **Rechargeable Battery:** Convenient for remote locations
- **Sunlight Readable:** E-ink display works in bright snow glare
- **Premium Build:** Durable construction for outdoor use
- **Intuitive Interface:** Easy for family members to use

**Price:** $200-250
**Where to Buy:** Foundation Devices website
**Warranty:** 2 years

---

### 🖥️ **Bitcoin Node Hardware - Complete Specifications**

#### **Raspberry Pi 5 - Recommended Configuration**

**Technical Specifications:**
- **CPU:** Broadcom BCM2712 (Quad-core ARM Cortex-A76, 2.4GHz)
- **RAM:** 8GB LPDDR4X-4267 (recommended for Bitcoin node)
- **GPU:** VideoCore VII (supports 4K@60fps dual display)
- **Storage:** MicroSD + USB 3.0 SSD (1TB minimum)
- **Connectivity:** Gigabit Ethernet, Wi-Fi 6, Bluetooth 5.0
- **USB Ports:** 2x USB 3.0, 2x USB 2.0
- **Power:** USB-C PD (5V/5A, 25W max)
- **GPIO:** 40-pin header for expansion
- **Operating Temperature:** 0°C to +50°C

**Complete Shopping List:**
1. **Raspberry Pi 5 (8GB)** - $80
2. **Samsung T7 SSD (1TB)** - $100
3. **SanDisk Extreme microSD (64GB)** - $15
4. **Official Pi 5 Power Supply** - $12
5. **Argon NEO 5 Case with Fan** - $25
6. **Ethernet Cable (Cat 6, 3ft)** - $8
7. **Total Cost:** ~$240

**Alaska-Specific Considerations:**
- **Heating:** Case with fan for consistent temperature
- **Power Stability:** UPS recommended for power outages
- **Internet:** Starlink or fixed broadband required
- **Backup Power:** Consider solar/battery backup for remote locations

**Detailed Setup Instructions:**

**Step 1: Hardware Assembly**
1. **Prepare Workspace:**
   - Clean, static-free environment
   - Good lighting and ventilation
   - Anti-static wrist strap recommended

2. **Install Heat Management:**
   - Apply thermal pads to CPU and RAM
   - Install heatsink or case with cooling
   - Ensure adequate airflow around device

3. **Storage Setup:**
   - Flash Raspberry Pi OS to microSD card
   - Connect SSD via USB 3.0 port
   - Verify SSD is recognized by system

**Step 2: Operating System Configuration**
1. **Initial Boot:**
   - Insert microSD and power on Pi
   - Complete initial setup wizard
   - Enable SSH for remote access
   - Update system packages

2. **Security Hardening:**
   - Change default password
   - Configure firewall (ufw)
   - Set up fail2ban for SSH protection
   - Disable unnecessary services

3. **Storage Configuration:**
   - Format SSD with ext4 filesystem
   - Mount SSD to /mnt/bitcoin
   - Configure automatic mounting
   - Set proper permissions

**Step 3: Bitcoin Core Installation**
1. **Download and Verify:**
   - Download Bitcoin Core from bitcoin.org
   - Verify GPG signatures (critical security step)
   - Extract to /opt/bitcoin directory
   - Create bitcoin user account

2. **Configuration:**
   - Create bitcoin.conf file
   - Configure data directory on SSD
   - Set network and RPC parameters
   - Enable transaction indexing

3. **Initial Sync:**
   - Start Bitcoin Core daemon
   - Monitor sync progress (takes 1-7 days)
   - Verify blockchain integrity
   - Test RPC connectivity

**Sample bitcoin.conf for Alaska:**
```
# Basic settings
server=1
daemon=1
txindex=1
datadir=/mnt/bitcoin

# Network settings
listen=1
maxconnections=125
maxuploadtarget=1000

# RPC settings
rpcuser=alaskabitcoiner
rpcpassword=your_secure_password_here
rpcbind=127.0.0.1
rpcallowip=127.0.0.1

# Tor settings (optional)
proxy=127.0.0.1:9050
onlynet=onion

# Alaska-specific optimizations
dbcache=2048
maxmempool=512
```

**Step 4: Lightning Network Setup (Optional)**
1. **Install LND:**
   - Download from Lightning Labs
   - Verify signatures and install
   - Configure lnd.conf file
   - Generate wallet and seed

2. **Channel Management:**
   - Fund on-chain wallet
   - Open channels to well-connected nodes
   - Configure autopilot for automatic channels
   - Set up channel backup monitoring

**Performance Optimization for Alaska:**
- **Cold Weather:** Pi runs more efficiently in cold temperatures
- **Power Management:** Configure for automatic restart after outages
- **Bandwidth:** Monitor data usage if using satellite internet
- **Monitoring:** Set up alerts for node health and connectivity

---

### ⛏️ **Mining Hardware - Detailed Analysis**

#### **Bitaxe Ultra - Open Source ASIC Miner**

**Technical Specifications:**
- **ASIC Chip:** Bitmain BM1366 (5nm process)
- **Hashrate:** ~400 GH/s (400 billion hashes/second)
- **Power Consumption:** ~15 watts
- **Efficiency:** ~37.5 J/TH (very efficient)
- **Cooling:** Passive heatsink + 40mm fan
- **Connectivity:** Wi-Fi (ESP32-S3)
- **Dimensions:** 104mm x 76mm x 30mm
- **Weight:** 150 grams

**Complete Component List:**
1. **Bitaxe Ultra PCB** - $50
2. **BM1366 ASIC Chip** - $80
3. **Power Components** - $20
4. **ESP32-S3 Module** - $15
5. **Cooling Solution** - $10
6. **Case and Hardware** - $15
7. **Assembly Labor** - $50 (if outsourced)
8. **Total Cost:** ~$240

**Alaska Mining Economics (Detailed):**

**Revenue Calculation:**
- **Current Difficulty:** ~67 trillion
- **Network Hashrate:** ~450 EH/s
- **Block Reward:** 6.25 BTC + fees (~0.5 BTC average)
- **Daily Blocks:** 144
- **Your Share:** 400 GH/s ÷ 450 EH/s = 0.00000089%
- **Daily BTC Earnings:** 0.00000089% × 6.75 BTC = 0.00006 BTC
- **Daily USD (at $45,000/BTC):** ~$2.70

**Cost Analysis:**
- **Power Consumption:** 15W × 24h = 0.36 kWh/day
- **Alaska Electricity Cost:** $0.12/kWh average (varies by location)
- **Daily Electricity Cost:** 0.36 × $0.12 = $0.043
- **Net Daily Profit:** $2.70 - $0.043 = $2.66
- **Monthly Profit:** ~$80
- **Annual Profit:** ~$960

**Break-Even Analysis:**
- **Initial Investment:** $240
- **Break-Even Time:** 240 ÷ 2.66 = 90 days
- **ROI:** 400% annually (at current prices)

**Alaska-Specific Advantages:**
- **Free Cooling:** Cold air reduces fan usage and extends life
- **Heat Recovery:** 15W of heat can warm small spaces
- **Renewable Energy:** Many Alaska locations have cheap hydro/wind
- **Grid Stabilization:** Can turn off during peak demand

**Assembly Instructions (Detailed):**

**Required Tools:**
- Soldering iron (temperature controlled)
- Hot air rework station
- Flux and solder paste
- Tweezers and magnifying glass
- Multimeter for testing
- Anti-static mat and wrist strap

**Step 1: PCB Preparation**
- Inspect PCB for defects or damage
- Clean with isopropyl alcohol
- Apply solder paste to component pads
- Use stencil for precise application

**Step 2: Component Placement**
- Place passive components first (resistors, capacitors)
- Install power management ICs
- Mount ESP32-S3 module
- Place BM1366 ASIC chip (most critical step)

**Step 3: Reflow Soldering**
- Use hot air station or reflow oven
- Follow temperature profile for components
- Monitor for proper solder joint formation
- Allow to cool slowly to prevent stress

**Step 4: Testing and Validation**
- Visual inspection under magnification
- Continuity testing with multimeter
- Power-on test with current limiting
- Firmware flashing and configuration

**Step 5: Final Assembly**
- Install heatsink with thermal paste
- Mount cooling fan
- Install in protective case
- Label with configuration details

**Firmware Configuration:**
```
WiFi SSID: YourNetworkName
WiFi Password: YourPassword
Pool URL: stratum+tcp://pool.ocean.xyz:4242
Pool User: YourBitcoinAddress.bitaxe01
Pool Password: x
Frequency: 485 MHz (start conservative)
Voltage: 1200 mV (adjust for stability)
```

**Troubleshooting Common Issues:**
- **No Hashrate:** Check ASIC chip soldering and power supply
- **High Error Rate:** Reduce frequency or increase voltage
- **Overheating:** Improve cooling or reduce power
- **WiFi Issues:** Check antenna connection and signal strength

**Scaling Considerations:**
- **Multiple Units:** Can run 10+ units on standard household circuit
- **Heat Management:** Plan ventilation for larger installations
- **Network Infrastructure:** Ensure adequate internet bandwidth
- **Electrical Safety:** Use proper breakers and wiring

---

### 🔌 **Power and Infrastructure Requirements**

#### **Electrical Requirements for Bitcoin Hardware**

**Hardware Wallet Power:**
- **Coldcard:** 2x AAA batteries (6 months) or USB-C (5V, 0.5A)
- **SeedSigner:** USB-C (5V, 1A) or battery pack
- **Passport:** Built-in battery (charges via USB-C)

**Bitcoin Node Power:**
- **Raspberry Pi 5:** USB-C PD (5V, 5A, 25W max)
- **External SSD:** Powered via USB (typically 2-5W)
- **Total Consumption:** ~30W continuous
- **Daily Energy:** 0.72 kWh
- **Monthly Cost:** ~$2.60 (at $0.12/kWh)

**Mining Power (Single Bitaxe):**
- **Power Consumption:** 15W continuous
- **Daily Energy:** 0.36 kWh
- **Monthly Cost:** ~$1.30 (at $0.12/kWh)

**Alaska Power Infrastructure:**
- **Grid Stability:** Consider UPS for power outages
- **Renewable Integration:** Solar/wind backup systems
- **Load Management:** Smart switches for demand response
- **Safety:** GFCI protection for all Bitcoin equipment

#### **Internet Requirements**

**Bandwidth Requirements:**
- **Initial Sync:** 500GB download (one-time)
- **Daily Operation:** 1-5GB upload/download
- **Lightning Network:** Additional 100MB-1GB daily
- **Mining:** Minimal bandwidth (1-10MB daily)

**Alaska Internet Options:**
1. **Starlink:** Best for remote locations
   - **Speed:** 50-200 Mbps down, 10-20 Mbps up
   - **Latency:** 25-60ms
   - **Data Limits:** None currently
   - **Cost:** $120/month + $600 equipment

2. **Fixed Broadband:** Available in cities
   - **Speed:** Varies by provider (10-1000 Mbps)
   - **Reliability:** Generally good in urban areas
   - **Cost:** $50-150/month

3. **Cellular:** Backup option
   - **Speed:** 5-50 Mbps (depends on coverage)
   - **Data Limits:** Often capped
   - **Cost:** $50-100/month

**Network Security:**
- **VPN:** Recommended for privacy
- **Tor:** Built-in Bitcoin Core support
- **Firewall:** Block unnecessary ports
- **Monitoring:** Track bandwidth usage

This comprehensive hardware guide provides everything needed to select, purchase, assemble, and operate Bitcoin hardware in Alaska's unique environment, with detailed specifications, costs, and setup instructions for each component.
