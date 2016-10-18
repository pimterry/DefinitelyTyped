// Type definitions for request-promise-native v1.0.3
// Project: https://github.com/request/request-promise-native
// Definitions by: Gustavo Henke <https://github.com/gustavohenke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../request/request.d.ts" />

declare module 'request-promise-native' {
    import request = require('request');
    import http = require('http');

    namespace requestPromise {
        interface RequestPromise extends request.Request, Promise<http.IncomingMessage> {
            then<TResult>(onfulfilled?: (value: http.IncomingMessage) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
            then<TResult>(onfulfilled?: (value: http.IncomingMessage) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>;
            catch<TResult>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
            catch<TResult>(onrejected?: (reason: any) => TResult): Promise<TResult>;
            promise(): Promise<http.IncomingMessage>;
            cancel(): void;
        }

        interface RequestPromiseOptions extends request.CoreOptions {
            simple?: boolean;
            transform?: (body: any, response: http.IncomingMessage, resolveWithFullResponse?: boolean) => any;
            resolveWithFullResponse?: boolean;
        }

        export type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
        export type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
        export type Options = OptionsWithUri | OptionsWithUrl;
    }

    var requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
	export = requestPromise;
}
