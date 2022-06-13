interface RaitingProps {
    rating: number;
}

export const Rating = ({ rating }: RaitingProps) => {
    return <div className=" text-blue-500 font-bold">{rating}</div>;
};
