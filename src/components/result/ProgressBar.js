export const ProgressBar = ({ percentage }) => {
    return (
        <div className="flex  bg-161614 rounded-full w-full">
            <div className={`rounded-full bg-d0f4de py-4` } style={{width: `${percentage}%`}}></div>
        </div>
    )
}
