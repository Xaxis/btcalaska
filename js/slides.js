// Slide content data
const slideData = [
    {
        id: 1,
        title: "Bitcoin Alaska",
        subtitle: "Open Forum & Education Sessions",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">Community-Driven Learning</h3>
            <p>Welcome to a new format for Bitcoin education in Alaska. Instead of rigid presentations, we're creating an interactive space where your curiosity shapes our conversation. Whether you're completely new to Bitcoin or a seasoned hodler, this forum is designed to meet you where you are and take you where you want to go.</p>
            
            <h3 class="gold">What Makes This Different</h3>
            <ul>
                <li><strong>No Stupid Questions:</strong> Every question, no matter how basic, helps someone else learn</li>
                <li><strong>Real Hardware:</strong> We have actual devices to demonstrate concepts hands-on</li>
                <li><strong>Alaska Focus:</strong> Tailored specifically for our unique environment and opportunities</li>
                <li><strong>Community Building:</strong> Building lasting connections in the Alaska Bitcoin community</li>
            </ul>
            <p style="margin-top: 40px; font-size: 1.2rem; color: #F7931A; text-align: center; width: 100%;">Bitcoin Conference 2024 • Alaska</p>
        `
    },
    {
        id: 2,
        title: "From Structured Sessions to Open Dialogue",
        subtitle: "",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">Why We Changed Our Approach</h3>
            <p>Originally, we planned three separate 90-minute technical workshops. But we realized something important: the best Bitcoin education happens through conversation, not lecture. The most valuable insights come from the questions you ask, the problems you're trying to solve, and the real-world scenarios you face living in Alaska.</p>
            
            <h3 class="gold">What This Means for You</h3>
            <ul>
                <li><strong>Interactive Q&A Format:</strong> Raise your hand, ask questions, challenge ideas. This is your session.</li>
                <li><strong>Hands-On Demonstrations:</strong> We have hardware here - Coldcards, Raspberry Pis, mining equipment. Want to see how something works? We'll show you.</li>
                <li><strong>No Prerequisites:</strong> Whether you've never heard of Bitcoin or you're running your own Lightning node, there's something here for you.</li>
                <li><strong>Community Learning:</strong> The person next to you might have the exact answer you need. We're all teachers and students here.</li>
            </ul>
            
            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>The Philosophy Behind This Change:</strong> Bitcoin itself is about removing intermediaries and empowering individuals. Our education should reflect that same philosophy. Instead of us talking at you, we're creating a space where knowledge flows freely in all directions.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "Today's Session Overview",
        subtitle: "",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">Philosophy Track: Why Bitcoin Matters</h3>
            <p><strong>The Nature of Money:</strong> What makes something "money"? Why did societies move from barter to gold to paper to digital? Understanding this history is crucial to understanding why Bitcoin is inevitable.</p>
            <p><strong>Sound Money Principles:</strong> For most of human history, money was scarce and hard to produce. The last 50 years of unlimited money printing is an aberration. Bitcoin returns us to sound money principles.</p>
            <p><strong>Individual Sovereignty:</strong> Bitcoin isn't just about making money - it's about taking back control of your financial life. No banks, no governments, no intermediaries between you and your wealth.</p>
            
            <h3 class="gold">Technical Track: How Bitcoin Works</h3>
            <p><strong>Cold Storage & Security:</strong> How to store Bitcoin safely for decades. We'll demonstrate hardware wallets, multisig setups, and backup strategies designed for Alaska's unique challenges.</p>
            <p><strong>Running Your Own Node:</strong> Why "don't trust, verify" matters and how to achieve true financial sovereignty by running your own Bitcoin node.</p>
            <p><strong>Mining in Alaska:</strong> How Alaska's abundant renewable energy makes it one of the best places in the world to mine Bitcoin profitably and sustainably.</p>
            
            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>The Alaska Advantage:</strong> Throughout both tracks, we'll explore why Alaska is uniquely positioned to benefit from Bitcoin adoption - from our energy abundance to our culture of self-reliance.</p>
            </div>
        `
    },
    {
        id: 4,
        title: "What is Money?",
        subtitle: "Understanding the Foundation of Economic Exchange",
        theme: "philosophy-theme",
        content: `
            <h3 class="gold">The Evolution of Money Through History</h3>
            <p><strong>Barter Systems (Pre-3000 BCE):</strong> Direct exchange of goods and services. A farmer trades wheat for a blacksmith's tools. The fundamental problem: the "double coincidence of wants" - both parties must want what the other offers at the exact same time.</p>
            
            <p><strong>Commodity Money (3000 BCE - 1900s):</strong> Societies discovered that certain commodities work better as money. Gold and silver emerged as winners because they're durable, portable, divisible, and universally valued. A gold coin represents actual stored value.</p>
            
            <p><strong>Representative Money (1800s-1971):</strong> Paper money backed by gold reserves. The U.S. dollar was redeemable for gold at $35/ounce. This system collapsed when governments printed more money than they had gold to back it.</p>
            
            <p><strong>Fiat Currency (1971-Present):</strong> Money by government decree with no backing. The dollar became "legal tender" simply because the government says so. Value depends entirely on trust in the issuing authority.</p>
            
            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Key Insight:</strong> Bitcoin is the first technology in human history that perfectly satisfies all six properties of sound money while being completely digital and decentralized.</p>
            </div>
        `
    },
    {
        id: 5,
        title: "The Fundamental Problems with Fiat Currency",
        subtitle: "Why Our Current Monetary System is Broken",
        theme: "philosophy-theme",
        content: `
            <h3 class="bitcoin-orange">Inflation: The Hidden Tax on Your Savings</h3>
            <p>Since 1971, when the U.S. abandoned the gold standard, the dollar has lost over 85% of its purchasing power. What cost $1 in 1971 costs $6.50 today. This isn't natural price discovery - it's systematic wealth confiscation.</p>
            
            <p><strong>The Mechanism:</strong> Central banks create new money digitally, increasing the money supply. More dollars chasing the same goods = higher prices. Your savings lose value even sitting in the bank.</p>
            
            <h3 class="bitcoin-orange">Central Control: Unelected Officials Control Your Money</h3>
            <p>The Federal Reserve, a private institution, makes monetary policy affecting 330 million Americans. These officials decide interest rates, money supply, and which banks get bailouts - yet they're not elected by the people.</p>
            
            <p><strong>The Cantillon Effect:</strong> Those closest to money creation (banks, government, wealthy) benefit first. By the time new money reaches regular people, prices have already risen. This systematically transfers wealth from the poor to the rich.</p>
            
            <div class="quote">
                "In the absence of the gold standard, there is no way to protect savings from confiscation through inflation." - Alan Greenspan, Former Fed Chairman
            </div>
        `
    },
    {
        id: 6,
        title: "Bitcoin's Philosophical Foundation",
        subtitle: "The Revolutionary Ideas Behind Digital Sound Money",
        theme: "philosophy-theme",
        content: `
            <h3 class="bitcoin-orange">Satoshi's Vision: Peer-to-Peer Electronic Cash</h3>
            <p>On October 31, 2008, an anonymous person or group using the name Satoshi Nakamoto published a 9-page paper titled "Bitcoin: A Peer-to-Peer Electronic Cash System." This wasn't just a technical specification - it was a manifesto for financial freedom.</p>

            <p><strong>The Core Problem Satoshi Solved:</strong> How do you create digital money without a trusted third party? Before Bitcoin, all digital payments required banks, credit card companies, or payment processors that could freeze accounts, reverse transactions, charge fees, and monitor all activity.</p>

            <h3 class="gold">The Genesis Block Message</h3>
            <p>On January 3, 2009, Satoshi mined the first Bitcoin block and embedded a message:</p>
            <div class="quote">
                "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
            </div>
            <p>This wasn't random. While governments were bailing out the banks that caused the 2008 financial crisis, Satoshi was building an alternative system where bailouts are impossible.</p>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Core Principles:</strong> Decentralization, Immutability, Transparency, Permissionless operation, and Trustless verification through cryptographic proof rather than institutional trust.</p>
            </div>
        `
    },
    {
        id: 7,
        title: "Sound Money Principles",
        subtitle: "How Bitcoin Perfects the Properties of Money",
        theme: "philosophy-theme",
        content: `
            <h3 class="gold">Bitcoin as the Ultimate Sound Money</h3>
            <p>For thousands of years, gold was the best money humanity had. Bitcoin takes the best properties of gold and perfects them for the digital age while adding new capabilities that were never possible before.</p>

            <h3 class="bitcoin-orange">Fixed Supply: The 21 Million Limit</h3>
            <p><strong>The Hard Cap:</strong> There will only ever be 21 million Bitcoin. This isn't a policy decision that can be changed - it's written into the code and enforced by every participant in the network.</p>

            <p><strong>The Issuance Schedule:</strong> New Bitcoin are created through mining, but the rate decreases over time through "halvings" every four years. This continues until around 2140, when the last Bitcoin will be mined.</p>

            <h3 class="bitcoin-orange">Perfect Divisibility</h3>
            <p>Each Bitcoin can be divided into 100 million smaller units called satoshis. If Bitcoin reaches $1 million per coin, one satoshi would be worth $0.01 (one cent). This ensures Bitcoin can function as money regardless of its price.</p>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Why Bitcoin is Superior to Gold:</strong> Verification (instant with software), Divisibility (perfect digital division), Portability (travels at light speed), Storage (can be memorized), and Absolute Scarcity (mathematically fixed supply).</p>
            </div>
        `
    },
    {
        id: 8,
        title: "Individual Sovereignty",
        subtitle: "Be Your Own Bank: Taking Control of Your Financial Life",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">What Does "Be Your Own Bank" Actually Mean?</h3>
            <ul>
                <li><strong>Custody:</strong> You hold your own money instead of trusting a bank</li>
                <li><strong>Verification:</strong> You verify your own transactions instead of trusting bank records</li>
                <li><strong>Authorization:</strong> You authorize payments without needing bank approval</li>
                <li><strong>Privacy:</strong> You control who sees your financial information</li>
                <li><strong>Availability:</strong> Your money is available 24/7, not just banking hours</li>
            </ul>

            <h3 class="gold">Self-Custody: Not Your Keys, Not Your Bitcoin</h3>
            <p>In Bitcoin, whoever controls the private keys controls the Bitcoin. If someone else holds your keys (like an exchange), they control your Bitcoin, not you.</p>

            <p><strong>Real-World Example:</strong> In 2022, the FTX exchange collapsed, and millions of people lost their Bitcoin because they didn't control their own keys. People who held their own keys were unaffected.</p>

            <div class="highlight-box">
                <p class="gold"><strong>Why This Matters for Alaskans:</strong> Self-reliance culture, remote living challenges, economic independence, and privacy values all align perfectly with Bitcoin's self-custody principles.</p>
            </div>
        `
    },
    {
        id: 9,
        title: "The Austrian School Connection",
        subtitle: "How Bitcoin Validates 150 Years of Economic Theory",
        theme: "philosophy-theme",
        content: `
            <h3 class="gold">Ludwig von Mises and Sound Money Theory</h3>
            <p>In 1912, Mises explained that money emerges naturally from the most marketable commodity. He predicted that abandoning the gold standard would lead to economic instability, inflation, and government overreach. He was proven right throughout the 20th century.</p>

            <h3 class="bitcoin-orange">Time Preference: The Foundation of Interest and Savings</h3>
            <p><strong>High Time Preference:</strong> Preferring immediate gratification, spending money as soon as you get it.</p>
            <p><strong>Low Time Preference:</strong> Willing to delay gratification for future benefit, saving and building for the long term.</p>

            <p><strong>How Sound Money Affects Time Preference:</strong> Sound money (Gold/Bitcoin) encourages saving because money holds value over time. Fiat money encourages spending because money loses value over time.</p>

            <h3 class="bitcoin-orange">The Cantillon Effect</h3>
            <p>New money doesn't appear everywhere simultaneously. It enters at specific points (banks, government, corporations). First recipients spend at current prices while later recipients face higher prices with same income. Bitcoin has no central issuer, eliminating this effect.</p>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Bitcoin Connection:</strong> Bitcoin enables low time preference thinking and validates Austrian economic theory in practice, not just theory.</p>
            </div>
        `
    },
    {
        id: 10,
        title: "The Alaskan Perspective",
        subtitle: "Why Alaska is Uniquely Positioned for Bitcoin Adoption",
        theme: "alaska-theme",
        content: `
            <h3 class="gold">Alaskan Values Align with Bitcoin Principles</h3>
            <ul>
                <li><strong>Self-Reliance:</strong> Alaskans don't wait for others to solve problems - same mindset applies to money</li>
                <li><strong>Independence:</strong> Alaska fought for statehood to control its destiny - Bitcoin offers monetary independence</li>
                <li><strong>Resourcefulness:</strong> Living in Alaska requires creative problem-solving - Bitcoin rewards this mindset</li>
                <li><strong>Community Cooperation:</strong> Strong communities without central authority - like Bitcoin's network</li>
            </ul>

            <h3 class="bitcoin-orange">Alaska's Energy Abundance: A Bitcoin Mining Paradise</h3>
            <p><strong>Renewable Resources:</strong> Hydroelectric, geothermal, wind, and natural gas - much of it "stranded" with no way to transport to markets.</p>

            <p><strong>Bitcoin's Solution:</strong> Bitcoin mining can monetize stranded energy anywhere there's internet, turning wasted energy into digital gold.</p>

            <h3 class="bitcoin-orange">Climate Advantages</h3>
            <ul>
                <li>Cold weather provides free cooling for mining equipment</li>
                <li>Mining heat can warm homes and buildings</li>
                <li>Extended winter heating season makes heat recovery valuable</li>
            </ul>

            <div class="highlight-box">
                <p class="gold"><strong>The Perfect Storm:</strong> Alaska has abundant renewable energy, culture of self-reliance, need for financial inclusion in remote areas, opportunity for economic diversification, and climate advantages for mining.</p>
            </div>
        `
    },
    {
        id: 11,
        title: "Technical Topics: From Theory to Practice",
        subtitle: "Hands-On Bitcoin Skills for Alaskans",
        theme: "",
        content: `
            <p>Now that we've covered the philosophical foundation, let's dive into the practical skills you need to use Bitcoin safely and effectively. These aren't just theoretical concepts - we have the actual hardware here to demonstrate everything we discuss.</p>

            <h3 class="bitcoin-orange">Cold Storage & Security</h3>
            <p><strong>What We'll Demonstrate:</strong> Complete walkthrough of Coldcard, SeedSigner, and Passport devices; seed phrase generation using dice and camera entropy; multisig configuration; air-gap signing; backup strategies.</p>

            <h3 class="gold">Node Operation</h3>
            <p><strong>What We'll Show:</strong> Raspberry Pi 5 assembly; Bitcoin Core installation; Lightning Network setup; remote management; privacy configuration with Tor.</p>

            <h3 class="bitcoin-orange">Home Mining</h3>
            <p><strong>Live Demonstrations:</strong> Bitaxe Ultra assembly; pool configuration; performance optimization; heat recovery systems; economics analysis with Alaska energy costs.</p>

            <h3 class="gold">Lightning Network</h3>
            <p><strong>Hands-On Experience:</strong> Channel opening; instant payments; routing; LNURL applications; liquidity management.</p>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Learning Philosophy:</strong> We believe in learning by doing. Every concept we discuss, we'll demonstrate with real hardware and software. You'll leave with practical experience and confidence.</p>
            </div>
        `
    },
    {
        id: 12,
        title: "Cold Storage & Security",
        subtitle: "Protecting Your Bitcoin in Alaska's Extreme Environment",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">Understanding the Threat Model</h3>
            <p><strong>Common Threats:</strong> Hackers, phishing attacks, exchange failures, loss of access, physical theft.</p>
            <p><strong>Alaska-Specific Threats:</strong> Extreme weather damaging hardware, remote locations making recovery difficult, isolation making you a target, natural disasters.</p>

            <h3 class="gold">Hardware Wallets: Your First Line of Defense</h3>
            <ul>
                <li><strong>Coldcard Mk4:</strong> Air-gap capable, secure element, operates in extreme temperatures (-20°C to +60°C)</li>
                <li><strong>SeedSigner:</strong> DIY security, completely air-gapped, can be rebuilt if damaged</li>
                <li><strong>Passport:</strong> User-friendly, beautiful design, intuitive interface reduces errors</li>
            </ul>

            <h3 class="bitcoin-orange">Multisig: Eliminating Single Points of Failure</h3>
            <p><strong>2-of-3 Setup Example:</strong> Key 1 (Coldcard at home), Key 2 (SeedSigner backup at cabin), Key 3 (Passport with trusted family member in Lower 48).</p>

            <h3 class="gold">Backup Strategies for Alaska</h3>
            <p><strong>Steel Plate Backups:</strong> Fireproof (survives 2000°F), waterproof, corrosion resistant, shock resistant.</p>
            <p><strong>Geographic Distribution:</strong> Primary at home, secondary at cabin, tertiary with family, quaternary encrypted in cloud.</p>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Alaska Advantages:</strong> Permafrost provides stable buried caches, remote cabins offer natural off-site storage, harsh environment deters criminals, self-reliance culture understands redundancy importance.</p>
            </div>
        `
    },
    {
        id: 13,
        title: "Running Your Own Bitcoin Node",
        subtitle: "Achieving True Financial Sovereignty Through Self-Verification",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">Why "Don't Trust, Verify" Matters</h3>
            <p>When you use someone else's Bitcoin node, you're trusting them to tell you the truth about your balance, transaction confirmations, network rules, and fee estimates. Running your own node means you verify everything yourself.</p>

            <h3 class="gold">The Raspberry Pi 5: Perfect for Alaska</h3>
            <ul>
                <li><strong>Low Power:</strong> Uses only 5-15 watts (less than a light bulb)</li>
                <li><strong>Reliable:</strong> Designed for 24/7 operation</li>
                <li><strong>Cold Climate:</strong> Natural cooling extends hardware life</li>
                <li><strong>Remote Operation:</strong> SSH access from anywhere with internet</li>
            </ul>

            <h3 class="bitcoin-orange">What Your Node Does</h3>
            <ul>
                <li><strong>Validation:</strong> Checks every transaction and block against Bitcoin rules</li>
                <li><strong>Storage:</strong> Maintains complete copy of blockchain (~500GB)</li>
                <li><strong>Networking:</strong> Connects to other nodes worldwide</li>
                <li><strong>Serving:</strong> Provides data to your wallets and applications</li>
            </ul>

            <h3 class="gold">Lightning Network Integration</h3>
            <p>Add Lightning to enable instant, low-cost payments while using your node as the foundation for trust. Perfect for Alaska tourism businesses, cross-border remittances, and micropayments.</p>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Alaska Contribution:</strong> Running nodes in remote locations like Alaska strengthens Bitcoin's global resilience and demonstrates that Bitcoin works everywhere.</p>
            </div>
        `
    },
    {
        id: 14,
        title: "Home Mining in Alaska",
        subtitle: "Turning Energy Abundance into Digital Gold",
        theme: "alaska-theme",
        content: `
            <h3 class="gold">Why Alaska is a Bitcoin Mining Paradise</h3>
            <ul>
                <li><strong>Abundant Renewable Energy:</strong> Hydroelectric, geothermal, wind, tidal power - much "stranded" with no transport to markets</li>
                <li><strong>Cold Climate:</strong> Free cooling for most of the year, dramatically improving efficiency</li>
                <li><strong>Low Energy Costs:</strong> Some of the lowest industrial electricity rates in North America</li>
                <li><strong>Regulatory Clarity:</strong> Business-friendly environment with less bureaucratic interference</li>
            </ul>

            <h3 class="bitcoin-orange">The Bitaxe Ultra: Open-Source Mining</h3>
            <p><strong>Specifications:</strong> BM1366 ASIC chip, ~400 GH/s hashrate, ~15 watts power, nearly silent operation, fits in your hand.</p>

            <p><strong>Economics in Alaska:</strong> Daily earnings ~$0.50-1.00, electricity cost ~$0.04-0.07, net profit ~$0.43-0.96, break-even in 6-12 months.</p>

            <h3 class="gold">Heat Recovery Systems</h3>
            <p><strong>Alaska Applications:</strong> Cabin heating for remote locations, greenhouse operations for year-round growing, workshop warming to prevent freezing, hot water pre-heating to reduce costs.</p>

            <p><strong>Efficiency Gains:</strong> Using mining heat for useful purposes effectively makes electricity free for heating, dramatically improving mining economics.</p>

            <h3 class="bitcoin-orange">Environmental Benefits</h3>
            <p>Alaska's renewable energy makes Bitcoin mining environmentally positive. When mining heat displaces fossil fuel heating, the net carbon impact is negative.</p>

            <div class="highlight-box">
                <p class="gold"><strong>Alaska's Mining Future:</strong> Potential to become a major Bitcoin mining hub with vast renewable resources, supportive regulations, strategic location, and culture of innovation.</p>
            </div>
        `
    },
    {
        id: 15,
        title: "Open Forum: Your Questions Drive Our Discussion",
        subtitle: "How This Interactive Session Works",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">The Philosophy Behind Open Learning</h3>
            <p>Traditional education follows a one-size-fits-all approach. But Bitcoin education works best when it's interactive, practical, and tailored to your specific needs and interests.</p>

            <h3 class="gold">How to Participate</h3>
            <ul>
                <li><strong>Raise Your Hand:</strong> Ask questions or share experiences - interaction is the goal</li>
                <li><strong>Request Demonstrations:</strong> We have hardware here to show you how things work</li>
                <li><strong>Share Your Story:</strong> Your experiences help everyone learn</li>
                <li><strong>Challenge Ideas:</strong> Intellectual debate makes everyone smarter</li>
            </ul>

            <h3 class="bitcoin-orange">No Stupid Questions Policy</h3>
            <p><strong>Beginner Questions Welcome:</strong> "What exactly is Bitcoin?", "How do I buy my first Bitcoin?", "What's a private key?"</p>
            <p><strong>Advanced Questions Encouraged:</strong> "How do I optimize Lightning liquidity?", "What's the best multisig setup?", "How do I contribute to development?"</p>
            <p><strong>Alaska-Specific Questions:</strong> "How do I protect hardware in extreme cold?", "What's the best internet for remote mining?"</p>

            <h3 class="gold">Live Demonstrations Available</h3>
            <p>Hardware wallets, Bitcoin node assembly, mining equipment, software tools, Lightning payments - we have actual hardware to demonstrate concepts hands-on.</p>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Community Knowledge:</strong> The person next to you might have the exact solution to your problem. We encourage peer-to-peer learning and knowledge sharing.</p>
            </div>
        `
    },
    {
        id: 16,
        title: "Key Takeaways: Essential Principles for Your Bitcoin Journey",
        subtitle: "",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">Bitcoin is Sound Money - The Return to Monetary Sanity</h3>
            <p><strong>Fixed Supply:</strong> Only 21 million Bitcoin will ever exist - written into code, not policy. <strong>Predictable Policy:</strong> Algorithmic and transparent monetary policy. <strong>Digital Scarcity:</strong> First truly scarce digital money in history.</p>

            <h3 class="gold">Self-Custody is Key - Not Your Keys, Not Your Bitcoin</h3>
            <p>In Bitcoin, whoever controls the private keys controls the Bitcoin. FTX, Mt. Gox, Celsius - exchanges fail, but self-custody protects you. Start small, learn the tools, build confidence.</p>

            <h3 class="bitcoin-orange">Verify, Don't Trust - Run Your Own Node</h3>
            <p>Bitcoin eliminates trusted third parties, but using someone else's node reintroduces trust. Running your own node means complete verification, privacy, and independence.</p>

            <h3 class="gold">Privacy Matters - Protect Your Financial Sovereignty</h3>
            <p>Privacy isn't about hiding wrongdoing - it's about safety, freedom, dignity, and protection from discrimination. Use proper techniques to maintain financial privacy.</p>

            <h3 class="bitcoin-orange">Alaska's Unique Advantage - Energy Abundance Meets Bitcoin</h3>
            <p>Renewable energy paradise, climate advantages, cultural alignment with self-reliance, economic diversification opportunity. Alaska could lead the Bitcoin economy.</p>

            <div class="highlight-box">
                <p class="gold"><strong>The Learning Never Stops:</strong> Bitcoin continues evolving. Stay curious, engage with community, start with basics, go deeper, share knowledge. Your Bitcoin journey starts now.</p>
            </div>
        `
    },
    {
        id: 17,
        title: "Thank You!",
        subtitle: "Let's Keep the Conversation Going",
        theme: "",
        content: `
            <h3 class="bitcoin-orange">This is Just the Beginning</h3>
            <p>Today's session introduced Bitcoin's potential and gave you practical knowledge to get started. But Bitcoin education is a journey, not a destination. The concepts we've covered are the foundation for a lifetime of learning and growth.</p>

            <h3 class="gold">Stay Connected with Bitcoin Alaska</h3>
            <ul>
                <li><strong>Regular Meetups:</strong> Monthly in Anchorage, quarterly in Fairbanks, virtual for remote communities</li>
                <li><strong>Online Community:</strong> Telegram group, Discord server, newsletter, website resources</li>
                <li><strong>Workshops:</strong> Hardware wallet masterclass, node operation, mining, Lightning deep dive</li>
                <li><strong>Community Projects:</strong> Mining cooperative, educational outreach, policy advocacy</li>
            </ul>

            <h3 class="bitcoin-orange">How to Get Involved</h3>
            <p><strong>Start Small:</strong> Set up first wallet, buy small amount, join Telegram, attend meetups.</p>
            <p><strong>Level Up:</strong> Hardware wallet, run node, try Lightning, explore mining.</p>
            <p><strong>Contribute:</strong> Share journey, help newcomers, contribute to projects, advocate for policies.</p>

            <h3 class="gold">Contact Information</h3>
            <p><strong>Website:</strong> bitcoinalaska.org<br>
            <strong>Telegram:</strong> @BitcoinAlaska<br>
            <strong>Email:</strong> info@bitcoinalaska.org</p>

            <div class="highlight-box" style="text-align: center;">
                <p class="bitcoin-orange"><strong>Final Thought:</strong> Bitcoin represents more than money - it's a tool for human freedom and prosperity. In Alaska, with our values of self-reliance and independence, Bitcoin feels like a natural fit. Welcome to your financial sovereignty. Welcome to the future of money.</p>
            </div>
        `
    },
    {
        id: 18,
        title: "Appendix A: Essential Resources & Reading List",
        subtitle: "Comprehensive Guide to Bitcoin Education Materials",
        theme: "appendix-theme",
        content: `
            <h3 class="bitcoin-orange">📚 Essential Books (Ranked by Priority)</h3>

            <h4 class="gold">Beginner Level - Start Here</h4>
            <ul>
                <li><strong>"The Bitcoin Standard" by Saifedean Ammous</strong> - Best introduction to Bitcoin as sound money (8-10 hours, $15-25)</li>
                <li><strong>"21 Lessons" by Gigi</strong> - Philosophical insights from Bitcoin adoption (4-6 hours, Free online)</li>
                <li><strong>"Layered Money" by Nik Bhatia</strong> - Understanding monetary layers and Bitcoin's place (6-8 hours, $15-20)</li>
            </ul>

            <h4 class="gold">Intermediate Level - Technical Understanding</h4>
            <ul>
                <li><strong>"Mastering Bitcoin" by Andreas Antonopoulos</strong> - Technical deep dive (12-15 hours, Free online)</li>
                <li><strong>"Programming Bitcoin" by Jimmy Song</strong> - Learn Bitcoin by building it (20-30 hours)</li>
                <li><strong>"The Fiat Standard" by Saifedean Ammous</strong> - Deep analysis of current monetary system (10-12 hours)</li>
            </ul>

            <h3 class="bitcoin-orange">🎧 Essential Podcasts</h3>
            <ul>
                <li><strong>"What Bitcoin Did" by Peter McCormack</strong> - Long-form interviews, diverse perspectives</li>
                <li><strong>"The Bitcoin Standard Podcast" by Saifedean Ammous</strong> - Austrian economics, monetary theory</li>
                <li><strong>"Bitcoin Audible" by Guy Swann</strong> - Article readings and commentary</li>
                <li><strong>"Bitcoin Optech Podcast"</strong> - Technical updates for developers</li>
            </ul>

            <h3 class="bitcoin-orange">🌐 Online Resources</h3>
            <ul>
                <li><strong>Bitcoin.org</strong> - Official Bitcoin information and wallet recommendations</li>
                <li><strong>Lopp.net</strong> - Comprehensive Bitcoin resource compilation by Jameson Lopp</li>
                <li><strong>River Learn</strong> - Educational articles and guides for beginners</li>
                <li><strong>Bitcoin Magazine</strong> - News, analysis, and technical articles</li>
            </ul>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Learning Schedule Recommendations:</strong><br>
                <strong>30-Day Bitcoin Basics:</strong> Week 1: "The Bitcoin Standard", Week 2: Podcasts, Week 3: First wallet setup, Week 4: Join communities<br>
                <strong>90-Day Technical:</strong> Month 1: "Mastering Bitcoin", Month 2: Node setup, Month 3: Advanced topics<br>
                <strong>1-Year Expert:</strong> Foundation → Technical skills → Specialization → Community contribution</p>
            </div>
        `
    },
    {
        id: 19,
        title: "Appendix B: Complete Hardware Guide",
        subtitle: "Detailed Specifications and Setup Instructions",
        theme: "appendix-theme",
        content: `
            <h3 class="bitcoin-orange">🔒 Hardware Wallets - Complete Comparison</h3>

            <h4 class="gold">Coldcard Mk4 - The Gold Standard</h4>
            <ul>
                <li><strong>Secure Element:</strong> ATECC608B (Common Criteria EAL5+)</li>
                <li><strong>Operating Temperature:</strong> -20°C to +60°C (perfect for Alaska)</li>
                <li><strong>Power:</strong> USB-C or 2x AAA batteries</li>
                <li><strong>Air-Gap Capable:</strong> Complete offline operation via QR codes or SD card</li>
                <li><strong>Security Features:</strong> Duress PIN, brick-me PIN, tamper evidence</li>
                <li><strong>Price:</strong> $150-200</li>
            </ul>

            <h4 class="gold">SeedSigner - DIY Security Champion</h4>
            <ul>
                <li><strong>Base Hardware:</strong> Raspberry Pi Zero 2W + Camera + LCD</li>
                <li><strong>Total Cost:</strong> ~$90 (DIY build)</li>
                <li><strong>Security Philosophy:</strong> Stateless, air-gap only, open source</li>
                <li><strong>Alaska Advantage:</strong> Can be rebuilt if damaged, parts available locally</li>
                <li><strong>Features:</strong> Dice entropy, camera entropy, QR code communication</li>
            </ul>

            <h4 class="gold">Passport - User Experience Leader</h4>
            <ul>
                <li><strong>Display:</strong> 2.7" e-ink (readable in bright sunlight)</li>
                <li><strong>Battery:</strong> Rechargeable Li-ion (1000mAh)</li>
                <li><strong>Operating Temperature:</strong> -10°C to +50°C</li>
                <li><strong>Alaska Advantage:</strong> Sunlight readable, premium build quality</li>
                <li><strong>Price:</strong> $200-250</li>
            </ul>

            <h3 class="bitcoin-orange">🖥️ Bitcoin Node Hardware</h3>

            <h4 class="gold">Raspberry Pi 5 - Recommended Configuration</h4>
            <ul>
                <li><strong>CPU:</strong> Quad-core ARM Cortex-A76, 2.4GHz</li>
                <li><strong>RAM:</strong> 8GB LPDDR4X (recommended for Bitcoin node)</li>
                <li><strong>Storage:</strong> 1TB USB 3.0 SSD + 64GB microSD</li>
                <li><strong>Power:</strong> USB-C PD (25W max)</li>
                <li><strong>Total Cost:</strong> ~$240 complete setup</li>
                <li><strong>Alaska Optimization:</strong> Cold weather improves performance, UPS recommended</li>
            </ul>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Alaska-Specific Considerations:</strong> Extreme temperature operation, battery backup for outages, satellite internet compatibility, heat recovery from mining equipment, and ruggedized cases for outdoor use.</p>
            </div>
        `
    },
    {
        id: 20,
        title: "Appendix C: Advanced Security Protocols",
        subtitle: "Comprehensive Security Framework for Bitcoin in Alaska",
        theme: "appendix-theme",
        content: `
            <h3 class="bitcoin-orange">🛡️ Threat Modeling for Alaska</h3>

            <h4 class="gold">Environmental Threats</h4>
            <ul>
                <li><strong>Extreme Weather:</strong> Temperatures below -40°F damaging hardware</li>
                <li><strong>Power Grid Instability:</strong> Frequent outages corrupting data</li>
                <li><strong>Natural Disasters:</strong> Earthquakes, floods, wildfires destroying equipment</li>
                <li><strong>Mitigation:</strong> Geographic distribution, UPS systems, ruggedized storage</li>
            </ul>

            <h4 class="gold">Physical Security Threats</h4>
            <ul>
                <li><strong>Remote Location Vulnerability:</strong> Isolation making you a target</li>
                <li><strong>Limited Emergency Services:</strong> Slow response times</li>
                <li><strong>Mitigation:</strong> Operational security, decoy wallets, community networks</li>
            </ul>

            <h3 class="bitcoin-orange">🔐 Multi-Signature Security Architecture</h3>

            <h4 class="gold">2-of-3 Multisig Setup for Individuals</h4>
            <ul>
                <li><strong>Key 1:</strong> Primary Coldcard at home (daily access)</li>
                <li><strong>Key 2:</strong> Backup SeedSigner at remote cabin (monthly access)</li>
                <li><strong>Key 3:</strong> Passport with trusted family member in Lower 48 (emergency access)</li>
            </ul>

            <h4 class="gold">3-of-5 Multisig for Large Holdings</h4>
            <ul>
                <li><strong>Key 1:</strong> Personal Coldcard (daily access)</li>
                <li><strong>Key 2:</strong> Backup Coldcard in bank safe deposit box</li>
                <li><strong>Key 3:</strong> SeedSigner at remote Alaska location</li>
                <li><strong>Key 4:</strong> Trusted family member in different state</li>
                <li><strong>Key 5:</strong> Professional custody service (Casa, Unchained)</li>
            </ul>

            <h3 class="bitcoin-orange">🎲 Entropy Generation Protocols</h3>

            <h4 class="gold">Dice-Based Entropy (Recommended)</h4>
            <ul>
                <li><strong>Equipment:</strong> Casino-grade dice, dice cup, recording sheet</li>
                <li><strong>Process:</strong> 99+ rolls for 256 bits of entropy</li>
                <li><strong>Conversion:</strong> Dice results → binary → BIP39 words</li>
                <li><strong>Verification:</strong> Statistical randomness tests</li>
            </ul>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Alaska Security Advantages:</strong> Permafrost provides stable buried caches, remote cabins offer natural off-site storage, harsh environment deters criminals, and self-reliance culture understands redundancy importance.</p>
            </div>
        `
    },
    {
        id: 21,
        title: "Appendix D: Alaska Bitcoin Opportunities",
        subtitle: "Comprehensive Analysis of Alaska's Unique Bitcoin Advantages",
        theme: "alaska-theme",
        content: `
            <h3 class="gold">⚡ Energy Landscape Analysis</h3>

            <h4 class="bitcoin-orange">Renewable Energy Resources</h4>
            <ul>
                <li><strong>Hydroelectric Power:</strong> 1,500+ MW installed capacity, $0.08-0.15/kWh</li>
                <li><strong>Geothermal Resources:</strong> 57 known areas, 200-500 MW potential</li>
                <li><strong>Wind Power:</strong> Class 6-7 winds, 35-45% capacity factor</li>
                <li><strong>Natural Gas:</strong> 35+ trillion cubic feet reserves, billions flared annually</li>
            </ul>

            <h4 class="bitcoin-orange">Stranded Energy Monetization</h4>
            <ul>
                <li><strong>North Slope Gas Flaring:</strong> 3-5 billion cubic feet annually = 400-650 MW mining potential</li>
                <li><strong>Remote Hydroelectric:</strong> 200-400 MW unused capacity</li>
                <li><strong>Wind Curtailment:</strong> 20-30% of wind energy wasted = 50-80 MW opportunity</li>
                <li><strong>Revenue Potential:</strong> $250-450 million annually from stranded energy</li>
            </ul>

            <h3 class="gold">🏭 Industrial Bitcoin Mining Development</h3>

            <h4 class="bitcoin-orange">Recommended Development Locations</h4>
            <ul>
                <li><strong>Fairbanks Area:</strong> University partnership, 20-50 MW potential, 12-18 months</li>
                <li><strong>Kenai Peninsula:</strong> Natural gas infrastructure, 50-100 MW potential, 18-24 months</li>
                <li><strong>Southeast Alaska:</strong> Abundant hydroelectric, 100-200 MW potential, 24-36 months</li>
            </ul>

            <h4 class="bitcoin-orange">Mining Economics (10 MW Facility)</h4>
            <ul>
                <li><strong>Daily Power Cost:</strong> 240 MWh × $0.08/kWh = $19,200</li>
                <li><strong>Daily Bitcoin Production:</strong> 0.5-1.0 BTC</li>
                <li><strong>Daily Revenue:</strong> $22,500-45,000 (at $45,000/BTC)</li>
                <li><strong>Annual Profit:</strong> $1.2-9.4 million</li>
            </ul>

            <h3 class="gold">🏘️ Community-Scale Projects</h3>

            <h4 class="bitcoin-orange">Municipal Bitcoin Mining</h4>
            <ul>
                <li><strong>Direct Municipal Operation:</strong> City-owned mining, revenue reduces taxes</li>
                <li><strong>Public-Private Partnership:</strong> Shared expertise and risk</li>
                <li><strong>Community Cooperative:</strong> Resident investment and profit sharing</li>
            </ul>

            <h4 class="bitcoin-orange">Economic Impact (5-Year Projection)</h4>
            <ul>
                <li><strong>Job Creation:</strong> 1,500-3,000 total jobs (direct + indirect)</li>
                <li><strong>Investment:</strong> $800 million - 2.3 billion total</li>
                <li><strong>Tax Revenue:</strong> $17-53 million annually</li>
                <li><strong>Average Salary:</strong> $60,000-100,000 annually</li>
            </ul>

            <div class="highlight-box">
                <p class="gold"><strong>Alaska's Unique Position:</strong> Abundant renewable energy + business-friendly environment + culture of innovation + climate advantages = Potential to become the Bitcoin capital of North America</p>
            </div>
        `
    },
    {
        id: 22,
        title: "Appendix E: Technical Deep Dive",
        subtitle: "Advanced Bitcoin Technology and Implementation Details",
        theme: "appendix-theme",
        content: `
            <h3 class="bitcoin-orange">🔗 Bitcoin Protocol Fundamentals</h3>

            <h4 class="gold">Cryptographic Foundations</h4>
            <ul>
                <li><strong>Hash Functions (SHA-256):</strong> One-way function, 2^256 possible outputs</li>
                <li><strong>Digital Signatures (ECDSA/Schnorr):</strong> Elliptic curve secp256k1</li>
                <li><strong>Key Generation:</strong> Private key → Public key → Bitcoin address</li>
                <li><strong>Security Level:</strong> Practically unbreakable with current technology</li>
            </ul>

            <h4 class="gold">Transaction Structure</h4>
            <ul>
                <li><strong>Components:</strong> Version, inputs, outputs, locktime</li>
                <li><strong>Script System:</strong> Stack-based, non-Turing complete programming</li>
                <li><strong>Common Scripts:</strong> P2PKH, P2SH, P2WPKH, P2WSH, P2TR</li>
                <li><strong>Advanced Features:</strong> Multisig, time locks, hash locks</li>
            </ul>

            <h3 class="bitcoin-orange">⚡ Lightning Network Architecture</h3>

            <h4 class="gold">Payment Channel Mechanics</h4>
            <ul>
                <li><strong>Funding Transaction:</strong> Both parties commit Bitcoin to 2-of-2 multisig</li>
                <li><strong>Commitment Transactions:</strong> Off-chain balance updates</li>
                <li><strong>HTLCs:</strong> Hash Time Locked Contracts for multi-hop payments</li>
                <li><strong>Closing Transaction:</strong> Final settlement on Bitcoin blockchain</li>
            </ul>

            <h4 class="gold">Alaska Lightning Applications</h4>
            <ul>
                <li><strong>Tourism Payments:</strong> Instant Bitcoin payments for services</li>
                <li><strong>Remote Commerce:</strong> E-commerce without traditional banking</li>
                <li><strong>Cross-Border Remittances:</strong> Send money to/from Lower 48</li>
                <li><strong>Micropayments:</strong> Pay-per-use for internet, power, services</li>
            </ul>

            <h3 class="bitcoin-orange">🔐 Advanced Security Implementations</h3>

            <h4 class="gold">Hierarchical Deterministic (HD) Wallets</h4>
            <ul>
                <li><strong>BIP32 Key Derivation:</strong> Master seed → child keys</li>
                <li><strong>Derivation Paths:</strong> m/44'/0'/0'/0/0 (Legacy), m/84'/0'/0'/0/0 (SegWit)</li>
                <li><strong>Extended Keys:</strong> xprv (private), xpub (public only)</li>
                <li><strong>Security:</strong> xpub leakage compromises privacy, not funds</li>
            </ul>

            <h4 class="gold">Privacy Technologies</h4>
            <ul>
                <li><strong>CoinJoin:</strong> Break transaction links through mixing</li>
                <li><strong>Tor Integration:</strong> Hide IP address and location</li>
                <li><strong>Address Management:</strong> Never reuse Bitcoin addresses</li>
                <li><strong>UTXO Management:</strong> Control which coins you spend</li>
            </ul>

            <div class="highlight-box">
                <p class="bitcoin-orange"><strong>Alaska Development Opportunities:</strong> Cold weather testing, satellite internet optimization, renewable energy integration, and remote connectivity improvements for Bitcoin Core.</p>
            </div>
        `
    }
];

// Function to load all slides dynamically
function loadSlides() {
    const container = document.body;
    
    // Remove existing slides except the first one
    const existingSlides = document.querySelectorAll('.slide:not(:first-child)');
    existingSlides.forEach(slide => slide.remove());
    
    // Add remaining slides
    for (let i = 1; i < slideData.length; i++) {
        const slide = slideData[i];
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${slide.theme}`;
        
        let titleElement = '';
        if (slide.title) {
            if (slide.title.includes('Bitcoin Alaska')) {
                titleElement = `<h1>${slide.title}</h1>`;
            } else {
                titleElement = `<h2>${slide.title}</h2>`;
            }
        }
        
        let subtitleElement = '';
        if (slide.subtitle) {
            subtitleElement = `<p class="subtitle">${slide.subtitle}</p>`;
        }
        
        slideElement.innerHTML = `
            <img src="assets/bitcoin-logo.png" alt="Bitcoin Logo" class="bitcoin-logo logo-corner">
            ${titleElement}
            ${subtitleElement}
            <div class="content-container">
                ${slide.content}
            </div>
        `;
        
        // Insert before navigation
        const navigation = document.querySelector('.navigation');
        container.insertBefore(slideElement, navigation);
    }
}

// Load slides when DOM is ready
function initializeSlides() {
    try {
        loadSlides();

        // Update total slides count
        const totalSlides = slideData.length;
        const totalSlidesElement = document.getElementById('total-slides');
        if (totalSlidesElement) {
            totalSlidesElement.textContent = totalSlides;
        }

        // Dispatch custom event to signal slides are ready
        const slidesReadyEvent = new CustomEvent('slidesReady');
        document.dispatchEvent(slidesReadyEvent);

    } catch (error) {
        console.error('Error initializing slides:', error);
        // Retry after a short delay
        setTimeout(initializeSlides, 100);
    }
}

// Ensure DOM is fully loaded before proceeding
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSlides);
} else {
    initializeSlides();
}
