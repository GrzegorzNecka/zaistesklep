interface MainProps {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
    return <main className="flex-grow  max-w-2xl mx-auto  grid gap-6 p-6 sm:grid-cols-2">{children}</main>;
};
