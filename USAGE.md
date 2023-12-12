<!-- Start SDK Example Usage [usage] -->
```typescript
import { Petstore } from "petstore";
import { PetType } from "petstore/dist/sdk/models/shared";

async function run() {
    const sdk = new Petstore({
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
        },
    });

    const res = await sdk.pets.createPets({
        id: 1234,
        name: "Fido",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->