# Natalia Zwissler Keramik – Astro Website

## Setup

```bash
npm install
npm run dev
```

## Deployment (Vercel / Netlify)

1. GitHub Repo erstellen
2. Diesen Ordner hochladen
3. Mit Vercel oder Netlify verbinden → automatisch deployed

## CMS für Kunden (Decap CMS)

Nach dem Deployment erreichbar unter:
`https://deinedomain.ch/admin`

Der Kunde kann damit bearbeiten:
- Hero Titel & Untertitel
- Intro Text
- Atelier Adresse & Öffnungszeiten
- Kategorien (Bilder, Titel)

## Struktur

```
src/
  components/    → Nav, Hero, KategorienGrid, Footer
  layouts/       → BaseLayout (HTML head, fonts)
  pages/         → index.astro (Hauptseite)
  content/       → JSON Dateien (vom CMS bearbeitet)
public/
  admin/         → Decap CMS Interface
```
