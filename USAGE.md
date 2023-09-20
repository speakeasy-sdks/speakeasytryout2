<!-- Start SDK Example Usage -->


```typescript
import { Petstore } from "petstore";
import { CreatePetsResponse } from "petstore/dist/sdk/models/operations";
import { PetType } from "petstore/dist/sdk/models/shared";

const sdk = new Petstore({
  security: {
    bearerAuth: "",
  },
});

sdk.pets.createPets({
  id: 1234,
  name: "Fido",
  type: PetType.Cat,
}).then((res: CreatePetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->