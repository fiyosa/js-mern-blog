import React from 'react'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import {useHistory} from 'react-router-dom'

const BlogItem = (props) => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={props.image} alt="post" />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{props.title}</p>
          <div className="edit-wrapper">
            <p className="edit" onClick={() => history.push(`/create-blog/${props._id}`)}>Edit</p> | <p className="delete" onClick={() => props.onDelete(props._id)}>Delete</p>
          </div>
        </div>
        <p className="author">{props.name} - {props.date}</p>
        <p className="body">{props.body}</p>
        <Gap height={20} />
        <Button title="View Detail" onClick={() => history.push(`/detail-blog/${props._id}`)} />
      </div>

    </div>
  )
}

export default BlogItem
