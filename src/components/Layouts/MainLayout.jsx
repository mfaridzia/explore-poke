import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "src/components/PokemonList/PokemonListStyled";
import { NavigationTop, NavigationBottom, LogoWrapper, MenuWrapper, MenuItems }
  from "src/components/Navigation/Navigation";

export default function MainLayout({ children }) {
  return (
    <Wrapper>
      <NavigationTop>
        <LogoWrapper>
          <Image width={120} height={40} src={'/logo.png'} alt="Pokemon Logo" />
        </LogoWrapper>
      </NavigationTop>

      {children}
      
      <NavigationBottom>
        <MenuWrapper>
          <Link href="/">
            <a> <MenuItems> Explore Pokemon </MenuItems> </a>
          </Link>
          <Link href="/my-pokemon">
            <a> <MenuItems> My Pokemon </MenuItems> </a>
          </Link>
        </MenuWrapper>
      </NavigationBottom>
    </Wrapper>
  )
}
