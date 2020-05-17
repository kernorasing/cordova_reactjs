import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div className="w-100 position-absolute" style={{ bottom: 0 }}>
      <nav className="navbar navbar-light bg-light p-0">
        <ul className="row text-center border m-0 p-0 w-100" style={{ listStyleType: 'none' }}>
          {props.pages.map((s, i) => (
            <li className="col p-2" key={i}>
              <Link className="text-decoration-none" to={s.path}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
