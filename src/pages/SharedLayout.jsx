import { Outlet } from 'react-router-dom'
import NavbarDesktop from '../components/Navbar/NavbarDesktop'
import Footer from '../components/Footer'
import MobileNavbar from '../components/Navbar/MobileNavbar'
const SharedLayout = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <Outlet />
      <Footer />
    </>
  )
}
export default SharedLayout
