import {
  Receipt,
  FileText,
  Calculator,
  Building2,
  Briefcase,
  UtensilsCrossed,
  Globe2,
  BookOpenCheck,
  Banknote,
  CreditCard,
  ShieldCheck,
  Award,
  KeyRound,
  Rocket,
  Plane,
  GraduationCap,
  Car,
  Landmark,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export interface ServiceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  category: "Tax" | "Registration" | "Loans" | "Investment & Insurance" | "Other";
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    headline: string;
    subline: string;
  };
  sections: ServiceSection[];
  documents: string[];
  process: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
}

const baseFaqs = (title: string) => [
  {
    q: `How long does ${title} take with Progateway?`,
    a: "Timelines depend on the service, document completeness and the response time of the relevant government portal, bank, NBFC or insurer. We explain the expected process after reviewing your case.",
  },
  {
    q: "What are your fees?",
    a: "Fees are shared after the initial consultation and depend on the service, applicant type, documentation and scope of support required.",
  },
  {
    q: "Do you serve clients outside Navsari?",
    a: "Progateway is based in Navsari. Contact the team to confirm whether your specific service and location can be handled remotely.",
  },
];

const RAW_SERVICES: Service[] = [
  // ───────────────────────── TAX ─────────────────────────
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    short: "Accurate books, bank reconciliation and monthly MIS reports — your outsourced finance team.",
    icon: BookOpenCheck,
    category: "Tax",
    metaTitle: "Accounting & Bookkeeping Services in Navsari | Progateway Consultancy",
    metaDescription:
      "Professional bookkeeping, bank reconciliation and monthly MIS reporting in Tally & Zoho Books for businesses in Navsari, Gujarat. Get clean, audit-ready books.",
    hero: {
      eyebrow: "Book Keeping & Financial Reports",
      headline: "Accounting & Bookkeeping You Can Rely On",
      subline:
        "Clean books, audit-ready financials and clear monthly dashboards — without the cost of hiring a full in-house finance team.",
    },
    sections: [
      {
        heading: "Why accurate books matter",
        body: "Disorganised books cost businesses far more than the time spent fixing them — missed input tax credit, wrong tax estimates, rejected loan applications and stressful year-end closing. We maintain your records in real time so every decision is backed by current, reliable numbers.",
      },
      {
        heading: "What's included",
        body: "We work as your outsourced finance team, end to end.",
        bullets: [
          "Daily / weekly transaction entry",
          "Bank & credit card reconciliation",
          "Receivables & payables tracking",
          "Monthly P&L and balance sheet",
          "Year-end finalisation & audit support",
        ],
      },
    ],
    documents: [
      "Sales & purchase invoices",
      "Bank statements",
      "Expense vouchers",
      "Previous year financials",
    ],
    process: [
      "Chart of accounts setup",
      "Software onboarding (Tally / Zoho Books)",
      "Monthly bookkeeping",
      "MIS review call",
      "Year-end finalisation",
    ],
    faqs: baseFaqs("accounting and bookkeeping"),
    related: ["gst-return-filing", "income-tax-filing", "tax-planning"],
  },
  {
    slug: "gst-registration",
    title: "GST Registration",
    short: "Get your GSTIN within days with end-to-end documentation support.",
    icon: Receipt,
    category: "Tax",
    metaTitle: "GST Registration in Navsari, Gujarat | Progateway Consultancy",
    metaDescription:
      "Apply for GST registration in Navsari with expert consultants. Fast GSTIN, document support and post-registration compliance guidance.",
    hero: {
      eyebrow: "Goods & Services Tax",
      headline: "GST Registration Made Simple",
      subline:
        "Become GST compliant in days. We handle documentation, application, ARN tracking and post-registration setup for individuals, traders and businesses.",
    },
    sections: [
      {
        heading: "What is GST registration?",
        body: "GST (Goods and Services Tax) is India's unified indirect tax. Any business crossing the prescribed turnover threshold — or selling inter-state, on e-commerce or providing certain services — must register and obtain a GSTIN. Registration enables you to collect tax, claim input credit, and operate legally across India.",
      },
      {
        heading: "Who needs GST registration?",
        body: "Most growing businesses need it sooner than they think.",
        bullets: [
          "Businesses crossing the applicable GST registration threshold for their state and activity",
          "Sellers on Amazon, Flipkart, Meesho and other e-commerce platforms",
          "Inter-state suppliers of goods or services",
          "Importers, exporters and casual taxable persons",
          "Voluntary registrants who want input tax credit",
        ],
      },
      {
        heading: "Benefits of GST registration",
        body: "Beyond compliance, GST registration unlocks credibility and growth.",
        bullets: [
          "Legally collect GST and pass on input credit to customers",
          "Sell across India without state-wise barriers",
          "Eligibility for tenders, marketplaces and corporate clients",
          "Stronger profile for loans and credit facilities",
        ],
      },
    ],
    documents: [
      "PAN card of business / proprietor",
      "Aadhaar of proprietor / partners / directors",
      "Passport-size photograph",
      "Proof of business address (electricity bill / rent agreement)",
      "Bank account details or cancelled cheque",
      "Digital Signature (for companies & LLPs)",
    ],
    process: [
      "Free consultation & eligibility check",
      "Document collection over WhatsApp / email",
      "Application filing on GST portal",
      "OTP & Aadhaar authentication",
      "ARN issued, application tracked",
      "GSTIN delivered with welcome kit",
    ],
    faqs: baseFaqs("GST registration"),
    related: ["gst-return-filing", "income-tax-filing", "company-firm-registration"],
  },
  {
    slug: "gst-return-filing",
    title: "GST Return Filing",
    short: "Monthly & quarterly GSTR filing handled by experts — never miss a deadline.",
    icon: FileText,
    category: "Tax",
    metaTitle: "GST Return Filing Consultant in Navsari | Progateway",
    metaDescription:
      "Reliable monthly and quarterly GST return filing (GSTR-1, GSTR-3B, GSTR-9) by Navsari's trusted GST consultants.",
    hero: {
      eyebrow: "GST Compliance",
      headline: "Accurate GST Returns, Filed On Time",
      subline:
        "We reconcile your sales, purchases and ITC, then file GSTR-1, GSTR-3B and annual returns — keeping you penalty-free.",
    },
    sections: [
      {
        heading: "Which returns do we file?",
        body: "We manage the full GST filing calendar for proprietors, partnerships and companies.",
        bullets: [
          "GSTR-1 — outward supplies (monthly / quarterly under QRMP)",
          "GSTR-3B — summary return with tax payment",
          "GSTR-9 / 9C — annual return & reconciliation",
          "CMP-08 for Composition dealers",
          "ITC reconciliation with GSTR-2B",
        ],
      },
      {
        heading: "Why outsource to Progateway?",
        body: "Late filings attract daily late fees and block your e-way bills. Our team uses verified reconciliation tools to ensure every invoice is captured, every ITC claim is valid and every return is filed before the due date.",
      },
    ],
    documents: [
      "Sales register / invoices for the period",
      "Purchase invoices with GSTINs",
      "Bank statement",
      "GST portal credentials (or DSC)",
    ],
    process: [
      "Onboarding & data sharing setup",
      "Monthly invoice & ITC reconciliation",
      "Tax computation & client approval",
      "Return filing on GST portal",
      "Acknowledgement shared on WhatsApp",
    ],
    faqs: baseFaqs("GST return filing"),
    related: ["gst-registration", "accounting", "income-tax-filing"],
  },
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing (ITR)",
    short: "ITR filing for salaried, business owners, NRIs and capital gains cases.",
    icon: Calculator,
    category: "Tax",
    metaTitle: "Income Tax Consultant & ITR Filing in Navsari | Progateway",
    metaDescription:
      "Income tax return filing for salaried, self-employed, business and NRI clients in Navsari, Gujarat. Maximise refunds with expert ITR consultants.",
    hero: {
      eyebrow: "Income Tax",
      headline: "File Your ITR With Confidence",
      subline:
        "Expert tax planning, accurate ITR filing and refund tracking for individuals, professionals and businesses across India.",
    },
    sections: [
      {
        heading: "Who do we help?",
        body: "From first-time filers to complex business returns, we handle every category.",
        bullets: [
          "Salaried employees (ITR-1 / ITR-2)",
          "Freelancers & professionals (ITR-3 / ITR-4)",
          "Business owners & partnerships",
          "Capital gains (shares, mutual funds, property)",
          "NRI income & DTAA cases",
        ],
      },
      {
        heading: "Filing is just the start",
        body: "We review your salary structure, investments and business expenses before filing, so deductions under sections 80C, 80D, 24(b), 10(14) and more are never left unclaimed.",
      },
    ],
    documents: [
      "PAN & Aadhaar",
      "Form 16 / salary slips",
      "Bank statements",
      "Investment proofs (LIC, ELSS, PPF, NPS)",
      "Capital gains statements",
      "Home loan interest certificate",
    ],
    process: [
      "Document review & tax planning call",
      "Computation & ITR preparation",
      "Client review and approval",
      "E-filing & e-verification",
      "Refund tracking till credit",
    ],
    faqs: baseFaqs("Income tax filing"),
    related: ["tax-planning", "gst-return-filing", "accounting"],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning & Compliance",
    short: "Proactive tax strategy and year-round compliance to legally minimise what you owe.",
    icon: LineChart,
    category: "Tax",
    metaTitle: "Tax Planning & Compliance Consultant in Navsari | Progateway",
    metaDescription:
      "Strategic tax planning and year-round compliance management for individuals and businesses in Navsari, Gujarat. Reduce tax liability and avoid penalties.",
    hero: {
      eyebrow: "Plan ahead, pay less",
      headline: "Tax Planning & Compliance, Handled Proactively",
      subline:
        "Go beyond annual filing — we build a tax strategy around your income, investments and business structure, then keep you compliant all year.",
    },
    sections: [
      {
        heading: "Why proactive planning beats last-minute filing",
        body: "Most taxpayers only think about tax in March, by which point most of the year's legitimate savings opportunities are already gone. We plan with you at the start of the year so deductions, advance tax and TDS are managed continuously, not scrambled together at deadline time.",
      },
      {
        heading: "What our tax planning covers",
        body: "A structured, year-round approach for individuals and businesses.",
        bullets: [
          "Investment & deduction planning (80C, 80D, 80G and more)",
          "Advance tax estimation & quarterly payment tracking",
          "TDS / TCS compliance review",
          "Salary structuring for employers",
          "Capital gains & business restructuring advice",
        ],
      },
    ],
    documents: [
      "PAN & Aadhaar",
      "Income & investment details",
      "Previous year's ITR",
      "Business financials (for business owners)",
    ],
    process: [
      "Financial review & goal discussion",
      "Tax-saving strategy design",
      "Quarterly advance tax tracking",
      "Year-round compliance check-ins",
    ],
    faqs: baseFaqs("tax planning and compliance"),
    related: ["income-tax-filing", "accounting", "gst-return-filing"],
  },

  // ───────────────────────── REGISTRATION ─────────────────────────
  {
    slug: "company-firm-registration",
    title: "Company / Firm Registration",
    short: "Incorporate a Private Limited Company, LLP or Partnership Firm — structured the right way.",
    icon: Building2,
    category: "Registration",
    metaTitle: "Company & Firm Registration in Navsari | Pvt Ltd, LLP & Partnership | Progateway",
    metaDescription:
      "Register a Private Limited Company, LLP or Partnership Firm in Navsari with expert guidance. SPICe+ filing, DSC, DIN, PAN, TAN and bank account support included.",
    hero: {
      eyebrow: "Start your company or firm",
      headline: "Register Your Company or Firm The Right Way",
      subline:
        "Whether you're raising funds, partnering with others, or formalising an existing business, we help you choose the right structure and complete every MCA formality.",
    },
    sections: [
      {
        heading: "Choose the right structure",
        body: "Each structure has different cost, compliance and liability implications.",
        bullets: [
          "Private Limited Company — best for funding, scale and investor confidence",
          "LLP — limited liability with partnership-style flexibility",
          "Partnership Firm — simple deed-based setup for two or more partners",
          "One Person Company — solo founder with corporate structure",
        ],
      },
      {
        heading: "Why incorporate?",
        body: "Incorporated entities offer a separate legal identity, limited liability for owners, easier access to credit and funding, and a stronger profile when bidding for tenders or corporate contracts.",
      },
    ],
    documents: [
      "PAN & Aadhaar of partners / directors",
      "Address & ID proof",
      "Passport-size photographs",
      "Registered office proof & NOC",
      "Digital Signature (DSC) for each director / designated partner",
    ],
    process: [
      "Structure consultation",
      "DSC & DIN / DPIN issuance",
      "Name reservation (RUN / FiLLiP)",
      "Incorporation form filing (SPICe+ / FiLLiP) & deed drafting",
      "Certificate of Incorporation, PAN, TAN delivery",
      "Bank account & GST setup",
    ],
    faqs: baseFaqs("company or firm registration"),
    related: ["proprietorship-registration", "trademark-registration", "startup-india"],
  },
  {
    slug: "proprietorship-registration",
    title: "Proprietorship Registration",
    short: "The fastest, most cost-effective way to start a business in your own name.",
    icon: Briefcase,
    category: "Registration",
    metaTitle: "Proprietorship Firm Registration in Navsari, Gujarat | Progateway",
    metaDescription:
      "Register your Sole Proprietorship in Navsari with GST and bank account setup. Fast, low-cost and ideal for freelancers, traders and local businesses.",
    hero: {
      eyebrow: "Start solo, start fast",
      headline: "Proprietorship Registration",
      subline:
        "The simplest business structure in India — ideal for freelancers, traders and local shop owners who want to start quickly with minimal compliance.",
    },
    sections: [
      {
        heading: "Why choose a proprietorship?",
        body: "It's the lowest-friction way to formalise a business under your own name.",
        bullets: [
          "No separate incorporation body or filing fee with the MCA",
          "Lowest compliance and ongoing cost of any structure",
          "Full control over decisions and profits",
          "Easy to upgrade later into an LLP or Private Limited Company as you grow",
        ],
      },
      {
        heading: "What we set up for you",
        body: "We assemble a complete, bank-ready business identity around your PAN.",
        bullets: [
          "PAN-based business identity",
          "GST registration (where applicable)",
          "MSME/Udyam-linked recognition for lender and tender eligibility",
          "Current account opening support",
        ],
      },
    ],
    documents: [
      "PAN & Aadhaar of proprietor",
      "Address proof of business premises",
      "Passport-size photograph",
      "Business activity details",
    ],
    process: [
      "Consultation & document collection",
      "Registration filing (GST / Udyam as applicable)",
      "Bank account opening assistance",
      "Certificate and documents handover",
    ],
    faqs: baseFaqs("proprietorship registration"),
    related: ["company-firm-registration", "gst-registration", "fssai-license"],
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    short: "Protect your brand name, logo and tagline with a registered ™ / ®.",
    icon: ShieldCheck,
    category: "Registration",
    metaTitle: "Trademark Registration in Navsari, Gujarat | Progateway",
    metaDescription:
      "Register your trademark in India — brand name, logo and tagline protection with expert search, filing and objection handling.",
    hero: {
      eyebrow: "Brand protection",
      headline: "Trademark Registration",
      subline:
        "Secure exclusive rights to your brand identity with end-to-end trademark search, filing and prosecution.",
    },
    sections: [
      {
        heading: "Why register a trademark?",
        body: "A registered trademark gives you the legal right to use ® and stops competitors from copying your brand identity.",
        bullets: [
          "Exclusive rights across India for 10 years",
          "Renewable indefinitely",
          "Asset that adds business valuation",
          "Use ™ immediately after filing",
        ],
      },
    ],
    documents: [
      "Logo / wordmark in JPG / PDF",
      "PAN & Aadhaar of applicant",
      "Business registration proof",
      "Udyam certificate (for fee concession)",
    ],
    process: [
      "Trademark search",
      "Class selection & filing",
      "TM Application Number (use ™)",
      "Examination & objection reply",
      "Journal publication & registration",
    ],
    faqs: baseFaqs("trademark registration"),
    related: ["company-firm-registration", "iso-certification", "startup-india"],
  },
  {
    slug: "iso-certification",
    title: "ISO Certification",
    short: "ISO 9001, 14001, 45001, 27001 and more — boost credibility & tenders.",
    icon: Award,
    category: "Registration",
    metaTitle: "ISO Certification Consultant in Navsari | 9001, 14001, 27001",
    metaDescription:
      "ISO certification consultancy in Navsari — ISO 9001, 14001, 45001, 27001 and more. Documentation, audit support and certification.",
    hero: {
      eyebrow: "Global standards",
      headline: "ISO Certification",
      subline:
        "Demonstrate quality, safety and process maturity to customers, tenders and global partners.",
    },
    sections: [
      {
        heading: "Popular ISO standards",
        body: "We help you pick and implement the right standard for your business.",
        bullets: [
          "ISO 9001 — Quality Management",
          "ISO 14001 — Environmental Management",
          "ISO 45001 — Occupational Health & Safety",
          "ISO 27001 — Information Security",
          "ISO 22000 — Food Safety",
        ],
      },
    ],
    documents: [
      "Business registration",
      "Scope of activities",
      "Address proof",
      "Sales invoice (sample)",
    ],
    process: ["Standard selection", "Gap analysis", "Documentation", "Audit & certification"],
    faqs: baseFaqs("ISO certification"),
    related: ["trademark-registration", "company-firm-registration", "startup-india"],
  },

  // ───────────────────────── LOANS ─────────────────────────
  {
    slug: "personal-loan",
    title: "Personal Loan",
    short: "Quick personal loans for salaried & self-employed at competitive rates.",
    icon: CreditCard,
    category: "Loans",
    metaTitle: "Personal Loan Consultant in Navsari | Quick Approval",
    metaDescription:
      "Personal loan assistance in Navsari for salaried and self-employed individuals. Best interest rates and quick approvals from leading banks & NBFCs.",
    hero: {
      eyebrow: "Fast, flexible funds",
      headline: "Personal Loan Assistance",
      subline:
        "Get matched with the right lender for medical, wedding, education or any personal need — without endless paperwork.",
    },
    sections: [
      {
        heading: "Who can apply?",
        body: "Eligibility and loan amount depend on income, employment or business profile, credit history, existing obligations and the selected lender’s policy.",
      },
    ],
    documents: ["PAN & Aadhaar", "Income proof", "Bank statements (3–6 months)", "Address proof"],
    process: [
      "Eligibility check",
      "Lender shortlisting",
      "Documentation",
      "Sanction & disbursement",
    ],
    faqs: baseFaqs("personal loan assistance"),
    related: ["business-loan", "loan-against-property", "income-tax-filing"],
  },
  {
    slug: "business-loan",
    title: "Business Loan",
    short: "Working capital, term loans and MSME credit — secured & unsecured, from all leading banks & NBFCs.",
    icon: Banknote,
    category: "Loans",
    metaTitle: "Business Loan Consultant in Navsari | MSME, OD, Term Loans",
    metaDescription:
      "Get business loans in Navsari — working capital, MSME credit, term loans and OD limits with expert documentation and bank tie-ups.",
    hero: {
      eyebrow: "Capital that fits",
      headline: "Business Loan Assistance",
      subline:
        "Whether you need working capital or growth funding, we structure your file and connect you with the right lender across India's leading banks and NBFCs.",
    },
    sections: [
      {
        heading: "Loan products we help with",
        body: "Multiple structures matched to your need.",
        bullets: [
          "Working capital / OD / CC limit",
          "MSME loans under CGTMSE",
          "Term loans for machinery & expansion",
          "Invoice discounting",
          "Unsecured business loans",
        ],
      },
    ],
    documents: [
      "Business KYC & registration",
      "ITR & financials (last 2–3 years)",
      "Bank statements (12 months)",
      "GST returns",
    ],
    process: [
      "Need assessment",
      "Lender shortlisting",
      "Project report & file prep",
      "Bank submission & sanction",
      "Disbursement",
    ],
    faqs: baseFaqs("business loan assistance"),
    related: ["loan-against-property", "personal-loan", "company-firm-registration"],
  },
  {
    slug: "loan-against-property",
    title: "Mortgage / Loan Against Property",
    short: "Unlock high-value funds against your residential or commercial property.",
    icon: Landmark,
    category: "Loans",
    metaTitle: "Loan Against Property (LAP) / Mortgage Consultant in Navsari | Progateway",
    metaDescription:
      "Mortgage / Loan Against Property assistance in Navsari — best LAP rates from leading banks and NBFCs with end-to-end documentation.",
    hero: {
      eyebrow: "Property-backed funding",
      headline: "Mortgage / Loan Against Property (LAP)",
      subline:
        "Borrow against your residential, commercial or industrial property at attractive rates and longer tenures.",
    },
    sections: [
      {
        heading: "Why choose LAP?",
        body: "Loan Against Property gives you higher loan amounts, longer tenures and lower interest rates compared to personal or business loans — perfect for expansion, debt consolidation or major life goals.",
        bullets: [
          "Higher-value secured funding, subject to valuation",
          "Longer repayment options may be available",
          "Rates are generally assessed as secured lending",
          "Use is subject to lender policy and the sanctioned purpose",
        ],
      },
    ],
    documents: [
      "PAN & Aadhaar",
      "Property documents (title, sale deed)",
      "Income proof / ITR (last 2–3 years)",
      "Bank statements (12 months)",
    ],
    process: [
      "Property & eligibility assessment",
      "Lender shortlisting",
      "Legal & technical valuation",
      "Sanction & negotiation",
      "Disbursement support",
    ],
    faqs: baseFaqs("loan against property"),
    related: ["business-loan", "personal-loan", "education-loan"],
  },
  {
    slug: "education-loan",
    title: "Education Loan",
    short: "Fund higher studies in India or abroad with the right lender match.",
    icon: GraduationCap,
    category: "Loans",
    metaTitle: "Education Loan Consultant in Navsari | Study in India & Abroad",
    metaDescription:
      "Education loan assistance in Navsari for studies in India and abroad. Compare offers from leading banks and NBFCs with expert documentation.",
    hero: {
      eyebrow: "Invest in education",
      headline: "Education Loan Assistance",
      subline:
        "From admission letter to disbursement — we help students and parents secure the right education loan with the best terms.",
    },
    sections: [
      {
        heading: "What we cover",
        body: "Loans for school, undergraduate, postgraduate and vocational programs in India and abroad.",
        bullets: [
          "Funding options for eligible studies in India or abroad",
          "Secured and collateral-free options, subject to lender policy",
          "Repayment holidays may be available during the study period",
          "Potential tax treatment should be confirmed with a tax professional",
        ],
      },
    ],
    documents: [
      "Admission letter & fee structure",
      "Student & co-applicant KYC",
      "Income proof of co-applicant",
      "Academic records",
    ],
    process: [
      "Course & lender shortlisting",
      "Documentation",
      "Sanction letter",
      "Disbursement to institution",
    ],
    faqs: baseFaqs("education loan"),
    related: ["personal-loan", "loan-against-property", "business-loan"],
  },
  {
    slug: "vehicle-loan",
    title: "Vehicle Loan",
    short: "Finance for new or used cars and commercial vehicles with lender comparison support.",
    icon: Car,
    category: "Loans",
    metaTitle: "Vehicle Loan Consultant in Navsari | Car & Commercial Vehicle Finance",
    metaDescription:
      "Vehicle loan assistance in Navsari for new and used cars and commercial vehicles. Compare suitable bank and NBFC options with documentation support.",
    hero: {
      eyebrow: "Drive & grow",
      headline: "Vehicle Loan Assistance",
      subline:
        "Finance a new or used car or commercial vehicle with eligibility checks, document support and suitable lender options.",
    },
    sections: [
      {
        heading: "Vehicle finance options",
        body: "We support salaried, self-employed and business applicants with suitable vehicle finance options.",
        bullets: [
          "New car loans",
          "Used car loans",
          "Commercial vehicle finance",
          "Balance transfer and refinance guidance",
        ],
      },
    ],
    documents: [
      "PAN & Aadhaar",
      "Income proof / ITR",
      "Bank statements (6 months)",
      "Vehicle quotation / pro-forma invoice",
    ],
    process: [
      "Eligibility check",
      "Lender shortlisting",
      "Documentation & sanction",
      "Disbursement to dealer",
    ],
    faqs: baseFaqs("vehicle loan assistance"),
    related: ["business-loan", "personal-loan", "machinery-loan"],
  },


  {
    slug: "home-loan",
    title: "Home Loan",
    short: "Home purchase, construction, renovation and balance-transfer assistance.",
    icon: Building2,
    category: "Loans",
    metaTitle: "Home Loan Consultant in Navsari | Purchase, Construction & Balance Transfer",
    metaDescription:
      "Home loan assistance in Navsari for property purchase, construction, renovation and balance transfer, with eligibility and documentation support.",
    hero: {
      eyebrow: "Finance your home",
      headline: "Home Loan Assistance in Navsari",
      subline:
        "Compare suitable bank and housing-finance options for buying, constructing or renovating your home.",
    },
    sections: [
      {
        heading: "Home loan solutions",
        body: "We help you understand eligibility, organise income and property documents, compare suitable lenders and follow the application through sanction and disbursement.",
        bullets: [
          "New home purchase",
          "Plot plus construction",
          "Home construction or renovation",
          "Home-loan balance transfer",
        ],
      },
    ],
    documents: [
      "PAN, Aadhaar and passport-size photograph",
      "Income proof / salary slips / ITR",
      "Bank statements (normally 6–12 months)",
      "Property papers and approved plan, as applicable",
      "Agreement to sell / allotment letter, as applicable",
    ],
    process: [
      "Eligibility and budget assessment",
      "Lender comparison",
      "Income and property document review",
      "Application and valuation coordination",
      "Sanction and disbursement support",
    ],
    faqs: baseFaqs("home loan assistance"),
    related: ["loan-against-property", "personal-loan", "income-tax-filing"],
  },
  {
    slug: "project-loan",
    title: "Project Loan",
    short: "Structured funding support for expansion, new units and business projects.",
    icon: Rocket,
    category: "Loans",
    metaTitle: "Project Loan Consultant in Navsari | Business Expansion Funding",
    metaDescription:
      "Project loan assistance in Navsari for new units, expansion and capital expenditure, including project-report and lender documentation support.",
    hero: {
      eyebrow: "Fund business growth",
      headline: "Project Loan Assistance",
      subline:
        "Prepare a lender-ready project file for expansion, a new unit or capital expenditure with practical financial guidance.",
    },
    sections: [
      {
        heading: "What project finance may cover",
        body: "Project lending is assessed on promoter profile, projected cash flow, contribution, collateral and the commercial viability of the proposal.",
        bullets: [
          "New manufacturing or service unit",
          "Capacity expansion",
          "Plant, equipment and civil work",
          "Business acquisition or modernisation",
        ],
      },
    ],
    documents: [
      "Promoter KYC and business registration proof",
      "Detailed project report and cost estimates",
      "Past ITR, financial statements and GST returns",
      "Bank statements",
      "Quotations, licences and property documents, as applicable",
    ],
    process: [
      "Project and promoter assessment",
      "Financial projection and file preparation",
      "Suitable lender shortlisting",
      "Submission and query coordination",
      "Sanction and disbursement support",
    ],
    faqs: baseFaqs("project loan assistance"),
    related: ["business-loan", "machinery-loan", "cash-credit-loan"],
  },
  {
    slug: "cash-credit-loan",
    title: "Cash Credit / Working Capital",
    short: "Working-capital limits to support stock, receivables and day-to-day business needs.",
    icon: CreditCard,
    category: "Loans",
    metaTitle: "Cash Credit & Working Capital Consultant in Navsari | CC Limit",
    metaDescription:
      "Cash credit and working-capital loan assistance in Navsari for traders, manufacturers and MSMEs, with financial and banking document support.",
    hero: {
      eyebrow: "Keep cash flow moving",
      headline: "Cash Credit & Working Capital Assistance",
      subline:
        "Structure a practical CC or working-capital proposal based on turnover, stock, receivables and banking history.",
    },
    sections: [
      {
        heading: "Common working-capital facilities",
        body: "The right facility depends on business cycle, turnover, stock levels, receivables and lender policy.",
        bullets: [
          "Cash credit limit",
          "Overdraft facility",
          "Working-capital term loan",
          "Limit enhancement or balance transfer",
        ],
      },
    ],
    documents: [
      "Business KYC and registration proof",
      "ITR and financial statements (normally 2–3 years)",
      "GST returns and sales details",
      "Bank statements (normally 12 months)",
      "Stock and debtor statements, as applicable",
    ],
    process: [
      "Working-capital assessment",
      "Document and banking review",
      "Proposal preparation",
      "Lender submission and follow-up",
      "Sanction and limit setup support",
    ],
    faqs: baseFaqs("cash credit and working-capital assistance"),
    related: ["business-loan", "project-loan", "accounting"],
  },
  {
    slug: "machinery-loan",
    title: "Machinery Loan",
    short: "Finance machinery and equipment for manufacturing, medical and commercial use.",
    icon: Briefcase,
    category: "Loans",
    metaTitle: "Machinery Loan Consultant in Navsari | Equipment Finance",
    metaDescription:
      "Machinery and equipment loan assistance in Navsari for business expansion, replacement and new purchases, with quotation and lender support.",
    hero: {
      eyebrow: "Upgrade your capacity",
      headline: "Machinery & Equipment Loan Assistance",
      subline:
        "Arrange a suitable finance structure for new or replacement machinery with documentation and lender coordination.",
    },
    sections: [
      {
        heading: "Machinery we help finance",
        body: "Funding is available for many productive assets, subject to lender policy and business eligibility.",
        bullets: [
          "Manufacturing machinery",
          "Medical and diagnostic equipment",
          "Construction equipment",
          "Commercial and office equipment",
        ],
      },
    ],
    documents: [
      "Business and promoter KYC",
      "Machinery quotation / pro-forma invoice",
      "ITR, financial statements and GST returns",
      "Bank statements",
      "Project or expansion note, as applicable",
    ],
    process: [
      "Requirement and eligibility review",
      "Quotation and repayment assessment",
      "Lender comparison",
      "Application and sanction follow-up",
      "Payment / disbursement coordination",
    ],
    faqs: baseFaqs("machinery loan assistance"),
    related: ["project-loan", "business-loan", "cash-credit-loan"],
  },
  {
    slug: "investment-planning",
    title: "Investment Planning",
    short: "Goal-based investment guidance for wealth creation and future financial needs.",
    icon: LineChart,
    category: "Investment & Insurance",
    metaTitle: "Investment Planning Consultant in Navsari | Goal-Based Financial Planning",
    metaDescription:
      "Investment planning guidance in Navsari for wealth creation, future goals and disciplined savings, based on time horizon and risk profile.",
    hero: {
      eyebrow: "Plan for a better future",
      headline: "Goal-Based Investment Planning",
      subline:
        "Build a practical investment approach around your goals, time horizon, cash flow and comfort with risk.",
    },
    sections: [
      {
        heading: "Why plan investments?",
        body: "A clear plan helps connect today’s savings with tomorrow’s goals instead of choosing products without context.",
        bullets: [
          "Wealth creation",
          "Children’s education and major goals",
          "Retirement preparation",
          "Regular review and rebalancing guidance",
        ],
      },
    ],
    documents: [
      "PAN and Aadhaar",
      "Income and expense details",
      "Existing investment information",
      "Financial goals and expected timelines",
      "Bank and KYC details, where required",
    ],
    process: [
      "Goal and cash-flow discussion",
      "Risk-profile assessment",
      "Investment-plan recommendation",
      "KYC and implementation support",
      "Periodic review",
    ],
    faqs: baseFaqs("investment planning"),
    related: ["insurance-planning", "tax-planning", "income-tax-filing"],
  },
  {
    slug: "insurance-planning",
    title: "Insurance Planning",
    short: "Protection planning for life, health, critical illness and financial security.",
    icon: ShieldCheck,
    category: "Investment & Insurance",
    metaTitle: "Insurance Planning Consultant in Navsari | Life, Health & Term Cover",
    metaDescription:
      "Insurance planning guidance in Navsari for term, life, health and critical-illness protection based on family needs and affordability.",
    hero: {
      eyebrow: "Protect what matters",
      headline: "Insurance & Financial Protection Planning",
      subline:
        "Review protection gaps and select suitable cover for your family, health and long-term financial responsibilities.",
    },
    sections: [
      {
        heading: "Protection areas we review",
        body: "Insurance should first protect income, family responsibilities and major health risks. Product suitability depends on individual needs and policy terms.",
        bullets: [
          "Term life protection",
          "Health insurance",
          "Critical illness and disability cover",
          "Savings-linked or unit-linked plans, where suitable",
        ],
      },
    ],
    documents: [
      "PAN and Aadhaar",
      "Age and occupation details",
      "Income information",
      "Existing policy details",
      "Medical information or reports, if requested by insurer",
    ],
    process: [
      "Family and risk-needs assessment",
      "Existing-cover review",
      "Suitable plan comparison",
      "Proposal and documentation support",
      "Policy servicing guidance",
    ],
    faqs: baseFaqs("insurance planning"),
    related: ["investment-planning", "tax-planning", "personal-loan"],
  },

  // ───────────────────────── OTHER SERVICES ─────────────────────────
  {
    slug: "fssai-license",
    title: "FSSAI Food License",
    short: "Basic, State & Central FSSAI licensing for food businesses of every size.",
    icon: UtensilsCrossed,
    category: "Registration",
    metaTitle: "FSSAI Food License Registration in Navsari & Gujarat",
    metaDescription:
      "Apply for FSSAI Basic, State or Central food license in Navsari and across Gujarat. Documentation and renewal support by experts.",
    hero: {
      eyebrow: "Food Safety",
      headline: "FSSAI Food License",
      subline:
        "Restaurants, cloud kitchens, food manufacturers and traders — get the right FSSAI category and stay compliant.",
    },
    sections: [
      {
        heading: "Which license do you need?",
        body: "FSSAI registration or licensing category depends on the type of food activity, scale, turnover, premises and whether the business operates across states or imports and exports food products.",
        bullets: [
          "Basic FSSAI Registration, where applicable",
          "State FSSAI Licence, where applicable",
          "Central FSSAI Licence, where applicable",
        ],
      },
    ],
    documents: [
      "PAN & Aadhaar",
      "Business address proof",
      "Food category list",
      "Photograph of premises",
      "NOC from owner (if rented)",
    ],
    process: [
      "Category assessment",
      "Document compilation",
      "Online application",
      "Inspection (if required)",
      "License issuance",
    ],
    faqs: baseFaqs("FSSAI license"),
    related: ["proprietorship-registration", "gst-registration", "company-firm-registration"],
  },
  {
    slug: "iec-registration",
    title: "IEC (Import Export Code)",
    short: "10-digit DGFT code for every importer & exporter in India.",
    icon: Globe2,
    category: "Registration",
    metaTitle: "IEC Registration (Import Export Code) in Navsari | Progateway",
    metaDescription:
      "Apply for Import Export Code (IEC) with DGFT through Navsari's trusted consultants. Quick approval and bank-level documentation.",
    hero: {
      eyebrow: "DGFT",
      headline: "Import Export Code (IEC)",
      subline: "Mandatory for cross-border trade — issued by DGFT and valid for lifetime.",
    },
    sections: [
      {
        heading: "Who needs IEC?",
        body: "Every person or business importing or exporting goods or services from India needs an IEC, except specifically exempted categories.",
      },
    ],
    documents: [
      "PAN of business",
      "Aadhaar of proprietor / signatory",
      "Bank certificate or cancelled cheque",
      "Address proof",
    ],
    process: [
      "Document collection",
      "DGFT portal application",
      "Digital signature verification",
      "IEC certificate delivery",
    ],
    faqs: baseFaqs("IEC registration"),
    related: ["gst-registration", "company-firm-registration", "digital-signature"],
  },
  {
    slug: "digital-signature",
    title: "Digital Signature (DSC)",
    short: "Class 3 DSC for MCA, GST, Income Tax, e-Tender and DGFT filings.",
    icon: KeyRound,
    category: "Registration",
    metaTitle: "Digital Signature Certificate (DSC) in Navsari | Progateway",
    metaDescription:
      "Apply for Class 3 Digital Signature Certificate (DSC) in Navsari for individuals, directors and organisations. Quick issuance with secure token.",
    hero: {
      eyebrow: "e-Signing",
      headline: "Digital Signature Certificate (DSC)",
      subline:
        "Secure, legally valid digital signatures for income tax, GST, MCA, e-tenders and DGFT filings.",
    },
    sections: [
      {
        heading: "Who needs a DSC?",
        body: "Mandatory for directors, professionals and organisations filing electronically.",
        bullets: [
          "Company directors & LLP partners",
          "GST & Income Tax filers (in many cases)",
          "e-Tender / e-Procurement bidders",
          "DGFT IEC holders & exporters",
        ],
      },
    ],
    documents: ["PAN & Aadhaar", "Passport-size photo", "Email & mobile (OTP verification)"],
    process: ["Application form", "Video & Aadhaar e-KYC", "DSC issuance", "Token delivery"],
    faqs: baseFaqs("Digital Signature Certificate"),
    related: ["company-firm-registration", "iec-registration", "trademark-registration"],
  },
  {
    slug: "startup-india",
    title: "Startup India Registration",
    short: "DPIIT recognition support for eligible startups seeking applicable government benefits.",
    icon: Rocket,
    category: "Registration",
    metaTitle: "Startup India / DPIIT Registration in Navsari | Progateway",
    metaDescription:
      "Get support with DPIIT Startup recognition and understand which Startup India benefits may apply to your eligible entity.",
    hero: {
      eyebrow: "DPIIT recognition",
      headline: "Startup India Registration",
      subline:
        "Position your startup for tax benefits, fast-tracked IP, government tenders and easier funding under the Startup India initiative.",
    },
    sections: [
      {
        heading: "Benefits of DPIIT recognition",
        body: "Recognised startups get a strong head-start on regulation and funding.",
        bullets: [
          "Eligibility to apply separately for Section 80-IAC tax exemption",
          "Applicable intellectual-property support and fee benefits",
          "Self-certification benefits under eligible laws",
          "Relaxations in eligible government procurement",
          "Access to selected Startup India programmes, subject to criteria",
        ],
      },
    ],
    documents: [
      "Certificate of Incorporation",
      "PAN of entity",
      "Brief write-up of product / service",
      "Website / pitch deck (if any)",
    ],
    process: [
      "Eligibility check",
      "Pitch & write-up preparation",
      "DPIIT portal application",
      "Recognition certificate",
    ],
    faqs: baseFaqs("Startup India registration"),
    related: ["company-firm-registration", "trademark-registration", "tax-planning"],
  },
  {
    slug: "passport-application",
    title: "Passport Application",
    short: "Fresh, re-issue and tatkal passport applications — end-to-end assistance.",
    icon: Plane,
    category: "Other",
    metaTitle: "Passport Application Assistance in Navsari | Progateway",
    metaDescription:
      "Passport application help in Navsari — fresh, re-issue, tatkal and minor passports. Form filling, appointment and document support.",
    hero: {
      eyebrow: "Travel ready",
      headline: "Passport Application Assistance",
      subline:
        "From form filling to PSK appointment — we make your passport application smooth, error-free and fast.",
    },
    sections: [
      {
        heading: "What we help with",
        body: "Complete handholding across all passport categories.",
        bullets: [
          "Fresh passport (adults & minors)",
          "Re-issue & renewal",
          "Tatkal applications",
          "Address & name change",
          "Police verification guidance",
        ],
      },
    ],
    documents: ["Aadhaar & PAN", "Birth proof", "Address proof", "Old passport (for re-issue)"],
    process: [
      "Eligibility & category check",
      "Online form filling",
      "PSK appointment booking",
      "Document checklist & verification",
    ],
    faqs: baseFaqs("passport application"),
    related: ["digital-signature", "iec-registration", "education-loan"],
  },
];

