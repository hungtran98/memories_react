import styles from  './DefaultLayout.module.scss'
import Header from '~/layouts/components/Header';
import Form from '~/components/Form'
import Login from '~/components/Login'
import SignUp from '~/components/SignUp'
import Posts from '~/components/Posts'
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {getPosts} from '~/redux/actions/actionPosts'
import { Navigate } from 'react-router-dom';


const cx = classNames.bind(styles)
function DefaultLayout({children}) {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()
    const isUser = useSelector(state => state.user.isLogin)
   
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId]);

    return (<div className={cx('wrapper')}>
            {!isUser && (
              <Navigate to = "/login"/>
            )}
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Posts setCurrentId={setCurrentId} />
                </div>
                <div className={cx('sidebar')}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
            </div>
    </div>);
}

export default DefaultLayout;