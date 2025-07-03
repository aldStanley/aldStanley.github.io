import React from 'react'
import MyBgAnimation from '../MyBgAnimation'
import { MyContainer, MyBg, MyLeftContainer, Img, MyRightContainer, MyInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './MyStyle'
import myImg from '../../images/Me.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const MySection = () => {
    return (
        <div id="about">
            <MyContainer>
                <MyBg>
                    <MyBgAnimation />
                </MyBg>
                <MyInnerContainer >
                    <MyLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </MyLeftContainer>

                    <MyRightContainer id="Right">

                        <Img src={myImg} alt="My-image" />
                    </MyRightContainer>
                </MyInnerContainer>

            </MyContainer>
        </div>
    )
}

export default MySection