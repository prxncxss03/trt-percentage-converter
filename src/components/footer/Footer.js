import {RiGithubFill} from 'react-icons/ri'

export const Footer = () => {
    return (
        <div className="flex justify-center items-center  dark:text-white px-2 pb-4">
            <p className='flex items-center text-sm'>Created by  <a href="https://github.com/prxncxss03" className="underline px-2 hover:decoration-wavy transition-all"> Princess Pocon</a> <RiGithubFill></RiGithubFill></p>
        </div>
    )
}