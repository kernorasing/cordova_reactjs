import React from 'react';
import { Plugins } from '@capacitor/core';

const { PushNotifications } = Plugins;

export default function FCMPage() {
  const initFCM = () => {
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
        alert('Registered');
      } else {
        // Show some error
        alert('Registere Error');
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token) => {
      alert('Push registration success, token: ' + token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      alert('Push received: ' + JSON.stringify(notification));
    });

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      alert('Push action performed: ' + JSON.stringify(notification));
    });
  };

  return (
    <div className="page-container">
      <h1>FCM Page</h1>
      <button className="btn btn-light btn-block" onClick={initFCM}>
        Init FCM
      </button>
    </div>
  );
}
