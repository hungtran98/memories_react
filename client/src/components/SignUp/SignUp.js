import styles from './SignUp.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles)

function SignUp() {
    return (
        <div className={cx('wrapper')}>
              <form className={cx('form')} >
                <div className={'formcontainer'}> 
                <h4 className={cx('title')}>Đăng ký tài khoản</h4>
                <input  className={cx('username')}  placeholder='Username'/>
                <input  className={cx('password')}  minLength="8" type="password" placeholder='Password'/>
                <input  className={cx('confirmpassword')} minlength="8" type="password" placeholder='Confirm password'/>
                <button className={cx('btnsignup')} type="submit">SignUp</button>
                {/* <button className={cx('btnclear')}>Clear</button>  */}
                <div className={cx('switchbtn')} >
                  <span>Đăng nhập ? </span>
                  <Link className={cx('link')} to='/login' ><span> Đăng nhập</span></Link>
                </div>
                </div> 
              </form>  
        </div>
    );
}

export default SignUp;