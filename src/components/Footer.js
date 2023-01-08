import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
    <MDBFooter className='text-center' color='white' bgColor='dark'>


      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-white' href='https://a3harva.github.io/'>
        © 2022 Atharva Joshi
          
        </a>
      </div>
    </MDBFooter>
    </>
  );
}