import Image from 'next/image';
import logo from '@/public/assets/logo.png'
import SocialLogos from './SocialLogos';
import ConnectWalletButton from './ConnectWalletButton';
import KriptoKurator from './KriptoKurator';
import Link from 'next/link';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    return (
        <header className='flex items-center justify-center p-4 mt-4 rounded-xl
            backdrop-blur-3xl w-[90%] m-auto bg-gray-900/30 z-20 fixed top-0 right-0 left-0' >
            <HeaderMenu />
            <div className='flex justify-center items-center flex-1'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image src={logo} alt='logo' height={50} sizes='100vw' />
                    <KriptoKurator />
                </Link>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <ConnectWalletButton />
                <SocialLogos />
            </div>
        </header >
    )
}

export default Header