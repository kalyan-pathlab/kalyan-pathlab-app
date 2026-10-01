# Prompt for Claude AI – Kalyan Pathlab New App

Rebuild the attached Kalyan Pathlab patient booking website as a professional mobile-first PWA.

Brand:
- Name: Kalyan Pathlab
- Tagline: संस्कार फाउंडेशन संचलित · Care For Quality
- Booking URL: https://swapnilmokal.github.io/kalyan-pathlab/book/index.html
- Phone: 9870020674 / 8828111774
- Email: kalyan.pathlab.21@gmail.com
- Address: Shop No. 3, 1st Floor, Parvati Apartment, Tisgaon Naka, Kalyan East – 421306
- Main offer: 30% ते 70% सवलत
- Home sample collection: prominent throughout the app

UX requirements:
1. Mobile-first, clean medical design, fast loading.
2. Bottom navigation: Home, Tests, Book, Reports, Profile.
3. Home: offer banner, Book Now, search tests, popular tests, home collection, how it works, contact.
4. Tests: searchable test cards showing MRP, discounted price, saving, fasting/preparation, TAT and Book button.
5. Booking: patient details, multiple tests, date/time slot, address, report delivery preference, prescription upload, consent, payment.
6. Confirmation: unique Booking ID, summary, WhatsApp, call, add-to-calendar.
7. Reports: OTP/mobile verification, booking status timeline, private report download.
8. Profile: patient and family profiles, previous test history, saved addresses, consent/preferences.
9. Add a dedicated “Health Packages” section.
10. Add “Popular Tests”, “Women’s Health”, “Diabetes”, “Thyroid”, “Vitamin”, “Full Body” categories.
11. Make all buttons touch-friendly and accessible.
12. Do not hard-code medical prices in production; load test master data from an admin-controlled source.
13. Do not store sensitive health data only in localStorage in production.
14. Keep the front-end deployable on GitHub Pages, but design APIs/interfaces so a secure backend can be connected later.
15. Preserve Kalyan Pathlab branding and use original icons/assets supplied with this project.

Deliver:
- index.html
- tests.html
- book.html
- reports.html
- profile.html
- styles.css
- app.js
- manifest.json
- sw.js
- icon.svg
- README.md
- backend/API mapping document
- Google Apps Script option and Google Sheet column mapping
- Admin app specification
- patient booking data schema
- report data schema
- validation and error states

Before finalizing, test:
- Test search
- booking form validation
- WhatsApp message creation
- profile save
- report status lookup
- PWA install
- offline shell
- responsive layout
