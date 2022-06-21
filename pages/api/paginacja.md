# Zadanie 1

https://github.com/TanStack/query/blob/main/examples/pagination/pages/index.js

https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/pages/api/user/%5Bid%5D.js

https://www.youtube.com/watch?v=xoPguAXJmiE

---

Korzystając z endpointa <https://naszsklep-api.vercel.app/api/products> stwórz komponent paginacji.

Dane pobieraj po stronie klienta (CSR -> useQuery).

Kliknięcie w link prowadzący do innej strony powinno spowodować pobranie i wyrenderowanie danych dla tej strony.

Przyjmij na razie, że jest tylko 10 stron po 25 produktów na każdej.

Endpoint przyjmuje dwa parametry: take i offset, które pozwalają na pobranie kolejnych produktów.

Przykładowo, aby pobrać produkty dla pierwszej strony wykonamy zapytanie do <https://naszsklep-api.vercel.app/api/products?take=25&offset=0> (bierzemy 25 produktów nie pomijając żadnego).

Analogicznie, aby pobrać produkty dla trzeciej strony wykonamy zapytanie do <https://naszsklep-api.vercel.app/api/products?take=25&offset=50> (bierzemy 25 produktów i pomijamy 50).

Możesz skorzystać z kodu dołączonego poniżej, aby ułatwić sobie ostylowanie.

# Zadanie 2

Korzystając z endpointa <https://naszsklep-api.vercel.app/api/products> stwórz komponent paginacji.

Dane pobieraj w czasie budowania aplikacji (SSG -> getStaticProps, getStaticPaths). Musisz wziąć pod uwagę, że teraz numer strony musi znaleźć się w adresie oraz być przekazywany jako parametr.

Podpowiedź: Teraz strona produktów będzie prawdopodobnie zagnieżdżona w dodatkowym folderze.

Kliknięcie w link prowadzący do innej strony powinno spowodować pobranie i wyrenderowanie danych dla tej strony.

Przyjmij na razie, że jest tylko 10 stron po 25 produktów na każdej.

Endpoint przyjmuje dwa parametry: take i offset, które pozwalają na pobranie kolejnych produktów.

Przykładowo, aby pobrać produkty dla pierwszej strony wykonamy zapytanie do <https://naszsklep-api.vercel.app/api/products?take=25&offset=0> (bierzemy 25 produktów nie pomijając żadnego).

Analogicznie, aby pobrać produkty dla trzeciej strony wykonamy zapytanie do <https://naszsklep-api.vercel.app/api/products?take=25&offset=50> (bierzemy 25 produktów i pomijamy 50).

Możesz skorzystać z kodu dołączonego poniżej, aby ułatwić sobie ostylowanie.

# Zadanie 3

Korzystając z endpointa <https://naszsklep-api.vercel.app/api/products> stwórz komponent paginacji.

Dane pobieraj w czasie budowania aplikacji (SSG -> getStaticProps, getStaticPaths). Musisz wziąć pod uwagę, że teraz numer strony musi znaleźć się w adresie oraz być przekazywany jako parametr.

Podpowiedź: Teraz strona produktów będzie prawdopodobnie zagnieżdżona w dodatkowym folderze.

Kliknięcie w link prowadzący do innej strony powinno spowodować pobranie i wyrenderowanie danych dla tej strony.

Produktów jest jednak bardzo dużo (ponad 4000 tys.). Nie renderuj wszystkich w trakcie budowania strony!

Podpowiedź: Nie zwracaj wszystkich ścieżek z getStaticPaths, zwróć tylko kilka pierwszych. Przyda Ci się też specjalny parametr fallback: 'blocking'

Endpoint przyjmuje dwa parametry: take i offset, które pozwalają na pobranie kolejnych produktów.

Przykładowo, aby pobrać produkty dla pierwszej strony wykonamy zapytanie do <https://naszsklep-api.vercel.app/api/products?take=25&offset=0> (bierzemy 25 produktów nie pomijając żadnego).

Analogicznie, aby pobrać produkty dla trzeciej strony wykonamy zapytanie do <https://naszsklep-api.vercel.app/api/products?take=25&offset=50> (bierzemy 25 produktów i pomijamy 50).

Możesz skorzystać z kodu dołączonego poniżej, aby ułatwić sobie ostylowanie.
