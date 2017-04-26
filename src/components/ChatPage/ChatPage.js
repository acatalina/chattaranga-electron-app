const React = require('react');

const RemoteVideo = require('./RemoteVideo');
const SideBar = require('./SideBar');

const ChatPage = () => {
  return (
    <div className='chat-page'>
      <RemoteVideo />
      <SideBar />
    </div>
  );
};

module.exports = ChatPage;