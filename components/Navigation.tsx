/* eslint-disable @next/next/no-img-element */

// import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import { navigationList } from "utils/navigationList";
import CartBar from "./Cart/CartBar";
import Brand from "svg/brand.svg";

interface DisclosureProps {
    open: boolean;
}

export const Navigation = () => {
    return (
        <Disclosure as="nav" className="bg-white ">
            {({ open }: DisclosureProps) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-between sm:items-stretch ">
                                <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                                    <Disclosure.Button className="flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="flex items-center h-full space-x-4">
                                        {navigationList.map((item) => (
                                            <ActiveLink
                                                key={item.name}
                                                href={item.href}
                                                customClassName={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                                                activeClassName="btn-primary--active"
                                            >
                                                <a> {item.name}</a>
                                            </ActiveLink>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ">
                                    <Link href="/">
                                        <a className="h-16 flex items-center  ">
                                            <Brand height="60" />

                                            <span className="hidden lg:block lg:  leading-8 font-bold text-black pl-3">
                                                DEMO SHOP
                                            </span>
                                        </a>
                                    </Link>
                                </div>

                                <div className="flex item items-center">
                                    <button type="button">zaloguj</button>
                                </div>
                                <div className="flex item items-center">
                                    <CartBar />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigationList.map((item) => (
                                <ActiveLink
                                    key={item.name}
                                    href={item.href}
                                    customClassName={`cursor-pointer  block px-3 py-2 rounded-md text-base font-medium`}
                                    activeClassName="btn-primary--active"
                                >
                                    <a>{item.name}</a>
                                </ActiveLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
