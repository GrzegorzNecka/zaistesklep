import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CurrentPaths } from "./types";
import { Home } from "./Home";
import { Page } from "./Page";
import setQueryPaths from "./services/setQueryPaths";

const Breadcrumbs = () => {
    const router = useRouter();
    const [nastedPaths, setNastedPaths] = useState<string>("");

    //------

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        setNastedPaths("");

        if (router.route.endsWith("]")) {
            setNastedPaths(router.route);
        }
    }, [router.route, router.isReady]);

    //------

    const [currentPaths, setCurrentPaths] = useState<CurrentPaths[]>([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        const paths = setQueryPaths(router.asPath, nastedPaths);

        if (!paths) {
            return;
        }

        setCurrentPaths(paths);
    }, [router, nastedPaths]);

    //------

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
