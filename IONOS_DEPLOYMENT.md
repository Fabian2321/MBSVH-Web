# IONOS Deployment Anleitung - mbs-venture-hub.de

## Vorbereitung ✅

Alle Dateien sind bereit für das Deployment auf IONOS.

## Dateien die hochgeladen werden müssen:

```
/
├── index.html          ✅ Haupt-HTML-Datei
├── styles.css          ✅ Styling
├── script.js           ✅ JavaScript
├── i18n.js            ✅ Übersetzungen
├── Logo.jpeg          ✅ Logo
├── .htaccess          ✅ Server-Konfiguration
└── README.md          (optional)
```

## Schritt-für-Schritt Anleitung

### 1. IONOS Account einrichten

1. Gehe zu https://www.ionos.de
2. Melde dich in deinem Account an
3. Gehe zu "Websites & Shops" → "Webhosting"

### 2. Domain aktivieren

1. Stelle sicher, dass `mbs-venture-hub.de` in deinem Account aktiviert ist
2. SSL-Zertifikat sollte automatisch aktiviert werden (Wildcard-Zertifikat)

### 3. FTP-Zugangsdaten erhalten

1. In IONOS Dashboard → "Websites & Shops" → "Webhosting"
2. Klicke auf dein Hosting-Paket
3. Gehe zu "FTP" → "FTP-Zugang"
4. Notiere dir:
   - **FTP-Server**: `ftp.mbs-venture-hub.de` (oder die angegebene Adresse)
   - **Benutzername**: (wird angezeigt)
   - **Passwort**: (wird angezeigt oder du setzt es neu)

### 4. Dateien per FTP hochladen

#### Option A: Mit FileZilla (kostenlos)

1. **FileZilla herunterladen**: https://filezilla-project.org/
2. **FileZilla öffnen** und oben eingeben:
   - Host: `ftp.mbs-venture-hub.de` (oder die IONOS-Adresse)
   - Benutzername: (dein FTP-User)
   - Passwort: (dein FTP-Passwort)
   - Port: `21`
3. **Verbinden** klicken
4. **Rechts** (Server): Navigiere zu `htdocs` oder `httpdocs` Ordner
5. **Links** (Lokal): Navigiere zu deinem Projektordner
6. **Alle Dateien** markieren und nach rechts (Server) ziehen:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `i18n.js`
   - `Logo.jpeg`
   - `.htaccess`

#### Option B: Mit IONOS File Manager (im Browser)

1. In IONOS Dashboard → "Websites & Shops" → "Webhosting"
2. Klicke auf "File Manager"
3. Öffne den `htdocs` oder `httpdocs` Ordner
4. Lade alle Dateien hoch (Drag & Drop)

### 5. Dateien-Struktur auf dem Server

Die Dateien sollten so aussehen:
```
htdocs/
├── index.html
├── styles.css
├── script.js
├── i18n.js
├── logo.png
└── .htaccess
```

### 6. Website testen

1. Öffne im Browser: `https://mbs-venture-hub.de`
2. Prüfe:
   - ✅ Website lädt korrekt
   - ✅ Logo wird angezeigt
   - ✅ CSS Styles funktionieren
   - ✅ JavaScript funktioniert
   - ✅ Sprachumschaltung funktioniert
   - ✅ HTTPS ist aktiv (grünes Schloss)
   - ✅ Mobile Ansicht funktioniert

### 7. SSL-Zertifikat prüfen

Das SSL-Wildcard-Zertifikat sollte automatisch aktiviert sein. Falls nicht:
1. IONOS Dashboard → "Domains & SSL"
2. SSL-Zertifikat aktivieren
3. Warte 24-48 Stunden auf Aktivierung

## Wichtige Hinweise

### .htaccess Datei
- Die `.htaccess` Datei ist wichtig für:
  - HTTPS Redirect
  - Browser Caching
  - GZIP Kompression
  - Security Headers

### Datei-Berechtigungen
- HTML, CSS, JS Dateien: `644` (Standard)
- .htaccess: `644` (Standard)

### Falls die Website nicht lädt

1. **Prüfe Datei-Namen**: `index.html` muss genau so heißen (kleingeschrieben)
2. **Prüfe Ordner**: Dateien müssen im `htdocs` oder `httpdocs` Ordner sein
3. **Prüfe .htaccess**: Falls Probleme, benenne sie temporär um zu `.htaccess.bak`
4. **Cache leeren**: Browser-Cache leeren (Strg+F5)

## Support

Bei Problemen:
- IONOS Support: https://www.ionos.de/help/
- IONOS Support-Hotline: 0800 1865 000 (kostenlos)

## Nach dem Deployment

✅ Website ist online unter: `https://mbs-venture-hub.de`
✅ SSL-Zertifikat ist aktiv
✅ Alle Funktionen sollten funktionieren

Viel Erfolg! 🚀
