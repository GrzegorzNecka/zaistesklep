/* --- MarkdownResult --- */

import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type MarkdownResult = MDXRemoteSerializeResult<Record<string, unknown>>;

/* --- InferGetStaticPathsType --- */

import type { GetStaticPropsContext } from "next";
import type { ParsedUrlQuery } from "querystring";

export type InferGetStaticPathsType<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>;
}>
    ? R extends ParsedUrlQuery
        ? GetStaticPropsContext<R>
        : never
    : never;
