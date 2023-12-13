import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/assets/img/logo.svg';
import navIcon1 from '../assets/assets/img/nav-icon1.svg';
import navIcon2 from '../assets/assets/img/nav-icon2.svg';
import navIcon3 from '../assets/assets/img/nav-icon3.svg';


export const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);

            }else{
                setScrolled(true)
            }
        }
        window.addEventListener("scroll", onScroll)
        return ()=> window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="/">
                    
                    <img src={logo} alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">

                 

                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')} >Ofrecemos</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Catalogo</Nav.Link>

                    <Nav.Link href="#compras" className={activeLink === 'compras' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('compras')}>compras</Nav.Link>
                    <Nav.Link href="#pagos" className={activeLink === 'pagos' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('pagos')}>pagos</Nav.Link>
                    <Nav.Link href="#ofertas" className={activeLink === 'ofertas' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('ofertas')}>ofertas</Nav.Link>
                    <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('blog')}>blog</Nav.Link>
                    <Nav.Link href="#nosotros" className={activeLink === 'nosotros' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('nosotros')}>nosotros</Nav.Link>
                    <Nav.Link href="#historia" className={activeLink === 'historia' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contacto')}>Historia</Nav.Link>
                    <Nav.Link href="#contacto" className={activeLink === 'contacto' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contacto')}>creditos</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        
                        <a href="#"> <img src={navIcon1} alt=""/></a>
                        <a href="#"> <img src={navIcon2} alt=""/></a>
                        <a href="#"> <img src={navIcon3} alt=""/></a>

                    </div>
                    <button className="vvd" onClick={()=>console.log('Conectado')}><span>Iniciar Sesion</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}