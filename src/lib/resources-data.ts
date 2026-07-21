export interface ResourceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  category: "GST" | "Tax" | "Registration" | "Loans" | "Compliance" | "Finance";
  published: string;
  updated: string;
  readTime: string;
  author: string;
  reviewedBy: string;
  relatedServiceSlugs: string[];
  sections: ResourceSection[];
  faqs: Array<{ q: string; a: string }>;
  officialSources: Array<{ label: string; href: string }>;
}

const common = {
  author: "Progateway Editorial Team",
  reviewedBy: "Progateway Consultancy",
  updated: "2026-07-15",
} as const;

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    ...common,
    slug: "gst-registration-guide-small-business-gujarat",
    title: "Complete GST Registration Guide for Small Businesses in Gujarat",
    description:
      "A practical Gujarat-focused guide to GST registration applicability, documents, application stages and post-registration responsibilities.",
    category: "GST",
    published: "2026-03-04",
    readTime: "9 min read",
    relatedServiceSlugs: ["gst", "accounting", "company-firm-registration"],
    sections: [
      {
        heading: "Start with applicability, not assumptions",
        paragraphs: [
          "GST registration depends on the nature of supply, place of supply, turnover, business model and specific compulsory-registration provisions. A growing business should review its position before accepting large orders, entering interstate supply arrangements or joining an online marketplace.",
          "Thresholds and exceptions can change, and different rules may apply to goods, services and notified categories. Use the GST portal and current professional advice for the final determination.",
        ],
      },
      {
        heading: "Prepare the business identity and premises evidence",
        paragraphs: [
          "The application should consistently identify the legal name, trade name, constitution, authorised signatory, principal place of business and bank details. Mismatches between PAN records, address proof and uploaded declarations are a common source of clarification requests.",
        ],
        bullets: [
          "PAN and identity records of the applicant and relevant promoters",
          "Constitution documents such as partnership deed or incorporation records",
          "Ownership, rent or consent evidence for the business premises",
          "Bank-account evidence and authorised-signatory details",
        ],
      },
      {
        heading: "Understand the application and verification stages",
        paragraphs: [
          "The online application is completed on the official GST portal. Authentication, document review and any clarification response should be completed carefully. Acknowledgement does not itself mean approval; track the application status until the registration certificate is issued.",
        ],
      },
      {
        heading: "Registration creates ongoing responsibilities",
        paragraphs: [
          "After registration, the business should use the GSTIN correctly on invoices, maintain records, review return frequency, reconcile input-tax-credit information and monitor notices. Registration without a compliance calendar can quickly create late fees, blocked workflows or customer reconciliation problems.",
        ],
      },
    ],
    faqs: [
      { q: "Can I register voluntarily?", a: "Voluntary registration may be possible, but it creates ongoing compliance duties. Review the commercial benefit and filing workload before applying." },
      { q: "Is the government portal application fee the same as consultancy fees?", a: "No. Government or portal charges, where applicable, are separate from professional fees for document review, application preparation and follow-up." },
    ],
    officialSources: [
      { label: "GST Portal", href: "https://www.gst.gov.in/" },
      { label: "GST registration user guide", href: "https://tutorial.gst.gov.in/userguide/registration/Apply_for_Registration_Normal_Taxpayer.htm" },
    ],
  },
  {
    ...common,
    slug: "documents-required-gst-registration",
    title: "Documents Required for GST Registration",
    description:
      "A clear checklist of identity, constitution, premises, bank and authorisation documents commonly needed for GST registration.",
    category: "GST",
    published: "2026-03-18",
    readTime: "7 min read",
    relatedServiceSlugs: ["gst", "documents-required"],
    sections: [
      {
        heading: "Documents vary by business constitution",
        paragraphs: [
          "A proprietorship, partnership, LLP and company do not submit identical evidence. Begin with the legal constitution and identify every promoter, partner, director and authorised signatory whose details are required.",
        ],
      },
      {
        heading: "Identity and constitution checklist",
        paragraphs: ["Use current, legible records and ensure names match the PAN database and formation documents."],
        bullets: [
          "PAN of the business or proprietor, as applicable",
          "Aadhaar and photograph of relevant persons",
          "Partnership deed, LLP agreement or incorporation documents",
          "Board resolution or authorisation where required",
        ],
      },
      {
        heading: "Premises and bank evidence",
        paragraphs: [
          "The principal place of business should be supported by ownership proof, a valid rent or lease arrangement, or a consent document with the supporting utility or ownership record. Bank evidence should clearly show the account holder and account details.",
        ],
      },
      {
        heading: "Check file quality before upload",
        paragraphs: [
          "Blurred scans, expired agreements, incomplete signatures and oversized files can delay submission. Create a named folder for each document, retain the originals and keep the application reference after filing.",
        ],
      },
    ],
    faqs: [
      { q: "Is an electricity bill always sufficient for address proof?", a: "It may support the premises evidence, but the complete requirement depends on whether the premises is owned, rented or used with consent." },
      { q: "Do all partners or directors need to authenticate?", a: "The applicable authentication and signatory requirements depend on the constitution and portal workflow. Confirm the current requirement before filing." },
    ],
    officialSources: [
      { label: "GST registration document checklist", href: "https://tutorial.gst.gov.in/cbt/registration/gstregistration/course/story_content/external_files/GST_Registration_Document_Checklist.pdf" },
      { label: "GST Portal", href: "https://www.gst.gov.in/" },
    ],
  },
  {
    ...common,
    slug: "gst-return-filing-guide-business-owners",
    title: "GST Return Filing Guide for Business Owners",
    description:
      "Understand the records, reconciliation and review process behind accurate GST return filing without relying on last-minute estimates.",
    category: "GST",
    published: "2026-04-02",
    readTime: "9 min read",
    relatedServiceSlugs: ["gst", "accounting", "income-tax"],
    sections: [
      {
        heading: "Returns begin with bookkeeping",
        paragraphs: [
          "GST filing quality depends on the underlying sales invoices, purchase records, credit notes, debit notes, advances and tax-payment information. A return prepared from incomplete books may appear filed while still creating mismatches later.",
        ],
      },
      {
        heading: "Reconcile outward supplies and tax liability",
        paragraphs: [
          "Compare the invoice register with the applicable outward-supply return and summary return. Differences in taxable value, tax rate, place of supply or invoice period should be corrected through the permitted process rather than ignored.",
        ],
      },
      {
        heading: "Review input tax credit carefully",
        paragraphs: [
          "Input tax credit should be supported by eligible business purchases, valid documents and the current legal conditions. Reconcile the purchase register with portal information and investigate missing or duplicated invoices before claiming credit.",
        ],
      },
      {
        heading: "Maintain a filing calendar and evidence folder",
        paragraphs: [
          "Return type and due dates depend on registration status, scheme and notifications. Keep portal acknowledgements, payment challans, working papers and reconciliation notes so later queries can be answered efficiently.",
        ],
      },
    ],
    faqs: [
      { q: "Are GSTR-1 and GSTR-3B the same?", a: "No. They serve different reporting purposes. The figures should be reconciled so outward supplies and tax liability remain consistent." },
      { q: "Can a late return still be filed?", a: "The portal generally permits pending returns subject to applicable conditions, fees and sequencing rules. Check the current portal position and notices before proceeding." },
    ],
    officialSources: [
      { label: "GST returns dashboard guide", href: "https://tutorial.gst.gov.in/userguide/returns/Create_and_Submit_GSTR3B.htm" },
      { label: "GST Portal", href: "https://www.gst.gov.in/" },
    ],
  },
  {
    ...common,
    slug: "proprietorship-partnership-llp-private-limited-comparison",
    title: "Proprietorship vs Partnership vs LLP vs Private Limited Company",
    description:
      "Compare common Indian business structures across ownership, liability, continuity, compliance, fundraising and record-keeping needs.",
    category: "Registration",
    published: "2026-04-14",
    readTime: "10 min read",
    relatedServiceSlugs: ["company-firm-registration", "accounting", "gst"],
    sections: [
      {
        heading: "There is no single best structure",
        paragraphs: [
          "The right structure depends on owners, risk, expected turnover, funding plans, customer requirements, succession and compliance capacity. A low-cost structure can become restrictive later, while a complex structure can create unnecessary administration for a small activity.",
        ],
      },
      {
        heading: "How the common structures differ",
        paragraphs: ["Use this comparison as a discussion framework, not a substitute for legal and tax advice."],
        bullets: [
          "Proprietorship: simple owner-controlled setup, but no separate legal personality from the proprietor",
          "Partnership: shared ownership under a partnership arrangement, with partner obligations governed by law and agreement",
          "LLP: separate legal entity with limited-liability features and prescribed compliance",
          "Private limited company: share-based corporate structure commonly used for scalable businesses and external investment",
        ],
      },
      {
        heading: "Questions to answer before registering",
        paragraphs: [
          "Decide who will own the business, who can sign, how profits are shared, what happens if an owner exits, whether investors may enter and which annual filings can be maintained. A written founders' or partners' understanding reduces later conflict.",
        ],
      },
      {
        heading: "Registrations do not replace operating discipline",
        paragraphs: [
          "After formation, maintain accounting records, tax registrations, licences, contracts and statutory filings. The incorporation certificate alone does not make a business compliant in every area.",
        ],
      },
    ],
    faqs: [
      { q: "Can a proprietorship later become a company or LLP?", a: "A business can often be reorganised, but assets, contracts, tax registrations and liabilities need a planned transition." },
      { q: "Is limited liability absolute?", a: "No. Legal protections have conditions, and personal guarantees, fraud, non-compliance or specific obligations can create personal exposure." },
    ],
    officialSources: [
      { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
      { label: "MCA company services", href: "https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html" },
    ],
  },
  {
    ...common,
    slug: "company-registration-process-gujarat",
    title: "Company Registration Process in Gujarat",
    description:
      "A practical overview of name selection, digital signatures, incorporation documents, registered office and post-incorporation actions.",
    category: "Registration",
    published: "2026-04-28",
    readTime: "9 min read",
    relatedServiceSlugs: ["company-firm-registration", "gst", "accounting"],
    sections: [
      {
        heading: "Company registration is a central process with local records",
        paragraphs: [
          "Companies are incorporated through the Ministry of Corporate Affairs system, while the registered office, local licences, professional tax or other state and municipal requirements may depend on the actual activity and location in Gujarat.",
        ],
      },
      {
        heading: "Plan the name, objects and ownership",
        paragraphs: [
          "Before filing, review name availability, trademark conflict risk, main business objects, authorised and paid-up capital, shareholding and director details. A rushed name or object clause can create avoidable changes later.",
        ],
      },
      {
        heading: "Prepare incorporation and office documents",
        paragraphs: ["The exact forms and attachments depend on the proposed company and current MCA workflow."],
        bullets: [
          "Identity, address and contact details of subscribers and directors",
          "Digital signature certificates for required signatories",
          "Registered-office ownership, rent or consent evidence",
          "Constitution documents and declarations generated through the prescribed process",
        ],
      },
      {
        heading: "Complete post-incorporation actions",
        paragraphs: [
          "After incorporation, open and operate the bank account, issue shares, maintain statutory records, review tax registrations and create an annual compliance calendar. The exact requirements should be confirmed for the company's size and activity.",
        ],
      },
    ],
    faqs: [
      { q: "Does registration in Gujarat require a Gujarat-only company form?", a: "The company incorporation process is through the central MCA system, but the registered office and local operating requirements must be accurate for Gujarat." },
      { q: "Can the registered office be rented?", a: "A rented office may be used when supported by the required agreement, owner consent and address evidence under the current filing rules." },
    ],
    officialSources: [
      { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
      { label: "MCA services", href: "https://www.mca.gov.in/content/mca/global/en/services.html" },
    ],
  },
  {
    ...common,
    slug: "documents-company-firm-registration",
    title: "Documents Required for Company and Firm Registration",
    description:
      "Prepare identity, address, office, ownership and authorisation documents for proprietorship, partnership, LLP or company registration.",
    category: "Registration",
    published: "2026-05-06",
    readTime: "7 min read",
    relatedServiceSlugs: ["company-firm-registration", "documents-required"],
    sections: [
      {
        heading: "Choose the structure before collecting documents",
        paragraphs: [
          "A firm, LLP and company use different formation records and portals. Confirm the structure, owners and proposed office first so the checklist is not mixed across incompatible processes.",
        ],
      },
      {
        heading: "Common promoter and owner records",
        paragraphs: ["Keep clear, current copies and ensure names and addresses are consistent."],
        bullets: [
          "PAN, identity and address evidence",
          "Photographs, email and mobile details",
          "Proposed ownership, contribution or shareholding details",
          "Authorisation and digital-signature requirements where applicable",
        ],
      },
      {
        heading: "Business premises and activity records",
        paragraphs: [
          "Office evidence may include ownership records, rent or lease documents, consent and a recent utility record. The proposed business activity should be described precisely enough for formation and later registrations.",
        ],
      },
      {
        heading: "Keep signed final documents safely",
        paragraphs: [
          "Retain the executed deed, agreement, memorandum, articles, certificate and acknowledgements. These records are repeatedly required for banking, GST, licences, loans and future changes.",
        ],
      },
    ],
    faqs: [
      { q: "Can one checklist be used for every structure?", a: "No. The base identity and office documents may overlap, but the constitution documents, signatories and filing process differ." },
      { q: "Should the business activity be broad or specific?", a: "It should accurately cover the intended operations without using vague wording that creates confusion. Specialist drafting may be appropriate for complex activities." },
    ],
    officialSources: [{ label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" }],
  },
  {
    ...common,
    slug: "fssai-registration-licence-requirements",
    title: "FSSAI Registration and Licence Requirements",
    description:
      "Understand how food activity, scale, premises and business model affect the FSSAI registration or licence category and documents.",
    category: "Registration",
    published: "2026-05-15",
    readTime: "8 min read",
    relatedServiceSlugs: ["fssai-registration", "company-firm-registration", "gst"],
    sections: [
      {
        heading: "Identify every food-business activity",
        paragraphs: [
          "Manufacturing, storage, transport, distribution, retail, catering, cloud kitchens, restaurants and import activities can have different licensing implications. List every activity and premises before choosing a category.",
        ],
      },
      {
        heading: "Use the official eligibility and document tools",
        paragraphs: [
          "FoSCoS provides current eligibility criteria, fee information and document guidance. The correct category depends on current regulations and business facts, not only on what a similar business selected.",
        ],
      },
      {
        heading: "Prepare premises and food-safety evidence",
        paragraphs: ["Requirements vary, but a food business should be ready with accurate premises and operational records."],
        bullets: [
          "Identity and constitution records",
          "Premises ownership, rent or consent evidence",
          "Food category and activity details",
          "Layout, equipment, water, technical or safety records where applicable",
        ],
      },
      {
        heading: "Maintain and renew the approval",
        paragraphs: [
          "Display and use the FSSAI number as required, maintain hygiene and records, file any applicable returns and monitor renewal. A licence does not remove the duty to comply with food-safety conditions.",
        ],
      },
    ],
    faqs: [
      { q: "Is FSSAI registration only for restaurants?", a: "No. Many food manufacturers, traders, distributors, transporters, storage operators, retailers and online food businesses may require registration or a licence." },
      { q: "Can the category be changed later?", a: "Modification or migration may be required when the business activity, scale or premises changes. Use the current FoSCoS process." },
    ],
    officialSources: [
      { label: "FoSCoS", href: "https://foscos.fssai.gov.in/" },
      { label: "Apply for FSSAI registration or licence", href: "https://foscos.fssai.gov.in/apply-for-lic-and-reg" },
    ],
  },
  {
    ...common,
    slug: "trademark-registration-process-india",
    title: "Trademark Registration Process in India",
    description:
      "A practical guide to trademark searching, class selection, filing, examination, opposition and responsible brand use in India.",
    category: "Registration",
    published: "2026-05-24",
    readTime: "9 min read",
    relatedServiceSlugs: ["trademark-registration", "company-firm-registration"],
    sections: [
      {
        heading: "Start with ownership and a clearance search",
        paragraphs: [
          "Confirm who owns the mark and search for identical or confusingly similar marks. A company name, domain or social handle does not automatically mean the trademark is available.",
        ],
      },
      {
        heading: "Select the correct goods and services",
        paragraphs: [
          "Trademark applications use classification by goods and services. The selected class and wording should match actual or intended use. Filing an irrelevant class can waste cost, while missing a core class can leave a gap.",
        ],
      },
      {
        heading: "Filing is the start, not the finish",
        paragraphs: [
          "After filing, the application may be examined and objections may require a reasoned response. Accepted marks are published, and third parties may oppose within the legal process. Registration timing therefore varies substantially.",
        ],
      },
      {
        heading: "Use the correct symbol and keep evidence",
        paragraphs: [
          "Applicants may use the ™ symbol to indicate a claimed mark. The ® symbol should only be used after registration for the relevant mark and goods or services. Keep invoices, packaging, advertisements and online evidence showing genuine use.",
        ],
      },
    ],
    faqs: [
      { q: "Does filing guarantee registration?", a: "No. The application is examined and may face objections or opposition. The outcome depends on the law, prior rights and the evidence or arguments submitted." },
      { q: "Should I search only the exact spelling?", a: "No. Review phonetic, visual and conceptually similar marks, along with relevant classes and related goods or services." },
    ],
    officialSources: [
      { label: "IP India", href: "https://ipindia.gov.in/" },
      { label: "Trademark public search", href: "https://tmrsearch.ipindia.gov.in/tmrpublicsearch/" },
      { label: "Trademark forms and official fees", href: "https://ipindia.gov.in/pages/trade-marks/learn/forms-and-official-fees" },
    ],
  },
  {
    ...common,
    slug: "iso-certification-process-small-business",
    title: "ISO Certification Process for Small Businesses",
    description:
      "Understand standards selection, gap assessment, documentation, implementation, audit and certification-body checks for a small business.",
    category: "Compliance",
    published: "2026-06-01",
    readTime: "8 min read",
    relatedServiceSlugs: ["iso-certification", "accounting"],
    sections: [
      {
        heading: "Choose a standard because it fits the business",
        paragraphs: [
          "An ISO standard should support a real customer, process, safety, environmental or information-security requirement. Certification should not be treated as a decorative certificate detached from daily operations.",
        ],
      },
      {
        heading: "Complete a gap assessment",
        paragraphs: [
          "Compare current processes with the selected standard. Identify missing policies, records, responsibilities, controls, training and review mechanisms. The action plan should be proportionate to the organisation's size and risk.",
        ],
      },
      {
        heading: "Implement and record the system",
        paragraphs: [
          "Create only the documents and records that are useful and required. Train the team, operate the controls, review evidence and correct problems before the certification audit.",
        ],
      },
      {
        heading: "Check the certification body",
        paragraphs: [
          "Ask who accredits the certification body, what scope will appear on the certificate, how surveillance works and which fees recur. No consultant should promise a valid certificate without the required independent audit process.",
        ],
      },
    ],
    faqs: [
      { q: "Is ISO certification issued by ISO itself?", a: "ISO develops international standards but does not directly certify organisations. Certification is performed by certification bodies." },
      { q: "Can a very small business be certified?", a: "Yes, where the selected standard is applicable and the management system is implemented. Documentation can be proportionate to size and complexity." },
    ],
    officialSources: [
      { label: "International Organization for Standardization", href: "https://www.iso.org/" },
      { label: "ISO certification information", href: "https://www.iso.org/certification.html" },
    ],
  },
  {
    ...common,
    slug: "import-export-code-registration-guide",
    title: "Import Export Code Registration Guide",
    description:
      "Learn what an IEC is, how to prepare the DGFT profile, which records to check and how to maintain IEC details after issue.",
    category: "Registration",
    published: "2026-06-08",
    readTime: "7 min read",
    relatedServiceSlugs: ["import-export-code", "gst", "company-firm-registration"],
    sections: [
      {
        heading: "IEC identifies the importer or exporter",
        paragraphs: [
          "The Importer-Exporter Code is a key business identification number used for imports and exports, subject to exemptions and current DGFT rules. The applicant's PAN, constitution, address and bank information should be consistent.",
        ],
      },
      {
        heading: "Prepare the DGFT profile before applying",
        paragraphs: [
          "Create or update the DGFT user profile using controlled email and mobile details. Keep access credentials securely and ensure the authorised signatory can complete the prescribed verification.",
        ],
      },
      {
        heading: "Check business and bank evidence",
        paragraphs: ["Typical preparation includes the following, subject to the current portal workflow."],
        bullets: [
          "PAN and constitution details",
          "Address and contact information",
          "Bank-account evidence",
          "Authorised-signatory and authentication details",
        ],
      },
      {
        heading: "Maintain the IEC profile",
        paragraphs: [
          "IEC holders should monitor DGFT requirements for confirming or updating details and keep the profile aligned with changes in address, bank account or constitution. Export and import activity may also involve customs, GST, bank and product-specific rules.",
        ],
      },
    ],
    faqs: [
      { q: "Is IEC the only approval needed to export?", a: "No. Product, destination, customs, GST, banking and sector-specific requirements may also apply." },
      { q: "Can an individual obtain an IEC?", a: "Eligibility depends on the applicant and intended activity. Review the current DGFT requirements and business facts before applying." },
    ],
    officialSources: [
      { label: "Directorate General of Foreign Trade", href: "https://www.dgft.gov.in/" },
      { label: "IEC profile management", href: "https://www.dgft.gov.in/CP/?opt=iec-profile-management" },
    ],
  },
  {
    ...common,
    slug: "documents-required-business-loan",
    title: "Documents Required for a Business Loan",
    description:
      "Organise KYC, banking, tax, financial, business and security documents before approaching a bank or NBFC for a business loan.",
    category: "Loans",
    published: "2026-06-15",
    readTime: "8 min read",
    relatedServiceSlugs: ["loans", "business-loan", "accounting"],
    sections: [
      {
        heading: "Lenders need evidence of identity, activity and repayment capacity",
        paragraphs: [
          "A loan file should help the lender understand who is borrowing, how the business earns money, how funds will be used and how repayment is expected. Exact requirements differ by lender, product, security and applicant profile.",
        ],
      },
      {
        heading: "Core document groups",
        paragraphs: ["Prepare complete periods rather than isolated pages."],
        bullets: [
          "KYC and constitution documents of the borrower and relevant promoters",
          "Business registrations, licences and address evidence",
          "Bank statements and existing-loan statements",
          "Income-tax returns, GST returns and financial statements where applicable",
          "Quotation, project report, property or security records for the proposed facility",
        ],
      },
      {
        heading: "Make the numbers consistent",
        paragraphs: [
          "Turnover, profit, debt and cash flow should reconcile across financial statements, tax returns, GST records and bank activity. Explain genuine one-off events rather than allowing the lender to interpret unexplained differences.",
        ],
      },
      {
        heading: "Do not hide existing obligations",
        paragraphs: [
          "Disclose current loans, guarantees, overdue amounts and material disputes. Incomplete disclosure can damage trust and may affect later sanction conditions or verification.",
        ],
      },
    ],
    faqs: [
      { q: "How many years of financial records are required?", a: "The period varies by lender and product. Ask for the exact checklist before preparing the file." },
      { q: "Does a complete file guarantee sanction?", a: "No. Documentation supports assessment, but sanction depends on lender policy, credit evaluation, security, industry and repayment capacity." },
    ],
    officialSources: [
      { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
      { label: "SIDBI", href: "https://www.sidbi.in/" },
    ],
  },
  {
    ...common,
    slug: "personal-loan-application-checklist",
    title: "Personal Loan Application Checklist",
    description:
      "Review credit, income, banking, existing obligations and loan purpose before submitting a personal-loan application.",
    category: "Loans",
    published: "2026-06-20",
    readTime: "6 min read",
    relatedServiceSlugs: ["loans", "personal-loan"],
    sections: [
      {
        heading: "Decide the amount from repayment capacity",
        paragraphs: [
          "Begin with the required amount and a realistic monthly repayment range. Borrowing the maximum offered can reduce future flexibility and increase total interest cost.",
        ],
      },
      {
        heading: "Review credit and existing commitments",
        paragraphs: [
          "Check the accuracy of your credit report, current EMIs, card utilisation, guarantees and recent enquiries. Correct genuine reporting errors through the prescribed process before applying.",
        ],
      },
      {
        heading: "Prepare income and banking records",
        paragraphs: ["The lender may request different evidence for salaried and self-employed applicants."],
        bullets: [
          "PAN, identity and address proof",
          "Salary slips or business-income evidence",
          "Bank statements for the requested period",
          "Income-tax returns or Form 16 where applicable",
          "Details of existing loans and repayment obligations",
        ],
      },
      {
        heading: "Compare the full cost and conditions",
        paragraphs: [
          "Review interest method, processing fee, insurance, taxes, prepayment conditions, late-payment charges and net disbursal. Read the lender's official sanction and loan agreement before accepting.",
        ],
      },
    ],
    faqs: [
      { q: "Should I apply with several lenders at once?", a: "Unplanned multiple applications can create several credit enquiries. Shortlist based on eligibility and terms before submitting formal applications." },
      { q: "Can a consultant change my credit score?", a: "No one can lawfully manufacture a score. Accurate reporting errors may be disputed, while improvement otherwise depends on responsible credit behaviour over time." },
    ],
    officialSources: [
      { label: "Reserve Bank of India consumer information", href: "https://www.rbi.org.in/commonperson/English/Scripts/FAQs.aspx" },
    ],
  },
  {
    ...common,
    slug: "common-income-tax-return-filing-mistakes",
    title: "Common Income-Tax Return Filing Mistakes",
    description:
      "Avoid mismatched income, wrong return forms, omitted transactions, unsupported deductions and incomplete verification when filing an ITR.",
    category: "Tax",
    published: "2026-06-25",
    readTime: "8 min read",
    relatedServiceSlugs: ["income-tax", "accounting"],
    sections: [
      {
        heading: "Using the wrong return form",
        paragraphs: [
          "The correct ITR form depends on income sources, residential status, assets and taxpayer category. A form that appears simpler may be invalid for the actual facts.",
        ],
      },
      {
        heading: "Ignoring information already reported to the department",
        paragraphs: [
          "Compare salary records, tax-deduction records, interest, securities transactions and other available information with the e-filing portal statements. Investigate differences before submission.",
        ],
      },
      {
        heading: "Claiming deductions without evidence",
        paragraphs: [
          "Deductions and exemptions must satisfy current legal conditions. Keep receipts, certificates, loan statements and other supporting records even when they are not uploaded with the return.",
        ],
      },
      {
        heading: "Forgetting verification and follow-up",
        paragraphs: [
          "A filed return must be verified through an accepted method within the applicable time. Monitor processing, refund status and any communication, and respond through the correct portal workflow.",
        ],
      },
    ],
    faqs: [
      { q: "Should I rely only on Form 16?", a: "No. Review all income sources, tax records and available portal information. Form 16 may not include every reportable item." },
      { q: "Can a filed return be corrected?", a: "The law and portal provide correction mechanisms in eligible circumstances. The correct route and time limit depend on the case and current rules." },
    ],
    officialSources: [
      { label: "Income Tax e-Filing portal", href: "https://www.incometax.gov.in/iec/foportal/" },
      { label: "Income Tax Department help", href: "https://www.incometax.gov.in/iec/foportal/help" },
    ],
  },
  {
    ...common,
    slug: "tax-compliance-calendar-gujarat-businesses",
    title: "Tax and Compliance Calendar for Gujarat Businesses",
    description:
      "Build a living compliance calendar for GST, income tax, TDS, corporate, labour, licence and internal review obligations.",
    category: "Compliance",
    published: "2026-07-01",
    readTime: "8 min read",
    relatedServiceSlugs: ["accounting", "gst", "income-tax", "company-firm-registration"],
    sections: [
      {
        heading: "A calendar should be business-specific",
        paragraphs: [
          "A proprietorship with employees, a company selling interstate and a food manufacturer do not share the same filings. Build the calendar from the legal structure, registrations, turnover, payroll, licences and contracts.",
        ],
      },
      {
        heading: "Track obligations by frequency",
        paragraphs: ["Use categories that are easy for the team to maintain."],
        bullets: [
          "Event-based: incorporation changes, new premises, director or partner changes",
          "Monthly or periodic: bookkeeping close, GST, TDS, payroll and lender reporting",
          "Quarterly: reconciliations, advance-tax review and management reporting",
          "Annual: income tax, corporate filings, licence renewals, audit and policy review",
        ],
      },
      {
        heading: "Assign an owner and evidence for every task",
        paragraphs: [
          "Each calendar item should identify the responsible person, preparer, reviewer, due date, source of data and location of the final acknowledgement. A reminder without ownership is easy to ignore.",
        ],
      },
      {
        heading: "Refresh the calendar when rules or business facts change",
        paragraphs: [
          "Due dates and legal requirements can be changed by notifications. Review official portals regularly and update the calendar when turnover, employee count, activities, locations or registrations change.",
        ],
      },
    ],
    faqs: [
      { q: "Can one online calendar include every Indian compliance?", a: "A generic calendar can be a starting point, but the final schedule must be tailored to the entity, state, industry and registrations." },
      { q: "Who should own compliance in a small business?", a: "Assign a named internal owner even when an external consultant prepares filings. Management remains responsible for timely and accurate information." },
    ],
    officialSources: [
      { label: "GST Portal", href: "https://www.gst.gov.in/" },
      { label: "Income Tax e-Filing portal", href: "https://www.incometax.gov.in/iec/foportal/" },
      { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
    ],
  },
  {
    ...common,
    slug: "financial-planning-checklist-small-business-owners",
    title: "Financial Planning Checklist for Small Business Owners",
    description:
      "A practical checklist covering cash flow, taxes, reserves, debt, insurance, owner withdrawals and investment decisions for small businesses.",
    category: "Finance",
    published: "2026-07-05",
    readTime: "8 min read",
    relatedServiceSlugs: ["accounting", "investment", "insurance", "loans"],
    sections: [
      {
        heading: "Separate business and personal money",
        paragraphs: [
          "Use dedicated business banking and record owner contributions, drawings, reimbursements and loans clearly. Mixing funds hides performance and makes tax, lender and partner discussions harder.",
        ],
      },
      {
        heading: "Build a rolling cash-flow view",
        paragraphs: [
          "Track expected collections, supplier payments, payroll, tax, loan instalments and planned purchases. A profitable business can still face a cash shortage when receipts and payments fall in different periods.",
        ],
      },
      {
        heading: "Create reserves and protection",
        paragraphs: ["Review resilience before committing all surplus to expansion."],
        bullets: [
          "Emergency operating reserve",
          "Tax and statutory-payment reserve",
          "Insurance for relevant people, assets and liabilities",
          "Contingency plan for key customers, suppliers or equipment",
        ],
      },
      {
        heading: "Review debt and investments separately",
        paragraphs: [
          "Business borrowing should have a clear purpose, repayment source and sensitivity check. Personal and business investments should be assessed for risk, liquidity, regulation and suitability; returns are never guaranteed merely because a product is marketed as popular.",
        ],
      },
    ],
    faqs: [
      { q: "How often should a small business review cash flow?", a: "At least monthly, and more frequently when collections are uncertain, growth is rapid or cash balances are tight." },
      { q: "Should all surplus be reinvested in the business?", a: "Not automatically. Balance growth needs with reserves, owner goals, taxes, debt and concentration risk." },
    ],
    officialSources: [
      { label: "Reserve Bank of India financial education", href: "https://www.rbi.org.in/financialeducation/" },
      { label: "SEBI investor education", href: "https://investor.sebi.gov.in/" },
      { label: "IRDAI policyholder resources", href: "https://policyholder.gov.in/" },
    ],
  },
  {
    ...common,
    slug: "who-needs-gst-registration",
    title: "Who Needs GST Registration?",
    description:
      "Review turnover, interstate supply, e-commerce and compulsory-registration triggers before deciding whether a business needs GST registration.",
    category: "GST",
    published: "2026-07-08",
    readTime: "6 min read",
    relatedServiceSlugs: ["gst", "company-firm-registration"],
    sections: [
      {
        heading: "Turnover is only one part of the test",
        paragraphs: [
          "Businesses often look only at a turnover threshold, but GST law also contains compulsory-registration situations, exemptions and special rules. Review all supplies, locations and selling channels.",
        ],
      },
      {
        heading: "Map how and where the business supplies",
        paragraphs: [
          "Identify whether supplies are goods or services, where customers are located, whether an e-commerce operator is involved, and whether the business imports, exports or operates temporarily in another state.",
        ],
      },
      {
        heading: "Consider voluntary registration carefully",
        paragraphs: [
          "Voluntary registration may help with input credit or business-to-business customers, but it also creates invoicing, return and record-keeping responsibilities. Compare both sides before filing.",
        ],
      },
      {
        heading: "Document the conclusion",
        paragraphs: [
          "Keep a note of turnover calculations, activity, exemptions and advice used. Revisit the decision when the business model, turnover or locations change.",
        ],
      },
    ],
    faqs: [
      { q: "Does every online seller need GST registration?", a: "Rules depend on the platform, supply and current legal provisions. Review the exact business model rather than relying on a general statement." },
      { q: "Can registration be cancelled if no longer required?", a: "Cancellation may be available in eligible cases, but pending returns, tax and other obligations should be addressed through the prescribed process." },
    ],
    officialSources: [
      { label: "GST Portal", href: "https://www.gst.gov.in/" },
      { label: "Central Board of Indirect Taxes and Customs", href: "https://www.cbic-gst.gov.in/" },
    ],
  },
  {
    ...common,
    slug: "how-long-company-registration-takes",
    title: "How Much Time Does Company Registration Take?",
    description:
      "Understand why company registration timelines vary and how name, documents, signatures, portal queries and office evidence affect completion.",
    category: "Registration",
    published: "2026-07-10",
    readTime: "6 min read",
    relatedServiceSlugs: ["company-firm-registration"],
    sections: [
      {
        heading: "There is no honest universal completion promise",
        paragraphs: [
          "Timelines vary with the proposed name, digital signatures, document readiness, portal availability, reviewer queries and accuracy of the incorporation forms. A consultant can control preparation quality, not the authority's final processing time.",
        ],
      },
      {
        heading: "Preparation often determines avoidable delay",
        paragraphs: ["Complete these decisions before filing."],
        bullets: [
          "Final promoters, directors and ownership",
          "Name options and trademark-risk review",
          "Business objects and capital structure",
          "Registered-office evidence and owner consent",
          "Digital-signature and identity verification",
        ],
      },
      {
        heading: "Queries should be answered precisely",
        paragraphs: [
          "If the authority requests clarification, respond within the permitted time with the requested evidence. Refiling unrelated documents or changing facts without explanation can create further delay.",
        ],
      },
      {
        heading: "Plan for post-incorporation tasks too",
        paragraphs: [
          "The business may still need banking, share issuance, tax registration, local licences and accounting setup after the certificate is issued. Build the launch plan around the whole setup, not only the incorporation date.",
        ],
      },
    ],
    faqs: [
      { q: "Can anyone guarantee incorporation within a fixed number of days?", a: "A fixed guarantee is unreliable because the authority controls processing and may raise queries. Ask for an expected range with stated assumptions." },
      { q: "Does name approval mean the company is registered?", a: "No. Name reservation or approval is only one stage; the incorporation forms and supporting records must still be accepted." },
    ],
    officialSources: [{ label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" }],
  },
];

export const RESOURCE_BY_SLUG = Object.fromEntries(
  RESOURCE_ARTICLES.map((article) => [article.slug, article]),
) as Record<string, ResourceArticle>;
