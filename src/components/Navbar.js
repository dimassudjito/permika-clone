import React from 'react';


const Navbar = () => {
  return (
    <div>
      <h1 className="my-4">PERMIKA EDMONTON</h1>
      <hr/>
      <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link text-dark" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" href="/events">Upcoming Events</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" href="#">Blog</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" href="/executive-team">Executive Team</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" href="#">Pictures of Permika and EICA gatherings</a>
        </li>
    </ul>
    </div>
  );
};

export default Navbar;
