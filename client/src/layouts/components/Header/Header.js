import styles from  './Header.module.scss'
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles)
function Header() {

    const userName =useSelector( state => state.user.user.username)

    console.log(userName)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('braind')}>
                <h3 className={cx('title')}>what app</h3>
                <img className={cx('logo')} src="https://i.pinimg.com/564x/86/de/35/86de3543526befe6d8ee92e4405260b7.jpg" alt="my-post" />
            </div>
            <div className={cx('username')}>
                <h4>Hi, {userName}</h4>
            </div>
            
        </div>
    );
}

export default Header;