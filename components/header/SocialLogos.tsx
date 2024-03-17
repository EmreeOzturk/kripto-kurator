import Insta from '@/svg/insta.svg'
import Substack from '@/svg/substack.svg'
import Twitter from '@/svg/twitter.svg'
import Discord from '@/svg/discord.svg'
const SocialLogos = () => {
    return (
        <>
            <div className='p-1 border-2 border-purple-300 rounded-full'>
                <Insta />
            </div>
            <div className='p-1 border-2 border-purple-300 rounded-full'>
                <Substack />
            </div>
            <div className='p-1 border-2 border-purple-300 rounded-full'>
                <Twitter />
            </div>
            <div className='p-1 border-2 border-purple-300 rounded-full'>
                <Discord />
            </div>
        </>
    )
}

export default SocialLogos