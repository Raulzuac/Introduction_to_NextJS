const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Pokedex',
    href: '/pokedex'
  },
  {
    name: 'Objetos',
    href: '/items'
  },
]

const NavLinks = () => {

  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={
              `flex h-[48px] grow items-center justify-center
              gap-2 rounded-md  p-3 text-sm font-medium
              hover:bg-red-500 hover:text-white md:flex-none animated duration-200
              md:justify-start md:p-2 md:px-3`
            }
          >
            <p className='text-md'>{link.name}</p>
          </a>
        )
      })}
    </>
  )
}

export { NavLinks } 