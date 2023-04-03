import React, { useState, useEffect } from "react";

function Message({ message }) {
  const [messageText, setMessageText] = useState(message);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageText("");
    }, 3000);
    // Clean up the timer to prevent a memory leak
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <span className="bg-pBlue text-white font-semibold absolute right-4 bottom-10 p-2 rounded-md transition-all duration-150">
      {messageText}
    </span>
  );
}

export default Message;
