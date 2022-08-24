import styles from './Post.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import  { deletePost, likePost } from '~/redux/actions/actionPosts'
import { useDispatch, useSelector } from 'react-redux';


const cx = classNames.bind(styles)

function Post({ post, setCurrentId }) {

const dispatch = useDispatch()
const user = useSelector( state => state.user.user)

console.log(typeof(user.accessToken))

    return (
        <div className={cx('wrapper')}>
            <img className={cx('cardimage')} src={post.image} alt="iamge-card"/>
            <div className={cx('overlay')}>
                <h4>{post.createtor}</h4>
                <p className={cx('moment')}>{moment(post.createdAt).fromNow()}</p>
            </div>
            <div className={cx('overlay2')}>
                <button className={cx('btnmore')} onClick={() => setCurrentId(post._id)}>
                    <FontAwesomeIcon icon={faEllipsisH}/>
                </button>
            </div>
            <div className={cx('cardbody')}>
                <h4 className={cx('cardtitle')}>{post.title}</h4>
                <h6 className={cx('carddesc')}>{post.desc}</h6>
            </div>
            <div className={cx('cardaction')}>
                <button className={cx('btnaction')} onClick={() => dispatch(likePost(post._id, user.accessToken))}><FontAwesomeIcon className={cx('icon')} icon={faHeart}/>Like {post.like}</button>
                <button className={cx('btnaction')} onClick={ () => dispatch(deletePost(post._id)) }><FontAwesomeIcon className={cx('icon')} icon={faTrashCan} />Delete</button>
            </div>
        </div>
    )
}

export default Post;