import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from 'react-icons/fa'
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    return (
        <div>
            <h3>Right side nav</h3>
            <ButtonGroup vertical>
                <Button className='mb-2' variant='outline-primary'><FaGoogle /> Login With Google</Button>
                <Button variant='outline-dark'><FaGithub /> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'>
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaTwitter/> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaWhatsapp/> WhatsApp
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaTwitch/> Twitch
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel/>
            </div>
        </div>
    );
};

export default RightSideNav;