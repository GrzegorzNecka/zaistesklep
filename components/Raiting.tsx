interface RaitingProps {
    rating: number;
}

// https://flowbite.com/docs/components/rating/

export const Rating = ({ rating }: RaitingProps) => {
    return <div className=" text-blue-500 font-bold">{rating}</div>;
};
