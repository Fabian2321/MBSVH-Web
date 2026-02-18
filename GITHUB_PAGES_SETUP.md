# GitHub Pages Setup für mbs-venture-hub.de

## 🌐 Website-URLs

Nach dem Setup ist deine Website erreichbar unter:
- **https://mbs-venture-hub.de** (Haupt-URL)
- **https://www.mbs-venture-hub.de** (mit www)
- **https://fabian2321.github.io/MBSVH-Web** (GitHub Pages URL, funktioniert immer)

## Schritt 1: GitHub Pages aktivieren

1. Gehe zu: https://github.com/Fabian2321/MBSVH-Web/settings/pages
2. Unter **Source**:
   - Wähle **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
   - Klicke auf **Save**
3. Warte 1-2 Minuten
4. ✅ Website ist jetzt unter `https://fabian2321.github.io/MBSVH-Web` erreichbar

## Schritt 2: Custom Domain hinzufügen

1. Im gleichen **Pages**-Bereich:
   - Trage unter **Custom domain** ein: `mbs-venture-hub.de`
   - Aktiviere **Enforce HTTPS** (wird nach ein paar Minuten verfügbar)
   - Klicke auf **Save**

2. GitHub erstellt automatisch eine `CNAME` Datei in deinem Repository

## Schritt 3: DNS bei IONOS konfigurieren

Nachdem du die Domain bei IONOS gekauft hast:

1. Logge dich in dein IONOS-Kundencenter ein
2. Gehe zu **Domains** → **DNS-Verwaltung** → `mbs-venture-hub.de`
3. Erstelle/ändere folgende DNS-Records:

### Option A: CNAME (einfacher, empfohlen)
```
Typ: CNAME
Name: @ (oder leer für Root-Domain)
Wert: fabian2321.github.io
TTL: 3600
```

### Option B: A-Records (IPv4)
```
Typ: A
Name: @ (oder leer)
Wert: 185.199.108.153
TTL: 3600

Typ: A
Name: @
Wert: 185.199.109.153
TTL: 3600

Typ: A
Name: @
Wert: 185.199.110.153
TTL: 3600

Typ: A
Name: @
Wert: 185.199.111.153
TTL: 3600
```

### Für www-Subdomain:
```
Typ: CNAME
Name: www
Wert: fabian2321.github.io
TTL: 3600
```

## Schritt 4: Warten und Testen

1. **DNS-Propagation:** Kann 5 Minuten bis 48 Stunden dauern (meist 15-30 Minuten)
2. **Teste die Domain:**
   - `https://mbs-venture-hub.de`
   - `https://www.mbs-venture-hub.de`
3. **DNS-Check:** https://dnschecker.org/#A/mbs-venture-hub.de

## Kosten

- **Domain:** 0,08€/Monat (12 Monate), danach 1,30€/Monat
- **GitHub Pages:** Kostenlos (für öffentliche Repositories)
- **SSL:** Kostenlos (von GitHub)

**Gesamt:** ~1€/Jahr für die Domain!

## Troubleshooting

### Website lädt nicht:
- Prüfe DNS-Propagation: https://dnschecker.org/#A/mbs-venture-hub.de
- Warte bis zu 48 Stunden bei DNS-Änderungen
- Prüfe, ob GitHub Pages aktiviert ist (grüner Haken in Settings → Pages)

### SSL-Fehler:
- Aktiviere "Enforce HTTPS" in GitHub Pages Settings
- Warte 5-10 Minuten nach DNS-Propagation

### Domain zeigt nicht auf GitHub Pages:
- Prüfe die CNAME-Datei im Repository (sollte `mbs-venture-hub.de` enthalten)
- Prüfe DNS-Records bei IONOS
- Verwende `dig mbs-venture-hub.de` im Terminal
