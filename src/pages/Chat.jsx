import React, { useEffect } from 'react';

export default function LegalBuddyChat() {
  const url = 'http://localhost:5000/api/chat';

  useEffect(() => {
    async function fetchChat() {
      try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') || ''
          },
        });

        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.error("Error fetching chat:", err);
      }
    }

    fetchChat();
  }, []);

  return <div>Legal Buddy Chat Page</div>;
}