export const SERVICE_REDIRECTS: Record<string, string> = {
  "gst-registration": "gst",
  "gst-return-filing": "gst",
  "income-tax-filing": "income-tax",
  "fssai-license": "fssai-registration",
  "iec-registration": "import-export-code",
  "investment-planning": "investment",
  "insurance-planning": "insurance",
};

export function canonicalServiceSlug(slug: string) {
  return SERVICE_REDIRECTS[slug] ?? slug;
}

const byRawSlug = Object.fromEntries(
  RAW_SERVICES.map((service) => [service.slug, service]),
) as Record<string, Service>;

function remapRelated(slugs: string[]) {
  return [...new Set(slugs.map(canonicalServiceSlug))];
}

const gstRegistration = byRawSlug["gst-registration"];
const gstFiling = byRawSlug["gst-return-filing"];

const GST_SERVICE: Service = {
  ...gstRegistration,
  slug: "gst",
  title: "GST Registration & Return Filing",
  short:
    "GST registration, return filing, reconciliation and ongoing compliance support in one complete service.",
  metaTitle: "GST Registration & Return Filing in Navsari | Progateway",
  metaDescription:
    "Get GST registration, GSTR-1 and GSTR-3B filing, reconciliation and compliance assistance from Progateway Consultancy in Navsari, Gujarat.",
  hero: {
    eyebrow: "GST registration and compliance",
    headline: "GST Registration and Return Filing Made Clear",
    subline:
      "From obtaining a GSTIN to preparing periodic returns and reconciling records, receive one organised process with practical document guidance.",
  },
  sections: [
    ...gstRegistration.sections,
    ...gstFiling.sections.filter(
      (section) =>
        !gstRegistration.sections.some(
          (existing) => existing.heading === section.heading,
        ),
    ),
  ],
  documents: [
    ...new Set([...gstRegistration.documents, ...gstFiling.documents]),
  ],
  process: [
    "Requirement and registration-status review",
    "Document and portal-access checklist",
    "GST registration application where required",
    "Sales, purchase and input-tax-credit reconciliation",
    "Applicable return preparation and filing",
    "Compliance calendar and follow-up guidance",
  ],
  faqs: [...gstRegistration.faqs, ...gstFiling.faqs].filter(
    (faq, index, all) =>
      all.findIndex((candidate) => candidate.q === faq.q) === index,
  ),
  related: ["accounting", "income-tax", "company-firm-registration"],
};

