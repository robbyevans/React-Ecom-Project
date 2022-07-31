import React,{useState} from 'react'

function Comment() {
  const [formData,setFormData]=useState({
 
    name: "",
    email: "",
    comment: ""
  })
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event){
    event.preventDefault();

  }
  return (
    <div>
      <form onSubmit={handleSubmit} id="comment-form" class=" form-input" >
      <h4 class="comment-text">Leave a comment</h4>
      <input name="name" placeholder="Name" className="small-input name-input" type="text"></input>
      <input name="email" placeholder="Email" className="small-input email-input" type="email"></input>
      <textarea
        className="comment-input"
        onChange={handleChange}
        type="text"
        name="comment"
        id="comment"
        placeholder="Add a comment..."
        ></textarea>
        <input class="comment-btn" type="submit">Submit</input>
      </form>
      <ul id="comments-list" class="comments">
      <h4>comments..</h4>
      {formData.map((data)=>{
        return <li>@{data.name}..{data.comment}</li>
      })}
    </ul>

    </div>
  )
}

export default Comment