export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "GST" | "Income Tax" | "Registration" | "Compliance" | "Loans" | "MSME";
  date: string;
  readTime: string;
  author: string;
  content: { heading: string; body: string }[];
  faqs?: { q: string; a: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gst-registration-process-india-2026",
    title: "GST Registration Process in India: A 2026 Step-by-Step Guide",
    excerpt:
      "Everything you need to know about registering for GST in India — thresholds, documents, timelines and post-registration compliance.",
    category: "GST",
    date: "2026-05-12",
    readTime: "8 min read",
    author: "Progateway Team",
    content: [
      {
        heading: "Who must register for GST",
        body: "Any business supplying goods with aggregate turnover above ₹40 lakh (₹20 lakh for special category states) or services above ₹20 lakh must register. Inter-state sellers, e-commerce operators, casual taxable persons and importers/exporters must register irrespective of turnover.",
      },
      {
        heading: "Documents required",
        body: "Keep your PAN, Aadhaar, business address proof, bank details and (for companies/LLPs) digital signatures ready. For rented premises, an NOC from the owner along with the latest utility bill is required.",
      },
      {
        heading: "Step-by-step process",
        body: "1. Visit the GST portal and generate a TRN. 2. Fill Part B of REG-01 with business details. 3. Upload documents. 4. Complete Aadhaar authentication. 5. The application is reviewed; ARN is generated. 6. Once approved, your GSTIN and registration certificate are issued — typically within 7 working days.",
      },
      {
        heading: "After registration",
        body: "You must display your GSTIN on invoices, file GSTR-1 and GSTR-3B as per your turnover, and reconcile input tax credit monthly. Non-compliance attracts daily late fees and blocked e-way bills.",
      },
    ],
    faqs: [
      {
        q: "Is GST registration free on the government portal?",
        a: "Yes, the government does not charge a fee for GST registration. Consultancy fees cover documentation, application accuracy and post-registration support.",
      },
      {
        q: "Can I cancel my GST registration later?",
        a: "Yes, you can apply for cancellation if you cease business or fall below the threshold, after filing all pending returns.",
      },
    ],
  },
  {
    slug: "how-to-file-itr-salaried-employees",
    title: "How to File ITR for Salaried Employees: A Practical Guide",
    excerpt:
      "Choose the correct ITR form, claim every deduction you're eligible for, and e-verify your return — all in under 30 minutes.",
    category: "Income Tax",
    date: "2026-06-08",
    readTime: "7 min read",
    author: "Progateway Team",
    content: [
      {
        heading: "Pick the right ITR form",
        body: "Most salaried individuals file ITR-1 (Sahaj) if total income is up to ₹50 lakh from salary, one house property and other sources. If you have capital gains, multiple house properties or foreign assets, use ITR-2.",
      },
      {
        heading: "Reconcile Form 16 with AIS",
        body: "Match the income and TDS reported in your Form 16 with the Annual Information Statement (AIS) and 26AS. Mismatches are the leading cause of refund delays and tax notices.",
      },
      {
        heading: "Claim deductions you're eligible for",
        body: "Under the old regime — 80C (₹1.5 lakh), 80D (health insurance), 24(b) (home loan interest), 80CCD(1B) (NPS), 10(14) allowances. Run a comparison with the new regime before filing.",
      },
      {
        heading: "E-verify within 30 days",
        body: "An unverified return is treated as not filed. E-verify instantly using Aadhaar OTP, net banking or a digital signature.",
      },
    ],
  },
  {
    slug: "msme-udyam-registration-benefits",
    title: "Why Every Small Business Should Get an MSME Udyam Certificate",
    excerpt:
      "Collateral-free loans, subsidies, faster payments — Udyam registration unlocks real benefits, not just paperwork.",
    category: "MSME",
    date: "2026-04-22",
    readTime: "5 min read",
    author: "Progateway Team",
    content: [
      {
        heading: "What is Udyam registration?",
        body: "Udyam is the official MSME registration introduced by the Ministry of MSME. It replaces the older Udyog Aadhaar and is free, paperless and self-declaration based.",
      },
      {
        heading: "Top benefits",
        body: "Collateral-free loans under CGTMSE, interest concession on bank credit, subsidies on patent and trademark filing, preferential treatment in government tenders, and protection against delayed payments under the MSMED Act.",
      },
      {
        heading: "Who is eligible",
        body: "Manufacturing or service enterprises with investment up to ₹50 crore and turnover up to ₹250 crore qualify as MSME. The category — Micro, Small or Medium — depends on these two metrics.",
      },
    ],
  },
  {
    slug: "private-limited-vs-llp-which-to-choose",
    title: "Private Limited Company vs LLP: Which Should You Choose?",
    excerpt:
      "A founder-friendly comparison of Pvt Ltd and LLP across compliance, cost, funding and exit options.",
    category: "Registration",
    date: "2026-03-18",
    readTime: "6 min read",
    author: "Progateway Team",
    content: [
      {
        heading: "Cost of incorporation & compliance",
        body: "Pvt Ltd costs more to incorporate and has higher annual compliance — board meetings, statutory audit, AOC-4 and MGT-7. LLPs are cheaper, with audit required only above turnover or contribution thresholds.",
      },
      {
        heading: "Fundraising & investor appetite",
        body: "VCs and angels almost exclusively invest in Pvt Ltd companies because of the equity structure. LLPs cannot issue shares or ESOPs in the same way.",
      },
      {
        heading: "Our recommendation",
        body: "Choose Pvt Ltd if you plan to raise external capital or scale aggressively. Choose LLP if you're a professional services firm or small business prioritising low compliance.",
      },
    ],
  },
  {
    slug: "business-loan-eligibility-checklist",
    title: "Business Loan Eligibility Checklist Banks Actually Use",
    excerpt:
      "What lenders really look at before approving your business loan — and how to strengthen your file in 30 days.",
    category: "Loans",
    date: "2026-02-05",
    readTime: "6 min read",
    author: "Progateway Team",
    content: [
      {
        heading: "The five Cs of credit",
        body: "Lenders assess Character (credit score), Capacity (income & cash flow), Capital (own contribution), Collateral (security offered) and Conditions (industry & purpose). All five matter.",
      },
      {
        heading: "Documents that strengthen your case",
        body: "Latest 2–3 years of ITRs, audited financials, 12 months of bank statements, GST returns and a clear project report. Consistent revenue and clean bank conduct are the single biggest signals.",
      },
      {
        heading: "Common rejection reasons",
        body: "Bounced cheques, high credit utilisation, frequent overdrafts, late EMI payments and undisclosed existing loans top the list. Fix these before applying.",
      },
    ],
  },
  {
    slug: "gstr-1-vs-gstr-3b-explained",
    title: "GSTR-1 vs GSTR-3B: What's the Difference?",
    excerpt:
      "Both are filed monthly — but they serve very different purposes. Here's how to think about them.",
    category: "GST",
    date: "2026-01-14",
    readTime: "5 min read",
    author: "Progateway Team",
    content: [
      {
        heading: "GSTR-1: outward supplies",
        body: "GSTR-1 reports all your sales invoices to the GST system. It does not involve any tax payment — it's a disclosure return that flows your invoices to buyers' GSTR-2B.",
      },
      {
        heading: "GSTR-3B: summary & tax payment",
        body: "GSTR-3B is a summary of outward supplies, inward supplies, ITC claim and tax payable. This is the return where you actually pay your GST liability.",
      },
      {
        heading: "Why both matter",
        body: "A mismatch between GSTR-1 and GSTR-3B is a top reason for GST notices. Reconcile them every month before filing.",
      },
    ],
  },
];

export const BLOG_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p]),
);
