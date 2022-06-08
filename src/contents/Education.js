import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Software Engineering" where="IIIT Kottayam" from="Dec 2020" to="Present"/>
            <Widecard title="HSC" where="PURVOTTAR RAILWAY MAHAVIDYALAY" from="2018" to="2020"/>
            <Widecard title="SSLC " where="Kendriya vidyalaya sonpur" from="2008" to="2018"/>
            
            </div>
            )
        }
    }
    
export default Education
    