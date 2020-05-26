import React, { useEffect } from 'react';
const lineLogin = window.lineLogin;

export default function LineLoginPage() {
  useEffect(() => {
    if (window.cordova) {
      lineLogin.initialize({ channel_id: process.env.REACT_APP_LINE_CHANNEL_ID });
    }
  });

  const login = () =>
    lineLogin.login(
      (res) => alert(JSON.stringify(res)),
      (err) => alert(JSON.stringify(err))
    );

  const getToken = () =>
    lineLogin.getAccessToken(
      (res) => alert(JSON.stringify(res)),
      (err) => alert(JSON.stringify(err))
    );

  const verifyToken = () =>
    lineLogin.verifyAccessToken(
      () => alert('OK'),
      (err) => alert(JSON.stringify(err))
    );

  const refreshToken = () =>
    lineLogin.refreshAccessToken(
      (res) => alert(JSON.stringify(res)),
      (err) => alert(JSON.stringify(err))
    );

  const logout = () =>
    lineLogin.logout(
      (res) => alert(JSON.stringify(res)),
      (err) => alert(JSON.stringify(err))
    );

  return (
    <div className="page-container">
      <button className="btn btn-block btn-success" onClick={login}>
        Log In
      </button>
      <button className="btn btn-block btn-light" onClick={getToken}>
        Get Token
      </button>
      <button className="btn btn-block btn-warning" onClick={verifyToken}>
        Verify Token
      </button>
      <button className="btn btn-block btn-light" onClick={refreshToken}>
        Refresh Token
      </button>
      <button className="btn btn-block btn-danger" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}
