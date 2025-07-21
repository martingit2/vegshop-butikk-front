# Vegshop - En Fullstack E-handels Frontend

Dette prosjektet er en funksjonell, men uferdig, frontend for en moderne e-handelsplattform. Det ble startet som et selvstudium for å utforske og implementere en komplett handleopplevelse ved hjelp av Next.js og en "headless" API-tilnærming.

**Prosjektstatus:** Prosjektet ble satt på pause for å prioritere skolearbeid. Grunnleggende funksjonalitet som produktvisning, filtrering og en komplett handlekurv er implementert.

---

## Om Prosjektet

Målet med "Vegshop" var å bygge en rask og responsiv nettbutikk-frontend. Arkitekturen er basert på å hente data dynamisk fra et separat backend-API, noe som er en vanlig tilnærming for moderne webapplikasjoner.

### Implementerte Funksjoner

*   **Dynamisk Produkthenting:** Henter produkter, kategorier, billboards, farger og størrelser fra et eksternt API.
*   **Produktkatalog:** Viser produkter på en hovedside og på dedikerte kategorisider.
*   **Filtrering:** Lar brukere filtrere produkter basert på farge og størrelse.
*   **Produktdetaljside:** Egne sider for hvert produkt med bildegalleri og informasjon.
*   **Komplett Handlekurv:**
    *   Global state management med **Zustand**.
    *   Legg til, fjern og juster antall varer.
    *   Lokal lagring (`localStorage`) slik at handlekurven vedvarer mellom besøk.
*   **Utsjekk-flyt:** Enkel oppsummeringsside med en (planlagt) integrasjon mot en betalingsløsning som Stripe.
*   **Responsivt Design:** Bygget med mobil-først-prinsipper og tilpasser seg ulike skjermstørrelser.

### Teknologistack

*   **Rammeverk:** Next.js (App Router)
*   **Språk:** TypeScript
*   **Styling:** Tailwind CSS
*   **State Management:** Zustand
*   **UI-komponenter:** Headless UI
*   **Datakommunikasjon:** Fetch API, Axios (for utsjekk)

---

## Komme i Gang

Prosjektet krever et fungerende backend-API for å hente data. URL-en til dette API-et må settes i en miljøvariabel.

### Forutsetninger
*   Node.js (v18+)
*   Et kjørende backend-API som matcher datastrukturene i `types.ts`.

### Installasjon
1.  **Klon repositoriet:**
    ```bash
    git clone https://github.com/dittnavn/vegshop-butikk-front.git
    cd vegshop-butikk-front
    ```
2.  **Installer avhengigheter:**
    ```bash
    npm install
    ```
3.  **Sett opp miljøvariabler:**
    Opprett en `.env.local`-fil i rotmappen og legg til URL-en til ditt backend-API:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3001/api/your-store-id
    ```
4.  **Start utviklingsserveren:**
    ```bash
    npm run dev
    ```
Åpne [http://localhost:3000](http://localhost:3000) i nettleseren din.