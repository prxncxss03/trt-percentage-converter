import {RiGithubFill} from 'react-icons/ri'

export const Footer = () => {
    return (
        <div className="flex justify-center items-center  dark:text-white absolute bottom-4 px-2">
            <p className='flex items-center'>Created by  <a href="https://github.com/prxncxss03" className="underline px-2"> Princess Pocon</a> <RiGithubFill></RiGithubFill></p>
        </div>
    )
}