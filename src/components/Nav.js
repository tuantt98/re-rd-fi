import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor: 'black', justifyContent: 'space-between'}}>
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId" style={{display: 'flex', flexGrow: 'initial'}}>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Danh sách note</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}
