import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Wrapper } from "src/components/PokemonList/PokemonListStyled";
import { NavigationTop, NavigationBottom, LogoWrapper, MenuWrapper, MenuItems, Ahref }
  from "src/components/Navigation/Navigation";

export default function MainLayout({ children }) {
  const router = useRouter();
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
          <Link href="/" passHref>
            <Ahref color={router.pathname === '/' ? '#3b3c3d' : '#ffffff'}>
              <MenuItems> Explore Pokemon </MenuItems>
            </Ahref>
          </Link>
          <Link href="/my-pokemon" passHref>
            <Ahref color={router.pathname === '/my-pokemon' ? '#3b3c3d' : '#ffffff'}>
              <MenuItems> My Pokemon </MenuItems>
            </Ahref>
          </Link>
        </MenuWrapper>
      </NavigationBottom>
    </Wrapper>
  )
}
