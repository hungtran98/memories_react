import styles from './Posts.module.scss'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux';
import Post from './Post';
import  {getPosts} from '~/redux/actions/actionPosts'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const cx = classNames.bind(styles)

function Posts({ setCurrentId }) {

    const dispatch = useDispatch()
   
    useEffect(() => {
      dispatch(getPosts());
    }, []);
  
    
    const posts = useSelector(state => state.posts)
   
    
    return (
       
       <div className={cx('wrapper')}>
            {
                posts.map( (post) => (
                    <Post post={post} key={post._id} setCurrentId={setCurrentId}/>
                ))
            }
        </div>)
}

export default Posts;