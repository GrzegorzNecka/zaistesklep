# Checkout

## update checkout

```
mutation updateItemCheckout($data: CheckoutItemCreateInput!) {
    createCheckoutItem(data: $data) {
        id
    }
}
```

```
{
  "data": {
    "quantity": 1,
    "total": 1,
    "product": {
      "connect": {
        "slug": "mug"
      }
    },
    "checkout": {
      "connect": {
        "email": "strzypior@gmail.com"
      }
    }
  }
}
```

## get checkout

```query GetCheckoutByEmail($email: String!) {
    checkout(where: { email: $email }) {
        ...checkoutItemsContent
    }
}
```

```
{
  "email": "strzypior@gmail.com"
}
```
