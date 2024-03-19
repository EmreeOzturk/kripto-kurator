import Link from 'next/link'
const HeaderMenu = () => {
  return (
    <nav className='md:flex md:flex-row'>
      <ul className='flex gap-2 flex-col md:flex-row text-purple-300 text-lg cursor-pointer'>
        <li className='hover:bg-slate-200/20 p-2 flex items-center hover:scale-105 transition-all rounded-xl '>
          <Link href='/'>Collection</Link>
        </li>
        <li className='hover:bg-slate-200/20 p-2 flex items-center hover:scale-105 transition-all rounded-xl'>
          <Link href='#roadmap'>Roadmap</Link>
        </li>
        <li className='hover:bg-slate-200/20 p-2 flex items-center hover:scale-105 transition-all rounded-xl'>
          <Link href='#team'>Team</Link>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu