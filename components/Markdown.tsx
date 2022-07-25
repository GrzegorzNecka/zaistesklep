import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { MarkdownResult } from "types";

const Markdown = ({ children }: { children: MarkdownResult }) => {
    return (
        <MDXRemote
            {...children}
            components={{
                a: ({ href, ...props }) => {
                    if (typeof href === "undefined") {
                        return <a {...props}></a>;
                    }

                    //process.env.NEXT_PUBLIC_HOST === http://localhost:3000
                    if (process.env.NEXT_PUBLIC_HOST && href.startsWith(process.env.NEXT_PUBLIC_HOST)) {
                        return (
                            <Link href={href}>
                                <a {...props}></a>
                            </Link>
                        );
                    }

                    return <a rel="noopener noreferrer" href={href} {...props}></a>;
                },
            }}
        />
    );
};

export default Markdown;
