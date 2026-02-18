# Website Deployment - VentureHubMBS.de

## Domain-Verfügbarkeit prüfen

Die Domain **VentureHubMBS.de** muss zuerst auf Verfügbarkeit geprüft werden:

### Domain-Registrierung (Deutsche Anbieter):
- **IONOS** (1&1): https://www.ionos.de/domains
- **Strato**: https://www.strato.de/domains/
- **All-Inkl**: https://all-inkl.com/domains/
- **Hetzner**: https://www.hetzner.com/de/domains

**Kosten**: Ca. 5-15€ pro Jahr für eine .de Domain

## Hosting-Optionen

### Option 1: Kostenlos mit Netlify (Empfohlen für Start)
**Vorteile:**
- ✅ Kostenlos
- ✅ Automatisches HTTPS
- ✅ Einfaches Deployment
- ✅ Custom Domain möglich

**Schritte:**
1. Gehe zu https://www.netlify.com
2. Erstelle kostenlosen Account
3. Ziehe deinen Projektordner in den "Deploy"-Bereich
4. Netlify gibt dir eine URL (z.B. `mbs-venture-hub.netlify.app`)
5. In den Domain-Einstellungen kannst du deine Domain `VentureHubMBS.de` verbinden

### Option 2: Kostenlos mit Vercel
**Vorteile:**
- ✅ Kostenlos
- ✅ Sehr schnell
- ✅ Automatisches HTTPS

**Schritte:**
1. Gehe zu https://vercel.com
2. Erstelle Account
3. Installiere Vercel CLI: `npm i -g vercel`
4. Im Projektordner: `vercel` ausführen
5. Domain in Vercel-Dashboard verbinden

### Option 3: GitHub Pages (Kostenlos)
**Vorteile:**
- ✅ Kostenlos
- ✅ Integration mit Git

**Schritte:**
1. Erstelle GitHub Repository
2. Lade Dateien hoch
3. Aktiviere GitHub Pages in Repository Settings
4. Domain in GitHub Pages Settings verbinden

### Option 4: Professionelles Hosting (Deutsche Anbieter)
**Empfohlene Anbieter:**
- **IONOS**: Ab 1€/Monat
- **Strato**: Ab 2,50€/Monat
- **Hetzner**: Ab 2,50€/Monat
- **All-Inkl**: Ab 1€/Monat

**Vorteile:**
- ✅ Deutsche Server
- ✅ Support auf Deutsch
- ✅ Oft Domain + Hosting im Paket

## Deployment-Schritte (Netlify - Einfachste Methode)

### 1. Website vorbereiten
Alle Dateien sind bereits im Projektordner:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ i18n.js
- ✅ Logo.jpeg

### 2. Netlify Deployment
1. Gehe zu https://app.netlify.com/drop
2. Ziehe den gesamten Projektordner in den Browser
3. Warte auf Upload und Deployment
4. Du erhältst eine URL wie: `random-name-12345.netlify.app`

### 3. Custom Domain verbinden
1. In Netlify Dashboard → Site settings → Domain management
2. Klicke auf "Add custom domain"
3. Gib ein: `VentureHubMBS.de`
4. Netlify zeigt dir die DNS-Einstellungen
5. Gehe zu deinem Domain-Provider und ändere die DNS-Einstellungen:
   - **A Record**: `@` → IP von Netlify
   - **CNAME**: `www` → `your-site.netlify.app`

### 4. SSL-Zertifikat
- Netlify stellt automatisch ein kostenloses SSL-Zertifikat bereit
- Nach DNS-Propagierung (24-48h) ist HTTPS aktiv

## Alternative: Domain + Hosting bei einem Anbieter

### Beispiel: IONOS
1. Gehe zu https://www.ionos.de
2. Wähle "Webhosting" + Domain Paket
3. Registriere `VentureHubMBS.de`
4. Lade Dateien via FTP hoch:
   - FTP-Server: `ftp.venturehubmbs.de`
   - Benutzername/Passwort von IONOS
   - Upload in `htdocs` oder `public_html` Ordner

## Wichtige Dateien für Deployment

Stelle sicher, dass alle diese Dateien hochgeladen werden:
```
/
├── index.html
├── styles.css
├── script.js
├── i18n.js
├── Logo.jpeg
└── README.md (optional)
```

## Nach dem Deployment prüfen

1. ✅ Website lädt korrekt
2. ✅ Logo wird angezeigt
3. ✅ CSS Styles funktionieren
4. ✅ JavaScript funktioniert
5. ✅ Sprachumschaltung funktioniert
6. ✅ Alle Links funktionieren
7. ✅ Mobile Ansicht funktioniert

## Support

Bei Problemen:
- Netlify Support: https://www.netlify.com/support/
- Domain-Provider Support kontaktieren
