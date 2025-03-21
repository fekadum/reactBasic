import reactLogo from '../assets/react.svg';
function Header(){
    return(
<header className='header'>
    <nav className='navigation'>
        <img src={reactLogo} alt='image'/>
        <span>ReactFacts</span>
    </nav>
</header>

    //     <header className='header'>
    //     <img src={reactLogo} className='react-logo-img' alt="React logo" />
    //     <nav>
    //         <ul className="nav-list">
    //             <li className='nav-list-item' ><a>Pricing</a></li >
    //             <li className='nav-list-item'><a>About</a></li >
    //             <li className='nav-list-item'><a>Contact</a></li >
    //         </ul>
    //     </nav>
    // </header>
    )
}
export default Header;