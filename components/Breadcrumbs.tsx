import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Separator = () => {
    return (
        <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-4 h-5 text-gray-300"
        >
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
    );
};

const Breadcrumbs = () => {
    const router = useRouter();

    const [currentPaths, setCurrentPaths] = useState<string[]>([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        console.log("🚀 ~ file: Breadcrumbs.tsx ~ line 23 ~ Breadcrumbs ~ router", router);
        const paths = router.asPath
            .split("/")
            .filter((path) => path !== "")
            .map((path) => path.charAt(0).toUpperCase() + path.substring(1).toLowerCase());

        if (!paths) {
            return;
        }

        setCurrentPaths(paths);
    }, [router]);

    return (
        <div>
            {console.log("render breadcrumb")}

            <nav aria-label="Breadcrumb">
                <ol
                    role="list"
                    className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    {currentPaths.length ? (
                        <li>
                            <div className="flex items-center">
                                <Link href={`${process.env.NEXT_PUBLIC_HOST}`}>
                                    <a className="mr-2 text-sm font-medium text-gray-900">Home</a>
                                </Link>
                                <Separator />
                            </div>
                        </li>
                    ) : (
                        <li>
                            <div className="flex items-center">
                                <span className="mr-2 text-sm font-medium text-gray-900">Home</span>
                            </div>
                        </li>
                    )}
                    {currentPaths.length
                        ? currentPaths.map((path, index, arr) => {
                              console.log("🚀 ~ file: Breadcrumbs.tsx ~ line 70 ~ ?currentPaths.map ~  index", index);
                              if (index + 1 === arr.length) {
                                  return (
                                      <li key={path}>
                                          <div className="flex items-center">
                                              <span className="mr-2 text-sm font-medium text-gray-900">{path}</span>
                                          </div>
                                      </li>
                                  );
                              }

                              return (
                                  <li key={path}>
                                      <div className="flex items-center">
                                          <Link href={`${process.env.NEXT_PUBLIC_HOST}/${path.toLowerCase()}`}>
                                              <a className="mr-2 text-sm font-medium text-gray-900">{path}</a>
                                          </Link>
                                          <Separator />
                                      </div>
                                  </li>
                              );
                          })
                        : ""}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
