import { Writable } from 'stream';

declare class ConcatStream extends Writable {}

declare module ConcatStream {
  export interface Options {
    // Supports "string", "buffer", "array", "uint8array" or "object".
    encoding?: string
  }
}

declare var concatStream: {
  (cb: (data: any) => any): ConcatStream;
  new (cb: (data: any) => any): ConcatStream;
  (opts: ConcatStream.Options, cb: (data: any) => any): ConcatStream;
  new (opts: ConcatStream.Options, cb: (data: any) => any): ConcatStream;
};

export = concatStream;
