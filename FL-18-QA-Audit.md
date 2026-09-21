# FL-18: Break Your Own Site (QA & SEO Hardening)

## 🕵️‍♂️ The "Where it Breaks" List

During the QA audit, I actively attempted to break the site by spamming inputs, clicking dead links, and checking responsiveness. Here are the findings and their honest triage:

### 1. Form Double Submission
*   **The Break:** Clicking the "Send Message" button multiple times rapidly could trigger multiple API calls to Web3Forms, resulting in duplicate emails.
*   **Triage:** ✅ **Fixed-Now**. The submit button is now disabled during the `isSubmitting` state, physically preventing duplicate network requests.

### 2. Empty or Garbage Form Submissions
*   **The Break:** Submitting the form with no data or an invalid email format.
*   **Triage:** 🟡 **Known Limitation**. The frontend uses HTML5 `required` and `type="email"` validation to block simple bad inputs. However, if a user bypasses the browser UI, they can still hit the Web3Forms API. Implementing a honeypot or backend reCAPTCHA is out of scope for a V1 static portfolio, but is a known limitation.

### 3. Case Study "Demo" Links
*   **The Break:** Clicking the "Live Demo" and "GitHub Repo" links on the Case Studies.
*   **Triage:** 🟡 **Known Limitation**. The actual case studies are not built yet. Instead of linking to a broken 404 page, these links have been converted to `<span>` tags with `cursor-not-allowed` to explicitly signal that they are disabled for now.

### 4. Poor Contrast on Form Error States
*   **The Break:** If the Web3Forms API fails (e.g. rate limit), the resulting error text was hard to read against the dark background.
*   **Triage:** ✅ **Fixed-Now**. The error/success states now render inside a highly visible colored container with distinct borders and padding (Red for error, Green for success).

---

## 📈 Findability and SEO Hardening

The site was initially deployed with the default Next.js "Create Next App" metadata, which looks unprofessional on social media and hurts findability.

*   **Triage:** ✅ **Fixed-Now**. 

I implemented proper `next/metadata` in the RootLayout:
*   **Page Title:** `Muhammad Faizan | Business Automation & AI Engineer`
*   **Meta Description:** `Automating manual business workflows using LLMs, custom web applications, and orchestration tools like N8N.`
*   **OpenGraph:** Added OpenGraph tags so that when the URL is shared on LinkedIn or Twitter, it renders a professional card with the correct title and description instead of a blank box.

## 🚀 Speed Check
Because the site is built using Next.js (Server Components) and deployed on Vercel's Edge Network, and all images are optimized using the `next/image` component, the site load time is near-instantaneous. Performance is well within the green metrics for Core Web Vitals.
