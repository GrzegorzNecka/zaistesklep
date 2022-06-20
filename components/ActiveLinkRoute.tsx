import { useRouter } from "next/router";

interface ActiveLinkProps {
    children: React.ReactNode;
    href: string;
    style: string;
}

function ActiveLinkRoute({ children, href, style }: ActiveLinkProps) {
    const router = useRouter();
    const currentRoute = router.pathname;

    const isActiveLink = (href: string) => {
        let styleLink = `btn-primary--inactive`;

        if (href === currentRoute) {
            styleLink = `btn-primary--active`;
        }

        return styleLink;
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a onClick={handleClick} className={`${isActiveLink(href)} ${style}`}>
            {children}
        </a>
    );
}

export default ActiveLinkRoute;
