import React, { useEffect, useState } from 'react';
import { BoxModalContent, BoxModalContentLine, Image, ImageBox, TH2, P1, Close, FormBox, BtnSub} from "./StyledComp"
import {FaWindowClose} from "react-icons/fa"
import DiscountImg from '../../assets/discount.png'
import {  FormControl, OutlinedInput } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AnnouncementsModal=()=>{
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      const isModalDisplayed = localStorage.getItem('isModalDisplayed');
      if (isModalDisplayed!==false) {
        localStorage.setItem('isModalDisplayed', true);
        setShowModal(true);
      }
    }, []);
    const closeModal = () => {
      localStorage.setItem('isModalDisplayed', false);
      setShowModal(false);
    };
    if (!showModal) {
      return null;
    } 
    return (
      <>
      <Dialog open={showModal} TransitionComponent={Transition} keepMounted onClose={closeModal} aria-describedby="alert-dialog-slide-description">
          <BoxModalContent>
            <BoxModalContentLine>
                <ImageBox>
                  <Image component="img" src={DiscountImg} alt="Discount image" />
                </ImageBox>
                <Close aria-label="sumbit-close" onClick={closeModal}><FaWindowClose/></Close>
                <TH2 variant='h2'>Welcome to our newsletter!</TH2>
                <P1 variant='body1'>Subscribe to receive updates and announcements.</P1>
                <FormBox>
                    <FormControl fullWidth sx={{ width:"60%" }}>
                      <OutlinedInput placeholder="Enter your email" type='email'/>
                    </FormControl>
                    <BtnSub type="submit">Subscribe</BtnSub>
                </FormBox>
            </BoxModalContentLine>
          </BoxModalContent> 
      </Dialog>
      </>
    );
}
export default AnnouncementsModal;
