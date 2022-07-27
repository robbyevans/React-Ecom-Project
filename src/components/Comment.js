import React from 'react'

function Comment() {
  return (
    <div>
      <form id="comment-form" class=" form-input" >
      <h4 class="comment-text">Leave a comment</h4>
      <input placeholder="Name" class="small-input name-input" type="text"></input>
      <input placeholder="Email" class="small-input email-input" type="email"></input>
      <textarea
        class="comment-input"
        type="text"
        name="message"
        id="comment"
        placeholder="Add a comment..."
        ></textarea>
        <button class="comment-btn" type="submit">Submit</button>
      </form>
      <ul id="comments-list" class="comments">
      <h4>comments..</h4>
      <li></li>
    </ul>

    </div>
  )
}

export default Comment