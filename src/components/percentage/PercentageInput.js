export const PercentageInput = ({ percentage,handlePercentageChange }) => {
    

    return (
        <div className="flex flex-col rounded-md items-center justify-center ">
        <input
            type="number"
            name="percentage"
            id="percentage"
            value={percentage}
            onChange={handlePercentageChange}
            className=" bg-transparent text-e4c1f9 dark:drop-shadow-sm font-bold w-[5rem] text-center outline-none text-4xl "
        />
        </div>
    );
}
