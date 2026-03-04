# Shore Psychiatric Services Website

Static website for **shorepsychiatricservices.com**, built for GitHub Pages with plain HTML, CSS, and JavaScript.

## File structure

```text
/
  index.html
  about.html
  services.html
  faqs.html
  contact.html
  README.md

/assets/
  /css/
    styles.css
  /js/
    script.js
  /images/
    tammy-headshot.jpg
```

## Deploy with GitHub Pages

1. Push this repository to GitHub.
2. In your GitHub repo, open **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your production branch), `/ (root)`
4. Save and wait for Pages to publish.
5. If using a custom domain, verify `CNAME` contains `shorepsychiatricservices.com`.

## Updating content

- Edit page content in:
  - `index.html`
  - `about.html`
  - `services.html`
  - `faqs.html`
  - `contact.html`
- Update site-wide styling in `assets/css/styles.css`.
- Update lightweight behavior (menu toggle, year, form validation) in `assets/js/script.js`.

## Images

- All images live in `assets/images/`.
- Current provider image path: `assets/images/tammy-headshot.jpg`.
- **Do not commit images via this PR tool; upload images directly in GitHub if needed.**
