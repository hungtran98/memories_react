import styles from './Form.module.scss'
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';


import { createPost, updatePost } from '~/redux/actions/actionPosts'
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles)

function Form({ currentId, setCurrentId }) {

  const [postData, setPostData] = useState({
    createtor: '',
    title: '',
    desc: '',
    image: ''
  })

 const post = useSelector(state => (currentId ? state.posts.find(item => item._id === currentId) : null))
 const dispatch = useDispatch()

  

  useEffect(() => {
    if(post){
      setPostData(post)
      console.log('render default')
    }
  }, [post])


  const handleSubmit = async (e) => {
    e.preventDefault()

    if(currentId === 0 ) {
      dispatch(createPost(postData))
      setCurrentId(0)
      setPostData({ createtor: '', title: '', desc: '', image: ''})
      console.log('add')
    }
    else {
      dispatch(updatePost(currentId, postData))
      setCurrentId(0)
      setPostData({ createtor: '', title: '', desc: '', image: ''})
      console.log('update');

  
    }

  }

    return (
        <div className={cx('wrapper')}>
              <form className={cx('form')} onSubmit={handleSubmit}>
                <div className={'formcontainer'}> 
                <h4 className={cx('namepost')}>{currentId ? `Editing ${postData.title}` : `create a post`}</h4>
                <input  className={cx('creator')} value={postData.createtor} onChange={(e) => setPostData({ ...postData, createtor: e.target.value })} placeholder='Creator'/>
                <input  className={cx('title')} value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} placeholder='Title'/>
                <textarea  className={cx('description')} value={postData.desc} onChange={(e) => setPostData({ ...postData, desc: e.target.value })}  placeholder='Descripton'/>
                <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} /></div>
               
                <button className={cx('btnadd')} type="submit">{currentId ? `Update` : `Add new`}</button>
                <button className={cx('btnclear')}>Clear</button> 
                </div> 
              </form>
            
        </div>
    );
}

export default Form;