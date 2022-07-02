import Link from "next/link";
// import ReactMarkdown from "react-markdown";
import { MDXRemote } from "next-mdx-remote";
import { MarkdownResult } from "utils/types";

const Markdown = ({ children }: { children: MarkdownResult }) => {
    return (
        <MDXRemote
            {...children}
            components={{
                a: ({ href, ...props }) => {
                    if (typeof href === "undefined") {
                        return <a {...props}></a>;
                    }

                    return (
                        <Link href={href}>
                            <a {...props}></a>
                        </Link>
                    );
                },
            }}
        />
    );
};

export default Markdown;
