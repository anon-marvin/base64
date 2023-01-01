import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand  text-white" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/"> <i class="fa-solid fa-house"></i>Home</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/"><i class="fa-solid fa-address-book"></i>Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-screwdriver-wrench"></i>
                                    Other Tools
                                </a>
                                <ul className="dropdown-menu w-70">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>


                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/"><i class="fa-solid fa-info"></i>Info</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
