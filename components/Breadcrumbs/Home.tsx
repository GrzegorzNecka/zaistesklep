import Link from "next/link";
import { Separator } from "./Separator";
import { CurrentPathsProps } from "./types";

export const Home = ({ currentPaths }: CurrentPathsProps) => {
    return (
        <>
            {currentPaths.length ? (
                <li>
                    <div className="flex items-center">
                        <Link href={`/`}>
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
        </>
    );
};
