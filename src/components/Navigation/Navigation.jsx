import styled from "@emotion/styled";

export const LogoWrapper = styled.div`
  margin: 10px 10px;
  display: flex;
  justify-content: center;
`

export const NavigationTop = styled.nav`
  width: 100%;
  max-width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
`

export const NavigationBottom = styled.nav`
  width: 100%;
  max-width: 100%;
  height: 70px;
  position: sticky;
  bottom: 0;
  background: #dbd227;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  aling-content: center;
  margin-top: 25px;
  margin-right: 30px;
`

export const MenuItems = styled.li`
  font-weight: bold;
`

export const Ahref = styled.a`
  color: ${(props) => props.color};
`