# CadenceAI Legal

Static website for the CadenceAI Privacy Policy and Terms of Service. No build step — GitHub Pages serves the files as-is.

## Structure

```
index.html              Landing page
privacy-policy.html     Privacy Policy
terms-of-service.html   Terms of Service
assets/style.css        Shared stylesheet
assets/site.js          Generates the section table of contents
assets/logo.svg         Site icon / brand mark
.nojekyll               Tells GitHub Pages to skip Jekyll processing
PRIVACY_POLICY.md       Markdown source for the Privacy Policy
TERMS_OF_SERVICE.md     Markdown source for the Terms of Service
```

The `.md` files are the source documents. If you edit them, update the matching `.html` page too (or regenerate it).

## Deploying to GitHub Pages

1. Push these files to the repository's `main` branch.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. The site publishes at `https://realgreat01.github.io/candence-docs/`.

## Local preview

Any static server works, for example:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing checklist

The documents contain bracketed placeholders such as `[COMPANY LEGAL NAME]`, `[POSTAL ADDRESS]`, `[PRIVACY EMAIL]`, `[JURISDICTION]`, and `[VENUE]`. Replace them, and have counsel review both documents, before making the site public.
