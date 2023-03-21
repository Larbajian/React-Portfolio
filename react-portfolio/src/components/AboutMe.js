import React from 'react';
import Card from 'react-bootstrap/Card';

export default function AboutMe() {
    return (
      <div>
        <h1 style={{color:'#FFFFF0'}}> About Me </h1>

        <Card style={{ backgroundSize:'cover', height: '90vh', color: '#564E58', fontSize: 'large',fontWeight: 'bold', background: '#6B8F71', display: 'flex', justifyContent:'space-around', marginTop: 30 }}>
          <Card.Body>
            I recently earned a certificate in full stack web develop through
            UNC Charlotte. It introduced and made me well a acquainted with
            JavaScript, Node.js, mySQL, Restful APIs, MongoDB, Mongoose and
            other languages. I found my strangth lies in back-end development,
            which I have come to thoroughly enjoy. I am currently working on a
            certificate that focuses on back-end development through Google.
            Previously I earned a B.A. inanthopolgy and an M.S. in Management.
            Throughout my education it's become clear that as seekers we're
            rarely satisfaid with knowledge we always strive for a better
            understanding or new material. This is a large reason why I decided
            to shift gears and focus on the tech industry - an ever growing
            industry with an ever growing wealth of knowledge.{" "}
          </Card.Body>
        </Card>
      </div>
    );
}