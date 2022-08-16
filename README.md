## Init

-   node:
-   npm:
-   react: -.4
-   yarn:
-   next:

## do zrobienia

-   koszyk graphQl - zadanie dokończ!!!
    -   stworzenie order z api/checkout w graphCMS, a kiedy ktośkliknie zapłać to w graphCMS powstaje zamówienie ze statusem - status sięzmienia potem
        lub przekaż koszyk, a potem przypisz do niego order
-   api z cashem koszyka zmień poprawne restowe api czyli ustaw metodę put
-   paginacja - dokończ
-   włącz rating
-   cena z serwera
-   strona z produktem -> dodaj do koszyka
-   wyszukiwarka produktów
-   dodaj ulubione produkty
-   globalne style kolory i buttony
-   dodaj memo do komponentów tj. bradcrums / home , page ...
-   strona 2 języczna
-   stwórz kategorie produktów

## [fajny sklep](https://shopmrbeast.com/shop/credit-card-hoodie)

-   obsługa zapytania do serwera:

Jak zrobisz zapytanie do api to dostaniesz odpowiedź w postaci koszyka
Ale serwer musi wiedzieć kim Ty jesteś
Aby wiedział, możesz dołączyć nagłówek z jakimś tokenem lub ciastko
Zazwyczaj działa to tak:

-   Sprawdzasz czy w localstorage jest token koszyka, sprawdzasz czy jest poprawny etc

2. Jeśli jest, to wysyłasz do api zapytanie żeby api zwróciło Ci koszyk (token dołączasz jako nagłówek lub ciastko lub po prostu w treści zapytania)
3. Jeśli nie, to wysyłasz do api zapytanie aby api stworzyło nowy koszyk i zwróciło Ci token, który gdzieś sobie zapiszesz

Nie musi być to zewnętrzny serwis, może być to pages/api
Tak naprawdę żeby to symulować nie musisz mieć nawet bazy danych
Możesz wszystkie koszyki trzymać w pamięci w API

## demo blog

[ActiveLink](https://zaiste.net/programming/reactjs/howtos/create-activelink-nextjs/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Plugins

### Markdown

### Tailwind:

[tailwindcss/aspect-ratio]()
[require("@tailwindcss/typography]()
[headless UI](https://headlessui.com/)
[hero icons](https://heroicons.com/)

### GraphQl:

[graphql-code-generator](https://www.graphql-code-generator.com/docs/getting-started/installation)
uruchamia generator: `yarn generate-graphql`

### Forms:

[tailwind-forms](https://github.com/tailwindlabs/tailwindcss-forms)
[rhf](https://react-hook-form.com/get-started#IntegratingControlledInputs)
[yup](https://github.com/jquense/yup)

### Stripe

`stripe listen --forward-to localhost:3000/api/stripe-webhook`
`stripe trigger checkout.session.completed`

[cli](https://stripe.com/docs/stripe-cli)
[cli-doc](https://stripe.com/docs/cli/trigger#trigger-event-checkout_session_completed)

https://szkola.zaisteprogramuj.pl/courses/1668919/lectures/39572535
06
