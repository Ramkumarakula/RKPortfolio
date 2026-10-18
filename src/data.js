const GH = "https://github.com/Ramkumarakula";

export const profile = {
  name: "Ram Kumar Akula",
  roles: ["AI Systems Engineer", "Blockchain Architect", "Full-Stack Developer", "Trust & Security Builder"],
  bio: "I build systems where AI is useful and trust is provable: RAG interviewers, cryptographically gated agent payments, permissioned supply-chain ledgers, and offline-first tools people actually use.",
  email: "ramkumarafw@gmail.com",
  github: GH,
  linkedin: "https://www.linkedin.com/in/ram-kumar-akula/",
};

// Flagship projects. Copy is sourced from each repository's README.
export const featured = [
  {
    id: "interviewer",
    visual: "interviewer",
    hue: "violet",
    kicker: "AI · RAG · Voice",
    title: "AI Technical Interviewer",
    repo: `${GH}/justRAG`,
    tagline: "A RAG-grounded interviewer that scores every answer against a real job description.",
    points: [
      "12 competency chunks embedded as 768-d vectors in Supabase pgvector with HNSW cosine search",
      "Hybrid turn score: 30% semantic similarity + 70% LLM-judged technical depth",
      "Gemini 2.5 Flash and Groq Llama-3.3 70B with a guaranteed JSON evaluation schema and follow-up probes",
      "Live speech-to-text answers, AI voice-over, and a radar breakdown of each turn",
    ],
    stack: ["Node.js", "Express", "Supabase pgvector", "Gemini", "Groq Llama-3", "Web Speech API"],
    arch: true,
  },
  {
    id: "trustrail",
    visual: "trustrail",
    hue: "teal",
    kicker: "Agentic Commerce · Razorpay Track 01",
    title: "TrustRail",
    repo: `${GH}/Razorpay`,
    tagline: "A trust gateway that lets autonomous AI buyer agents pay with Razorpay without unmonitored spending.",
    points: [
      "The LLM only advises. Payment authorization is deterministic, cryptographic and server-gated",
      "Every purchase intent is canonical JSON signed with Ed25519, plus a nonce and an expiry window",
      "Policy engine with spend allowances, velocity checks and human-in-the-loop exception tokens",
      "Append-only, SHA-256 hash-chained audit ledger with tamper detection",
      "Multilingual voice commerce (Hindi, Tamil, Telugu) and a fine-tuned 1.5B SLM with a DPO loop",
    ],
    stack: ["TypeScript", "Razorpay", "Ed25519", "React", "Sarvam AI", "SLM · DPO"],
  },
  {
    id: "coldtrust",
    visual: "coldtrust",
    hue: "sky",
    kicker: "Enterprise Blockchain · Logistics",
    title: "ColdTrust",
    repo: `${GH}/Coldtrust`,
    tagline: "A 4-organization Hyperledger Fabric consortium that enforces cold-chain compliance for vaccines and biologics.",
    points: [
      "Manufacturer, Transport, Retailer and Regulator orgs on Fabric v2.5 with a Raft orderer across 13 containers",
      "Chaincode rule engine: a reading above maxTemp flips the shipment to COMPROMISED, permanently",
      "Layered TypeScript API (Zod, Winston, Swagger) over the Fabric Gateway",
      "React 19 operations dashboard and a real-time IoT telemetry simulator",
    ],
    stack: ["Hyperledger Fabric", "TypeScript", "CouchDB", "React 19", "Docker", "Zod"],
  },
  {
    id: "designfinder",
    visual: "designfinder",
    hue: "coral",
    kicker: "Computer Vision · Desktop App",
    title: "Design Finder",
    repo: `${GH}/Scanme-forBRO-`,
    tagline: "“Have I designed this before?” Capture any design on screen and jump to its SketchUp master file.",
    points: [
      "Fully offline Windows app that sits on screen as a tiny floating symbol",
      "Color-blind matching: grayscale, margin trimming, CLAHE, then DCT fingerprints of edges and tones",
      "7/7 known designs ranked #1, including recolored, dark-mode and WhatsApp-compressed copies",
      "Hardened: no network code, parameterized SQL, bandit and pip-audit in CI",
    ],
    stack: ["Python", "OpenCV", "DCT Hashing", "SQLite", "Tkinter", "PyInstaller"],
  },
  {
    id: "notary",
    visual: "notary",
    hue: "amber",
    kicker: "Web3 · Smart Contracts",
    title: "Decentralized Notary dApp",
    repo: null,
    tagline: "Immutable proof-of-existence for documents on Ethereum Sepolia, with no central authority.",
    points: [
      "Files are hashed client-side with SHA-256, so the document itself never leaves the browser",
      "Solidity contract notarizes the hash with the owner address and a block timestamp",
      "Anyone can verify a file later against the on-chain record",
      "MetaMask wallet flow over Ethers.js v6 and JSON-RPC",
    ],
    stack: ["Solidity", "Ethers.js v6", "Hardhat", "Sepolia", "MetaMask"],
  },
];

export const more = [
  {
    title: "GuardianWallet AI",
    repo: `${GH}/AI-Powered-Wallet-Drain-and-Phishing-Detection`,
    text: "A pre-sign firewall that decodes calldata and blocks wallet-draining approvals before you sign them.",
    stack: ["React", "Ethers.js", "Heuristics"],
  },
  {
    title: "Codity Job Scheduler",
    repo: `${GH}/Codityai`,
    text: "Distributed job scheduler with worker leases, retries, cron schedules and a dead-letter queue.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Data Vortex Restoration",
    repo: `${GH}/Data_vortex_social_engine_data`,
    text: "Reproducible cleaning and audit of 12k corrupted social posts, reconciled line by line with no fabricated values.",
    stack: ["Python", "pandas", "SQLite"],
  },
  {
    title: "Dad’s Business Assistant",
    repo: `${GH}/Dad-Assistant`,
    text: "Speak in Telugu, get a professional English email or a marketing visual for a generator-hire business.",
    stack: ["Gemini", "Web Speech API"],
  },
  {
    title: "Green Energy Portfolio",
    repo: `${GH}/green-energy-portfolio`,
    text: "Showcase of hybrid biogas, wind, solar and biomass system designs from SRM KTR.",
    stack: ["React", "TypeScript", "shadcn/ui"],
  },
];

export const skills = [
  { name: "AI & ML", items: ["RAG", "pgvector", "Gemini", "Groq / Llama-3", "SLM fine-tuning", "DPO", "TensorFlow.js", "Computer Vision"] },
  { name: "Blockchain & Security", items: ["Solidity", "Hyperledger Fabric", "Ethers.js", "Ed25519", "Hash-chained ledgers", "Threat modeling"] },
  { name: "Full-Stack", items: ["React", "TypeScript", "Node.js", "Express", "Spring Boot", "Vite", "Tailwind CSS"] },
  { name: "Data & Infra", items: ["PostgreSQL", "Supabase", "CouchDB", "SQLite", "Docker", "Python", "Java"] },
];

export const marquee = ["RAG", "Supabase", "Gemini", "Groq", "Razorpay", "Ed25519", "Hyperledger Fabric", "Solidity", "Ethers.js", "React", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL", "Docker", "Python", "OpenCV"];