const LOANS_SERVICE: Service = {
  slug: "loans",
  title: "Personal, Business & Home Loan Assistance",
  short:
    "Eligibility review, document preparation and application coordination for common retail and business loan requirements.",
  icon: Banknote,
  category: "Loans",
  metaTitle: "Personal, Business & Home Loan Assistance in Navsari",
  metaDescription:
    "Get help preparing personal, business, home, property and machinery loan applications in Navsari. Approval remains subject to bank or NBFC policy.",
  hero: {
    eyebrow: "Loan documentation assistance",
    headline: "Build a Clearer, More Complete Loan Application",
    subline:
      "Understand likely eligibility, prepare the required financial documents and coordinate the application without false approval promises.",
  },
  sections: [
    {
      heading: "Which loan requirements can be reviewed?",
      body:
        "The team can review common personal and business borrowing requirements and explain which documents a lender is likely to request.",
      bullets: [
        "Personal and salaried loan applications",
        "Business working-capital and term-loan files",
        "Home and loan-against-property documentation",
        "Vehicle, education, machinery and project finance files",
      ],
    },
    {
      heading: "What assistance means",
      body:
        "Progateway Consultancy helps organise the application, financial statements, identity records and supporting papers. The lender independently decides eligibility, pricing, sanction, security requirements and disbursement.",
    },
    {
      heading: "Common problems to fix before applying",
      body:
        "Incomplete banking records, undisclosed obligations, inconsistent turnover figures and missing tax returns can slow assessment. Reviewing these gaps before submission can make the file easier for a lender to evaluate.",
    },
  ],
  documents: [
    "PAN, Aadhaar and address proof",
    "Income proof, salary slips or business financial statements",
    "Bank statements for the period requested by the lender",
    "Income-tax returns and GST returns where applicable",
    "Property, quotation or project documents for secured or purpose-based loans",
  ],
  process: [
    "Requirement and eligibility discussion",
    "Credit and existing-obligation review",
    "Lender-specific document checklist",
    "Application-file preparation",
    "Submission and query coordination",
    "Sanction-term review support",
  ],
  faqs: [
    {
      q: "Does Progateway Consultancy guarantee loan approval?",
      a: "No. Approval, interest rate, tenure, security and disbursement are decided only by the selected bank or NBFC after its own assessment.",
    },
    {
      q: "Can I apply without income-tax returns?",
      a: "Some products may use alternative income evidence, but requirements vary by lender and applicant profile. The available documents should be reviewed before choosing a product.",
    },
    {
      q: "Will applying to many lenders improve my chances?",
      a: "Multiple unplanned applications can create unnecessary credit enquiries. A more focused approach based on eligibility and documentation is usually preferable.",
    },
  ],
  related: ["accounting", "income-tax", "business-loan"],
};

