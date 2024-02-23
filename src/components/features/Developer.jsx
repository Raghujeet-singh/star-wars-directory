import React , { useEffect } from 'react';
import { Container , Row , Col , Button } from 'react-bootstrap';

import { LoadingDuration } from './../ui/Elements';
import cv from '../../assets/documents/Raghujeet resume.pdf';



const Developer = React.memo((props) => {

    useEffect(() => {
        setTimeout(function() {
            props.setIsLoading(false);
        }, 10000);
    }, [  ]);
    
    return (
        <Container fluid id="developer-feature">
            <p id="scroll-label">Scroll down...</p>
            <div>
                <div>
                    <div id="content-container">
                        <p>Hii,I am Raghujeet Singh<br />A passionate Full-stack web developer</p>
                      
                    </div>
                </div>
            </div>
        </Container>
    );
});

export default Developer;
