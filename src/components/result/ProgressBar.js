export const ProgressBar = ({ percentage }) => {
    return (
        <div className="flex  bg-161614 dark:bg-gray-600 h-10 items-center rounded-full w-full">
            
            {
                percentage < 2 ? <div className={`rounded-full bg-d0f4de h-3 w-1 ` } style={{width: `${1}%`}}></div> 
                : percentage < 4 ? <div className={`rounded-full bg-d0f4de h-6 ` } style={{width: `${2}%`}}></div>
                : 
                <div className={`rounded-full bg-d0f4de h-10` } style={{width: `${percentage}%`}}></div>
            }
        </div>
    )
}
