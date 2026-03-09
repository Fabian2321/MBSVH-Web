# MBS Venture Hub - Website

Professionelle, hochwertige Website für den MBS Venture Hub Club. 

## 🌐 Live Website

**URL**: [mbs-venture-hub.de](https://mbs-venture-hub.de)  
**Hosting**: GitHub Pages (Domain bei IONOS)  
**Setup**: Siehe `GITHUB_PAGES_SETUP.md` 

### QR-Code & Scan-Zähler
- Tracking erfolgt unsichtbar im Hintergrund – auf der Website selbst wird nichts angezeigt.
- **QR-Code immer auf diese URL zeigen lassen:** `https://mbs-venture-hub.de/?ref=qr`
- Auswertung: Im Browser `https://api.countapi.xyz/get/mbsvh/qr-scans` öffnen, dort steht der aktuelle Wert als JSON (`{"value": X}`).

## 🚀 Features

### Design & UX
- **Premium Apple-Design**: Professionelles, hochwertiges Design
- **Glassmorphism**: Moderne transparente Navigation mit Blur-Effekten
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Smooth Animations**: Flüssige Übergänge und Animationen mit cubic-bezier Easing
- **Premium Typografie**: Apple System Fonts (SF Pro) für optimale Lesbarkeit

### Funktionen
- **Zweisprachig (DE/EN)**: Vollständige Übersetzung aller Inhalte
- **Sprachumschaltung**: Einfacher Wechsel zwischen Deutsch und Englisch
- **Smooth Scrolling**: Sanfte Navigation zwischen Sektionen
- **Mobile Navigation**: Hamburger-Menü für mobile Geräte
- **Interaktive Elemente**: Hover-Effekte, Transform-Animationen, Ripple-Effekte
- **Logo Integration**: Logo in Navigation und als Favicon
- **SEO-Optimiert**: Meta-Tags, Open Graph, strukturierte Daten

### Performance
- **Optimiertes Caching**: Browser-Caching für bessere Performance
- **GZIP Kompression**: Reduzierte Dateigrößen
- **Lazy Loading**: Optimiertes Laden von Ressourcen
- **HTTPS Ready**: SSL-Zertifikat Support

## 📁 Projektstruktur

```
MBSVH_Web/
├── index.html              # Haupt-HTML-Datei mit allen Sektionen
├── styles.css              # Premium Styling im Apple-Design
├── script.js               # JavaScript für Interaktivität
├── i18n.js                 # Internationalisierung (DE/EN)
├── Logo.jpeg               # MBSVH Logo
├── .htaccess               # Server-Konfiguration für IONOS
├── README.md               # Diese Datei
├── IONOS_DEPLOYMENT.md     # Deployment-Anleitung für IONOS
├── DEPLOYMENT.md           # Allgemeine Deployment-Informationen
└── DEPLOYMENT_CHECKLIST.md # Checkliste für Deployment
```

## 🎨 Sektionen

Die Website enthält folgende Hauptsektionen:

1. **Hero Section** - Einführung mit Gradient-Hintergrund und Call-to-Action
2. **Ziel des Clubs** - 4 Karten mit Club-Zielen und Ansatz
3. **Struktur der Meetings** - Detaillierte Meeting-Struktur (Tech Deep Dive & Startup Pitches)
4. **Lernziele & Outputs** - 3 Karten mit Lernzielen pro Meeting
5. **Dokumentation & Library** - Microsoft Teams Integration und Plattform-Info
6. **Rollen & Organisation** - Club-Organisation und Verantwortlichkeiten
7. **Kontakt** - E-Mail-Kontakte und Social Media

## 🛠️ Technologien

- **HTML5**: Semantische, strukturierte Markup
- **CSS3**: 
  - CSS Grid & Flexbox für Layouts
  - CSS Custom Properties (Variables)
  - Glassmorphism mit backdrop-filter
  - Advanced Animations & Transitions
- **JavaScript (Vanilla)**: 
  - Keine Frameworks - reines JavaScript
  - Internationalisierung (i18n)
  - Smooth Scrolling
  - Mobile Navigation
- **Apple System Fonts**: SF Pro Display, SF Pro Text
- **Google Fonts**: Inter als Fallback

## 🌍 Internationalisierung

Die Website ist vollständig zweisprachig:

- **Deutsch (DE)**: Standard-Sprache
- **Englisch (EN)**: Vollständige Übersetzung
- **Sprachumschaltung**: Button oben rechts in der Navigation
- **Persistenz**: Sprachauswahl wird im Browser gespeichert

## 📱 Browser-Kompatibilität

- ✅ Chrome (neueste Version)
- ✅ Firefox (neueste Version)
- ✅ Safari (neueste Version)
- ✅ Edge (neueste Version)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## 🚀 Lokale Entwicklung

### HTTP-Server starten

```bash
# Mit Python 3
python3 -m http.server 8000

# Mit Node.js (http-server)
npx http-server

# Mit PHP
php -S localhost:8000
```

Dann öffne `http://localhost:8000` im Browser.

## 📤 Deployment

### IONOS Hosting

Die Website ist für IONOS Hosting optimiert:

1. **Domain**: mbs-venture-hub.de
2. **SSL**: Wildcard-Zertifikat (automatisch)
3. **FTP Upload**: Alle Dateien in `htdocs` Ordner hochladen
4. **.htaccess**: Automatische HTTPS-Weiterleitung und Performance-Optimierung

**Detaillierte Anleitung**: Siehe `IONOS_DEPLOYMENT.md`

### Alternative Hosting-Optionen

- **Netlify**: Kostenlos, einfach per Drag & Drop
- **Vercel**: Kostenlos, sehr schnell
- **GitHub Pages**: Kostenlos mit Git-Integration

## 🎨 Design-System

### Farbpalette

```css
--primary-color: #007AFF      /* Apple Blue */
--secondary-color: #5856D6    /* Purple */
--text-dark: #1D1D1F          /* Dark Gray */
--text-secondary: #86868B     /* Medium Gray */
--bg-primary: #FFFFFF         /* White */
--bg-secondary: #F5F5F7       /* Light Gray */
```

### Spacing

Konsistente Abstände mit CSS Custom Properties:
- `--spacing-xs` bis `--spacing-2xl`

### Border Radius

- `--radius-sm`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 16px
- `--radius-full`: 9999px (für Buttons)

## 📝 Anpassungen

### Farben ändern

Farben können in `styles.css` im `:root`-Bereich angepasst werden:

```css
:root {
    --primary-color: #007AFF;
    --secondary-color: #5856D6;
    /* ... */
}
```

### Inhalte bearbeiten

- **HTML**: Alle Inhalte in `index.html`
- **Übersetzungen**: DE/EN Texte in `i18n.js`
- **Styling**: Design-Anpassungen in `styles.css`

### Logo ändern

1. Ersetze `Logo.jpeg` mit deinem Logo
2. Stelle sicher, dass der Dateiname `Logo.jpeg` bleibt
3. Empfohlene Größe: Mindestens 200x200px für Favicon

## 🔧 Wartung

### Dateien die regelmäßig aktualisiert werden sollten:

- `index.html` - Inhalte
- `i18n.js` - Übersetzungen
- `styles.css` - Design-Anpassungen
- `Logo.jpeg` - Logo-Updates

### Performance-Optimierung

Die `.htaccess` Datei enthält bereits:
- Browser Caching
- GZIP Kompression
- Security Headers
- HTTPS Redirect

## 📧 Kontakt

**E-Mail**:
- fabian.loeffler@munich-business-school.de
- alex.lohner@munich-business-school.de

**Social Media**: Instagram (Link in Kontakt-Sektion)

## 📄 Lizenz

Dieses Projekt wurde für den MBS Venture Hub erstellt.

