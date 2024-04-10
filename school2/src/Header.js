export default function Header() {
    return (
        <>
           <a className="navbar-brand" href="#">
          <div className="d-flex">
            <img src="images/logo.jpeg" alt width={40} height={40} className="d-inline-block align-text-top mt-2" />
            <p>The Good School <br /><span className="ps-5">Guide</span></p>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        </>
    )
}