import React from 'react'
import "../components/Chats.css"

function Chats() {
  return (
    <>
    <div className='chats'>
      <div className='d-flex px-3  chat-top-bar' style={{padding:"5px"}}>
        <div>
            <img className='chat-image' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg" alt="" />
        </div>
        <div>
            <h3>username</h3>
        </div>
        <div className='d-flex justify-content-end' style={{width: "100%"}}>
            <button className='top-button '><i class="fa-solid fa-video call-icon"></i></button>
            <button className='top-button '><i class="fa-solid fa-phone call-icon"></i></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Chats
