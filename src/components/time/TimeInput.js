
export const TimeInput = ({ time,handleTimeChange }) => {
    

    return (
        <div className="flex flex-col rounded-md items-center justify-center ">
        <input
            type="number"
            name="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            className=" bg-transparent text-e4c1f9 font-bold w-14 text-center outline-none text-4xl"
        />
        </div>
    );
}

