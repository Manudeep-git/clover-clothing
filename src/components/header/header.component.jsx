import './header.styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <div>Logo</div>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {
                currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>):
                (<Link className='option' to='/signin'>Sign In</Link>)
            }
            <Link className='option' to='/signup'>
                SignUp
            </Link>
        </div>
    </div>
)

export default Header;