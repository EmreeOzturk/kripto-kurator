import Insta from '@/svg/insta.svg'
import Substack from '@/svg/substack.svg'
import Twitter from '@/svg/twitter.svg'
import Discord from '@/svg/discord.svg'
import Link from 'next/link'
const SocialLogos = () => {
    return (
        <>
            <div className='p-1 border-2 border-purple-300 rounded-full'>
                <Link href='https://www.instagram.com/kriptokurator/'>
                    <Insta />
                </Link>
            </div>
            <div className='p-1 border-2 border-purple-300 rounded-full'>
                <Link href='https://kriptokurator.substack.com/'>
                    <Substack />
                </Link>
            </div>
            <div className='p-1 border-2 border-purple-300 rounded-full'>
                <Link href='https://twitter.com/kriptokurator'>
                    <Twitter />
                </Link>
            </div>
            <div className='p-1 border-2 border-purple-300 rounded-full'>
                <Link href='https://discord.gg/'>
                    <Discord />
                </Link>
            </div>
        </>
    )
}

export default SocialLogos