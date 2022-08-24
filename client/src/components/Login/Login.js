import styles from './Login.module.scss'
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '~/redux/actions/actionUser'

const cx = classNames.bind(styles)

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username,
      password
    }
    dispatch(login(user, navigate))
  }
    return (
        <div className={cx('wrapper')}>
              <form className={cx('form')} onSubmit={handleLogin}>
                <div className={'formcontainer'}> 
                <h4 className={cx('title')}>Đăng nhập</h4>
                <input  className={cx('username')}  placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input  className={cx('password')} type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className={cx('btnlogin')} type="submit">Login</button>
                <div className={cx('switchbtn')} >
                  <span>Bạn chưa có tài khoản ? </span>
                  <Link className={cx('link')} to='/signup' ><span> Đăng ký</span></Link>
                </div>
      
                </div> 
              </form>  
        </div>
    );
}

export default Login;