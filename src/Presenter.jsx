import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import {BiChevronsDown} from 'react-icons/bi';
import {WiStars} from 'react-icons/wi'
import {WiSnowflakeCold } from 'react-icons/wi';

 const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (

    <div className="presenter">
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "3em" }}> <BiChevronsDown /> </span>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>HI, I'M DANIYAL NAWAZ </span>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}> A MERN DEV </span>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <div className="cross">
          <span style={{ fontSize: "3em" }}>
            <Animator animation={MoveIn(-1000, 0)}>ON </Animator>
            <Animator animation={MoveIn(1000, 0)}> THE</Animator>
                                                  VERGE
            <Animator animation={MoveOut(1000, 0)}>TO</Animator>
            <Animator animation={MoveOut(-1000, 0)}>PERFECTION</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}> A FRESHER NEVERTHELESS </span>
        </Animator>
      </ScrollPage>

      <ScrollPage page={5}>
        <div className="cross" >
          <span style={{ fontSize: "3em" }}>
           
            <Animator animation={MoveIn(-1000, 0)}>DOWN </Animator>
            <Animator animation={MoveIn(1000, 0)}>FOR</Animator>
                                             OPPORTUNITIES
            <Animator animation={MoveOut(1000, 0)}>AND </Animator>
            <Animator animation={MoveOut(-1000, 0)}> CHALLENGES</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={6}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}> STICK AROUND <WiStars/> </span>
        </Animator>
      </ScrollPage>

      
      
      <ScrollPage page={7}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}></span>
          <span style={{ fontSize: "3em" }}>
           FOR DEEPER INSIGHTS
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    </div>
  );
};

export default Presenter;
