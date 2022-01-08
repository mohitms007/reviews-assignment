import React from 'react'
import { Comment, Icon, Segment } from 'semantic-ui-react'

export default function Review({review}) {

  // "07 9, 2013"
  const formatDate = (date) => {
    console.log(date.substr(6,8))
    let parsedDate;
    if(date.length > 10) {
      parsedDate = date.substr(2,3) + "-" + date.substr(0,2) + "-"  + date.substr(6,8).trim()
    }else {
      parsedDate = "0" + date.substr(2,2).trim() + "-" + date.substr(0,2) +"-"+  date.substr(6,8).trim()
    }
    return parsedDate.trim()
   
  }

  return (
    <Segment>
    <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREoQIZQcg466NHdz_09NOWOUEYq0mrvyPdg&usqp=CAU' />
      <Comment.Content>
        <Comment.Author>{review.reviewerName}</Comment.Author>
        <Comment.Metadata>
          <div>{formatDate(review.reviewTime)}</div>
          <div>
            Rating: {review.overall}{" "}<Icon name='star' />
          </div>
        </Comment.Metadata>
        <Comment.Text>
          {review.reviewText}
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
  </Segment>
  )
}
