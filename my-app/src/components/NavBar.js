import { NavBar, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const NavBar = () => {
    const [activeLink, setactiveLink] = useState('home');
    const [scrolled, setscrolled] = useState('false');

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setscrolled(true);
            } else {
                setscrolled(false);
            }
        }
        window.addEventListener('Scroll', onScroll);
        return () => window.removeEventListener('Scroll', onScroll);
        
    }, [])

    const onUpdateActiveLink = (value) => {
        setactiveLink(value);
    }

    return (    
    <NavBar expand="lg" className= {scrolled ? "scrolled": ""}>

      <Container>
        <NavBar.Brand href="#home">
            <img src = {''} alt = "Logo"/>
        </NavBar.Brand>

        <NavBar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
            </NavBar.Toggle>

        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className= {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>.Home()</Nav.Link>
            <Nav.Link href="#skills" className= {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>.skills()</Nav.Link>
            <Nav.Link href="#projects" className= {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>.projects()</Nav.Link>
          </Nav>

        <span className='navbar-text'>
            <div className='social-icon'>
                <a href ="#" ><img src = {''} alt = ''/></a>
                <a href ="#" ><img src = {''} alt = ''/></a>
                <a href ="#" ><img src = {''} alt = ''/></a>    
            </div>
            <button className="vvd" onClick={() => console.log('connect')}/><span>Lets Connect</span>
        </span>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};