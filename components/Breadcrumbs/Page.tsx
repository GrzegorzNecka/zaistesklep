import Link from "next/link";
import { Separator } from "./Separator";
import { CurrentPathsProps } from "./types";

export const Page = ({ currentPaths }: CurrentPathsProps) => {
    return (
        <>
            {currentPaths.length
                ? currentPaths.map((path, index, arr) => {
                      if (index + 1 === arr.length) {
                          return (
                              <li key={path.title}>
                                  <div className="flex items-center">
                                      <span className="mr-2 text-sm font-medium text-gray-900">{path.title}</span>
                                  </div>
                              </li>
                          );
                      }

                      return (
                          <li key={path.title}>
                              <div className="flex items-center">
                                  <Link href={path.url}>
                                      <a className="mr-2 text-sm font-medium text-gray-900">{path.title}</a>
                                  </Link>
                                  <Separator />
                              </div>
                          </li>
                      );
                  })
                : ""}
        </>
    );
};