const transformed = RAW_SERVICES.filter(
  (service) =>
    !["gst-registration", "gst-return-filing"].includes(service.slug),
).map((service): Service => {
  const slug = canonicalServiceSlug(service.slug);
  const titles: Record<
    string,
    Pick<Service, "title" | "metaTitle" | "metaDescription">
  > = {
    "income-tax": {
      title: "Income Tax Return Filing & Tax Consultancy",
      metaTitle:
        "Income Tax Return Filing in Navsari | Progateway Consultancy",
      metaDescription:
        "Income-tax return filing and practical tax-documentation assistance for individuals and businesses in Navsari and across Gujarat.",
    },
    "fssai-registration": {
      title: "FSSAI Registration & Licence",
      metaTitle: "FSSAI Registration & Licence Consultant in Navsari",
      metaDescription:
        "Get FSSAI registration and food licence documentation assistance for eligible food businesses in Navsari and Gujarat.",
    },
    "import-export-code": {
      title: "Import Export Code Registration",
      metaTitle: "Import Export Code Registration in Navsari | Progateway",
      metaDescription:
        "IEC registration and DGFT profile-documentation assistance for importers and exporters in Navsari, Gujarat and India.",
    },
    investment: {
      title: "Investment Assistance",
      metaTitle: "Investment Planning Assistance in Navsari | Progateway",
      metaDescription:
        "Discuss investment goals, documentation and suitable regulated product options with clear risk disclosures in Navsari.",
    },
    insurance: {
      title: "Insurance Assistance",
      metaTitle: "Insurance Assistance in Navsari | Progateway Consultancy",
      metaDescription:
        "Get help comparing insurance requirements, documents and policy terms for eligible life, health and general insurance needs.",
    },
  };

  return {
    ...service,
    ...titles[slug],
    slug,
    related: remapRelated(service.related),
  };
});

export const SERVICES: Service[] = [
  GST_SERVICE,
  LOANS_SERVICE,
  ...transformed,
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
);

export const SERVICE_CATEGORIES = [
  "Tax",
  "Registration",
  "Loans",
  "Investment & Insurance",
  "Other",
] as const;
