import Image from 'next/image';
import logo from '@/public/assets/logo.png'
import SocialLogos from './SocialLogos';
import ConnectWalletButton from './ConnectWalletButton';
import KriptoKurator from './KriptoKurator';

const Header = () => {
    return (
        <div
            className='flex items-center justify-center p-4 mt-4 rounded-xl
            backdrop-blur-3xl w-[90%] m-auto bg-gray-900/30 z-20 fixed top-0 right-0 left-0' >
            <div className='flex'>
                <ul className='flex gap-4 text-purple-300 text-lg cursor-pointer'>
                    <li className='hover:bg-slate-900/20'>Collection</li>
                    <li>Roadmap</li>
                    <li>Team</li>
                </ul>
            </div>
            <div className='flex justify-center items-center flex-1'>
                <Image src={logo} alt='logo' height={50} sizes='100vw' />
                <KriptoKurator />
            </div>
            <div className='flex items-center justify-center gap-2'>
                <ConnectWalletButton />
                <SocialLogos />
            </div>
        </div >
    )
}

export default Header