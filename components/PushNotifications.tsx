"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";

const PushNotifications = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <Button onClick={handleTogglePopup} className="bg-[#4B0082] text-white px-4 py-2 rounded">
        {showPopup ? 'Hide Notifications' : 'Show Notifications'}
      </Button>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-[#4B0082]">Push Notifications</h2>
            <p>This is a placeholder for the Push Notifications pop-up.</p>
            <Button onClick={handleTogglePopup} className="bg-[#4B0082] text-white px-4 py-2 rounded mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PushNotifications;
