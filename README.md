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
import { PetType } from "petstore/dist/sdk/models/shared";

(async () => {
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [.pets](docs/sdks/pets/README.md)

* [createPets](docs/sdks/pets/README.md#createpets) - createPets
* [listPets](docs/sdks/pets/README.md#listpets) - listPets
* [showPetById](docs/sdks/pets/README.md#showpetbyid) - showPetById
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://src8wr32cg.api.quickmocker.com` | None |

For example:

```typescript
import { Petstore } from "petstore";
import { PetType } from "petstore/dist/sdk/models/shared";

(async () => {
    const sdk = new Petstore({
        serverIdx: 0,
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


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Petstore } from "petstore";
import { PetType } from "petstore/dist/sdk/models/shared";

(async () => {
    const sdk = new Petstore({
        serverURL: "https://src8wr32cg.api.quickmocker.com",
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
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from petstore import Petstore;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new Petstore({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->



<!-- Start Authentication -->

# Authentication

## Per-Client Security Schemes

Your SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Petstore } from "petstore";
import { PetType } from "petstore/dist/sdk/models/shared";

(async () => {
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
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
