import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    // <>
    // <MDBFooter className='text-center' >

    //   <div className='text-center footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    //     <a className='text-white' href='https://a3harva.github.io/'>
    //     © 2023 Atharva Joshi

    //     </a>

    //   </div>
    // </MDBFooter>
    // </>
    <>
      <footer className="text-center text-white footer ">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg link m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg link m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg link m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg link m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg link m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg link m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center  p-3">
          © 2023 Copyright:
          <a className="link" href="https://a3harva.github.io/">
            Atharva Joshi
          </a>
        </div>
      </footer>
    </>
  );
}
