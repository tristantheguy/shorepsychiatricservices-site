# Website Security + Marketability Improvement Plan

## 1) Highest-priority security hardening (0-2 weeks)

1. **Deploy security headers at the hosting/CDN layer**
   - Keep the CSP added in HTML as a baseline, but enforce headers at the server/CDN for stronger protection.
   - Add: `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` (or equivalent through CSP `frame-ancestors`), and `Cross-Origin-Resource-Policy`.
2. **Subresource Integrity (SRI) or self-hosted scripts**
   - Third-party script risk currently exists for analytics and booking widget; prefer self-hosting when contracts permit.
   - If not possible, pin with SRI hashes where providers support fixed assets.
3. **Cookie/data minimization + HIPAA-friendly analytics posture**
   - Reduce tracking scope to essentials; avoid collecting PHI in analytics events.
   - Add explicit consent mode and privacy policy details for analytics + third-party scheduling.
4. **Continuous dependency and integrity checks**
   - Add scheduled automated scans (OWASP ZAP baseline, SSL Labs checks, and link monitoring).

## 2) Trust, professionalism, and conversion upgrades (1-4 weeks)

1. **Strengthen credibility signals above the fold**
   - Show provider credentials, licensure state, and “what to expect” outcomes near primary CTA.
   - Add concise trust strip: privacy-first telehealth, Maryland coverage, response time expectations.
2. **Sharpen service pages for intent matching**
   - Build condition-specific pages (e.g., anxiety, depression, ADHD evaluations) with clear treatment scope and safety disclaimers.
   - Add location-relevant content for Eastern Shore + Maryland telehealth queries.
3. **Structured proof elements**
   - Add testimonials workflow (compliant, de-identified), FAQ schema, and clearer insurance/payment blocks.
4. **Reduce friction in booking funnel**
   - A/B test CTA copy, booking order (Headway/Alma/Zocdoc), and step labeling.
   - Add “new patient checklist” and average time-to-first-appointment copy.

## 3) Technical SEO + discoverability upgrades

1. **Schema expansion**
   - Extend structured data across pages (`Physician`, `MedicalClinic`, `FAQPage`, and breadcrumb schema where relevant).
2. **Metadata consistency**
   - Ensure each page has unique title/meta description and canonical URL.
3. **Performance and Core Web Vitals**
   - Convert hero imagery to modern compressed formats, preload key hero asset, and lazy-load below-the-fold media.
4. **Local SEO signals**
   - Align NAP (name/address/phone) consistently across pages and profiles; add provider-focused entity markup.

## 4) Longer-term “best-in-class” roadmap

1. **Security operations maturity**
   - Quarterly security review, incident-response checklist, and logging/alerting for uptime or script integrity changes.
2. **Evidence-based content program**
   - Publish plain-language explainers tied to peer-reviewed evidence and medication-safety education.
3. **Conversion analytics framework**
   - Define micro-conversions (scroll depth, CTA clicks, booking starts/completions) with privacy-safe tracking.
4. **Accessibility excellence**
   - Audit against WCAG 2.2 AA and remediate focus order, contrast, motion preference, and screen reader landmarks site-wide.

## Suggested KPIs

- Booking conversion rate
- Time to first booked appointment
- Bounce rate on service pages
- Organic traffic to service-intent pages
- Core Web Vitals pass rate
- Security scan findings trend (critical/high)
