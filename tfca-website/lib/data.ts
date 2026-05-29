export const SERVICES = [
  {
    icon: "📜",
    title: "Letters of Credit (LC)",
    slug: "letters-of-credit",
    short: "Documentary credit guaranteeing payment to exporters under UCP 600 via regulated banking partners.",
    description:
      "A Letter of Credit is one of the most trusted payment mechanisms in international trade. TFCA facilitates LCs issued through regulated banking institutions in full compliance with UCP 600 — the International Chamber of Commerce's Uniform Customs and Practice for Documentary Credits. Our LCs protect both importers and exporters, ensuring payment is only released when agreed shipment and document conditions are met.",
    standards: ["UCP 600", "ICC"],
  },
  {
    icon: "🏛️",
    title: "Standby Letters of Credit",
    slug: "standby-lc",
    short: "Secondary payment assurance instruments used as financial guarantees. ISP98 & UCP 600 compliant.",
    description:
      "A Standby Letter of Credit (SBLC) acts as a safety net — a bank's promise to pay if the applicant fails to fulfil their obligation. Used widely in project contracts, trade deals, and financial transactions, our SBLCs are issued under ISP98 and UCP 600 through licensed financial institutions.",
    standards: ["ISP98", "UCP 600"],
  },
  {
    icon: "🏦",
    title: "Bank Guarantees",
    slug: "bank-guarantees",
    short: "Issued through licensed institutions. Protects all parties in trade & construction contracts (URDG 758).",
    description:
      "Bank Guarantees provide financial assurance that a party will fulfill their contractual obligations. Issued through TFCA's network of regulated banking partners under URDG 758, our bank guarantees are verifiable, compliant, and accepted globally.",
    standards: ["URDG 758", "ICC"],
  },
  {
    icon: "💰",
    title: "Proof of Funds (POF)",
    slug: "proof-of-funds",
    short: "Verifiable documentation confirming financial capacity, issued by regulated banking institutions.",
    description:
      "Proof of Funds is a formal banking document confirming that a client has sufficient financial resources to complete a transaction. TFCA arranges genuine POF documentation through licensed banks, providing counterparties the confidence to proceed with negotiations.",
    standards: ["KYC/AML"],
  },
  {
    icon: "🔒",
    title: "Blocked Funds",
    slug: "blocked-funds",
    short: "Funds held in a designated bank account as collateral, providing assurance to counterparties.",
    description:
      "Blocked funds are client funds held and ring-fenced in a designated bank account to serve as collateral or security for a specific transaction. TFCA coordinates blocked fund arrangements through partner banks, providing verified documentation acceptable to counterparties worldwide.",
    standards: ["KYC/AML"],
  },
  {
    icon: "📋",
    title: "Performance Bond",
    slug: "performance-bond",
    short: "Surety instruments guaranteeing a contractor will complete a project as specified.",
    description:
      "A Performance Bond guarantees that a contractor or supplier will complete their obligations under a contract. If they fail, the bond pays out to the project owner. TFCA facilitates performance bonds through licensed sureties and banking institutions for infrastructure, construction, and supply contracts.",
    standards: ["URDG 758", "ICC"],
  },
  {
    icon: "✉️",
    title: "Bank Comfort Letters",
    slug: "bank-comfort-letters",
    short: "Formal bank communications confirming a client's financial standing for business negotiations.",
    description:
      "A Bank Comfort Letter (BCL) is a formal statement from a banking institution confirming a client's financial relationship, balance, or capacity. Used in high-value negotiations and due diligence processes, TFCA arranges BCLs from regulated banks to facilitate smooth business transactions.",
    standards: ["KYC/AML"],
  },
  {
    icon: "🤲",
    title: "Ready, Willing & Able (RWA)",
    slug: "rwa",
    short: "A formal bank declaration confirming readiness to proceed with a financial transaction.",
    description:
      "An RWA letter is a formal declaration from a bank or financial institution confirming that a client is ready, willing, and able to proceed with a specific financial transaction or investment. TFCA facilitates RWA letters through regulated banking partners as part of structured transaction workflows.",
    standards: ["ICC"],
  },
  {
    icon: "🚀",
    title: "Project Funding",
    slug: "project-funding",
    short: "Structured financing for large-scale African projects in infrastructure, energy, and agriculture.",
    description:
      "TFCA provides structured project financing solutions for large-scale development initiatives across Africa — from infrastructure and energy to real estate and agriculture. We work with institutional investors and development finance institutions to structure funding that meets project requirements.",
    standards: ["KYC/AML", "ICC"],
  },
  {
    icon: "💵",
    title: "Advance Payment Bond",
    slug: "advance-payment-bond",
    short: "Protects buyers who make advance payments, ensuring refund if seller defaults.",
    description:
      "An Advance Payment Bond protects a buyer who has made an advance payment to a supplier. If the supplier fails to deliver, the bond ensures the buyer recovers their advance payment. TFCA facilitates these through licensed banking institutions.",
    standards: ["URDG 758"],
  },
  {
    icon: "📌",
    title: "Bid Bond",
    slug: "bid-bond",
    short: "Guarantees a bidder will enter into contract if awarded a project or tender.",
    description:
      "A Bid Bond (or Tender Bond) guarantees that a bidder will enter into a contract if they are awarded a tender. It protects the project owner from bidders who withdraw after winning. TFCA facilitates bid bonds through regulated surety companies and banking institutions.",
    standards: ["ICC"],
  },
];

