/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Pets } from "./pets";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * API mocking server for demo purposes
     */
    "https://src8wr32cg.api.quickmocker.com",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.9.4";
    genVersion = "2.283.1";
    userAgent = "speakeasy-sdk/typescript 0.9.4 2.283.1 1.0.0 petstore";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Petstore: This API stores data about available pets
 *
 * @remarks
 * The API enables users to view detailed information about a specific pet store and its available pets. The API can be used by pet owners, pet adoption agencies, and anyone looking for information about pets in a particular area.
 */
export class Petstore {
    /**
     * the pet grouping
     */
    public pets: Pets;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;

        if (!serverURL) {
            const serverIdx = props?.serverIdx ?? 0;
            if (serverIdx < 0 || serverIdx >= ServerList.length) {
                throw new Error(`Invalid server index ${serverIdx}`);
            }
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.pets = new Pets(this.sdkConfiguration);
    }
}
