import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CurrentPaths } from "./types";
import { Home } from "./Home";
import { Page } from "./Page";

const Breadcrumbs = () => {
    const router = useRouter();
    const [nastedPaths, setNastedPaths] = useState<string>("");

    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        setNastedPaths("");

        if (router.route.endsWith("]")) {
            setNastedPaths(router.route);
        }
    }, [router.route, router.isReady]);

    const [currentPaths, setCurrentPaths] = useState<CurrentPaths[]>([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        let prevPath = "";

        const paths = router.asPath
            .split("/")
            .filter((path) => path !== "")
            .map((path, index) => {
                const title = path.charAt(0).toUpperCase() + path.substring(1).toLowerCase();
                const url = `/${path}`;

                switch (nastedPaths) {
                    case "/products/[id]":
                        if (index === 0) {
                            return { url: `/products/1`, title };
                        }

                        if (index === 1) {
                            return { url: ``, title: `Site ${title}` };
                        }

                    case "/product/[slug]":
                        if (index === 0) {
                            return { url: `/products/1`, title: "Products" };
                        }

                        if (index === 1) {
                            return { url: ``, title: `product: ${title}` };
                        }

                    default:
                        if (index === 0) {
                            prevPath = path;
                            return { url, title };
                        }

                        if (index === 1) {
                            return { url: `/${prevPath}/${path}`, title };
                        }
                }
                // typescript krzyczał - że zwraca undefined
                return { url, title };
            });

        if (!paths) {
            return;
        }

        setCurrentPaths(paths);
    }, [router, nastedPaths]);

    return (
        <div>
            <nav aria-label="Breadcrumb">
                <ol
                    role="list"
                    className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    <Home currentPaths={currentPaths} />
                    <Page currentPaths={currentPaths} />
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
