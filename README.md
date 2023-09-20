# petstore

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/speakeasytryout2.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add petstore
```

### Yarn

```bash
yarn add petstore
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Pets](docs/sdks/pets/README.md)

* [createPets](docs/sdks/pets/README.md#createpets) - createPets
* [listPets](docs/sdks/pets/README.md#listpets) - listPets
* [showPetById](docs/sdks/pets/README.md#showpetbyid) - showPetById
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
