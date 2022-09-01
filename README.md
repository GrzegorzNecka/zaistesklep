## Init

-   node:
-   npm:
-   react: -.4
-   yarn:
-   next:

## Mutacje graphQl

1. flow systemu płatności

## do zrobienia checkout - sugestia z lekcji:

ma być robiony w momencie kiedy idzie zapytanie do api route, które tworzy płątności w Stripe

-   wtedy przy okazji tworzę checkout z poziomu API do API
-   checkout musi być połączony z użytkownikiem , który jest uwierzytekniony
-   relacja użytkownik < -- > checkout

## do zrobienia checkout na graphCms -

-   zamiast local storage mutuj na hygraphics
-   potrzebujesz indywidualnego id w związku z sesją

## do zrobienia stripe:

1. wyślij testowe zapytanie checkout do graphQl z fakowej strony checkout na next.js - obczaj jak to działa

## do zrobienia

-   zamieńzwykły fetche na reactQuery
-   zapisywanie w stanu koszyka nie działa - dpoiero po 1 odświerzeniu działa !
-   podziel query na fragmenty
-   koszyk graphQl - zadanie dokończ!!!
-   api z cashem koszyka zmień poprawne restowe api czyli ustaw metodę put !!!!!
-   paginacja - dokończ
-   włącz rating
-   dodaj memo do komponentów tj. bradcrums / home , page ...
-   usuń zbędne useeffecty

## do zrobienia po kursie

-   wyszukiwarka produktów
-   dodaj ulubione produkty
-   globalne style kolory i buttony
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

`stripe listen --forward-to 83a0-176-111-121-143.ngrok.io/api/stripe-webhook`
`stripe listen --forward-to localhost:3000/api/stripe-webhook`
`stripe trigger checkout.session.completed`

[cli](https://stripe.com/docs/stripe-cli)
[cli-doc](https://stripe.com/docs/cli/trigger#trigger-event-checkout_session_completed)

https://dashboard.stripe.com/test/webhooks
https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local
https://stripe.com/docs/webhooks
https://labs.fullstak.pl/courses/take/fullstack-react-w-next-js/lessons/23302817-obsluga-webhooks-w-stripe

[ngrok](https://dashboard.ngrok.com/get-started/setup)

### ReactQuery

[optimistuc update](https://codesandbox.io/s/withered-currying-4lhjx8?file=/pages/api/data.js:55-566)
[optimistuc update yt](https://www.youtube.com/watch?v=ZbhGXD8KpQ8)
[mutaion example ](https://daily-dev-tips.com/posts/react-query-and-optimistic-updates/)

### cypress

[docs](https://docs.cypress.io/guides/end-to-end-testing/testing-your-app#Step-2-Visit-your-server)

`yarn cypress open`
