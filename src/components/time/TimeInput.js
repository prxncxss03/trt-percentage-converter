
export const TimeInput = ({ time,setTime }) => {
    return (
        <div className="flex flex-col items-center">
        <input
            type="number"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="rounded-md p-2 bg-transparent text-e4c1f9 font-bold w-16 outline-none"
        />
        </div>
    );
}

