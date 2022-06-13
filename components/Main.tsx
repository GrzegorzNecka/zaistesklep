interface MainProps {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
    return <main className=" mt-20 mb-20 flex-grow max-w-7xl mx-auto w-full bg-white shadow">{children}</main>;
};
