import {Link} from 'react-router-dom'
export default function AdminFooter () {
    return(
        <footer className="footer">
                    <div className="container-fluid">
                        <div className="row text-muted">
                            <div className="col-6 text-start">
                                <p className="mb-0">
                                    <i className="fa-solid fa-store" />&nbsp;
                                    <Link className="text-muted" to="/home" target="_blank">
                                        <strong>Online Store</strong>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
    );
    }