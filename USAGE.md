<!-- Start SDK Example Usage -->


```typescript
import { Petstore } from "petstore";
import { PetType } from "petstore/dist/sdk/models/shared";

(async() => {
  const sdk = new Petstore({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.pets.createPets({
    id: 1234,
    name: "Fido",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->