export const OFFICES = {
  africa: [
    { country: "Nigeria", flag: "🇳🇬", city: "Kano", address: "Ahmadu Bello Way, Kano City" },
    { country: "Ghana", flag: "🇬🇭", city: "Accra", address: "Silver Star Towers, Airport City" },
    { country: "Kenya", flag: "🇰🇪", city: "Nairobi", address: "Westlands Rhapta Road, SK Offices" },
    { country: "South Africa", flag: "🇿🇦", city: "Johannesburg", address: "AMR Office Park, Bedfordview" },
    { country: "Uganda", flag: "🇺🇬", city: "Kampala", address: "Galaxy House, Bukoto, Ntinda Road" },
    { country: "Tanzania", flag: "🇹🇿", city: "Dar es Salaam", address: "Acacia Estates, Kinondoni" },
    { country: "Senegal", flag: "🇸🇳", city: "Dakar", address: "Immeuble Iris, 5th Floor" },
    { country: "Zimbabwe", flag: "🇿🇼", city: "Harare", address: "1 Boshoff Drive, Graniteside" },
  ],
  asia: [
    { country: "China – Guangzhou", flag: "🇨🇳", city: "Guangzhou", address: "Clifford Group B, Block 6F 601C" },
    { country: "China – Tianjin", flag: "🇨🇳", city: "Tianjin", address: "Qixian Nanli, Heiniucheng Road" },
    { country: "Hong Kong", flag: "🇭🇰", city: "Kowloon", address: "Concordia Plaza, Tsim Sha Tsui" },
    { country: "Singapore", flag: "🇸🇬", city: "Singapore", address: "3 Fraser St, #08-21, 189352" },
    { country: "Malaysia", flag: "🇲🇾", city: "Kuala Lumpur", address: "Vista Tower, The Intermark" },
    { country: "India", flag: "🇮🇳", city: "Mumbai", address: "Parinee Crescanzo, BKC, Bandra" },
    { country: "Pakistan", flag: "🇵🇰", city: "Islamabad", address: "Sector G-11/1, Islamabad" },
    { country: "Thailand", flag: "🇹🇭", city: "Bangkok", address: "P23 Building, Sukhumvit 23" },
  ],
  europe: [
    { country: "United Kingdom", flag: "🇬🇧", city: "Borehamwood", address: "Kinetic Centre, Theobald Street" },
    { country: "Italy", flag: "🇮🇹", city: "Rome", address: "Via XX Settembre, 118" },
    { country: "Switzerland", flag: "🇨🇭", city: "Zürich", address: "Lutherstrasse 36, 8004 Zürich" },
    { country: "Turkey", flag: "🇹🇷", city: "Bursa", address: "Esentepe Mahallesi, Nilüfer" },
    { country: "USA", flag: "🇺🇸", city: "Ohio", address: "732 Weatherstone Rd, Suite 100" },
  ],
};

export const STATS = [
  { value: "40+", label: "Years Expertise" },
  { value: "ICC", label: "Compliant" },
  { value: "30+", label: "Countries Served" },
  { value: "UCP 600", label: "Standard" },
];

export const COMPLIANCE_POINTS = [
  {
    icon: "📖",
    title: "ICC Standards",
    desc: "We operate in full accordance with International Chamber of Commerce (ICC) trade rules and documentary credit practices — UCP 600, ISP98, and URDG 758.",
  },
  {
    icon: "🔍",
    title: "KYC / AML Screening",
    desc: "Every client and transaction undergoes thorough Know-Your-Customer (KYC) and Anti-Money Laundering (AML) screening before proceeding.",
  },
  {
    icon: "⚖️",
    title: "Regulatory Alignment",
    desc: "All trade instruments are issued through licensed banks or regulated financial entities under applicable international banking laws.",
  },
  {
    icon: "🛡️",
    title: "Data Privacy",
    desc: "All client information is handled in full compliance with global data protection standards.",
  },
  {
    icon: "🤝",
    title: "Ethical Partnerships",
    desc: "We maintain strict due diligence in selecting partners, intermediaries, and clients to uphold ethical business conduct and international trade integrity.",
  },
];
