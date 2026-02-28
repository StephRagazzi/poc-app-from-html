I have an existing HTML page and I want to embed a single Angular 21 Web Component (custom element) inside it using @angular/elements.
The Angular piece is just a widget/feature — the rest of the page should be completely unaffected.
In the current Angular 21 projet:
- Set up a minimal standalone component (no NgModule) and register it as a custom element using @angular/elements
- Build it into a single self-contained JS bundle that I can drop into any HTML page via a <script> tag
Ensure the Angular styles are encapsulated and don't leak into the rest of the page (using ViewEncapsulation.ShadowDom if appropriate)
Use Angular mcp to develop using best practices