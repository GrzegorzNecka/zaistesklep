/* eslint-disable @next/next/no-img-element */

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import { navigationList } from "utils/navigationList";

const profileMenuItems = [
    { name: "Your Profile", href: "/" },
    { name: "Settigs", href: "/" },
    { name: "Sign Out", href: "/" },
];

interface DisclosureProps {
    open: boolean;
}

export const Navigation = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    const isActiveLink = (route: string) => {
        let styleLink = `btn-primary--inactive`;

        if (route === currentRoute) {
            styleLink = `btn-primary--active`;
        }

        return styleLink;
    };

    return (
        <Disclosure as="nav" className="bg-white  shadow">
            {({ open }: DisclosureProps) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <a className=" h-8 flex">
                                            <img
                                                className="w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                                alt=""
                                            />
                                            <span className="hidden lg:block lg: min-w-[140px] leading-8 font-bold text-indigo-500 pl-3">
                                                Zaiste sklep
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigationList.map((item) => (
                                            <ActiveLink
                                                key={item.name}
                                                href={item.href}
                                                style={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                                            >
                                                {item.name}
                                            </ActiveLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {profileMenuItems.map((item) => {
                                                return (
                                                    <Menu.Item key={item.name}>
                                                        <Link href={item.href}>
                                                            <a
                                                                className={
                                                                    "hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                                                                }
                                                            >
                                                                {item.name}
                                                            </a>
                                                        </Link>
                                                    </Menu.Item>
                                                );
                                            })}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    {/* minwidth : 640 */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigationList.map((item) => (
                                <ActiveLink
                                    key={item.name}
                                    href={item.href}
                                    style={`cursor-pointer  block px-3 py-2 rounded-md text-base font-medium`}
                                >
                                    {item.name}
                                </ActiveLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
