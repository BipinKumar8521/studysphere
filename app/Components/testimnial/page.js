"use client";

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import './styles.css';

const people = [
    {
        photo: 'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
        name: "Susan Smith",
        profession: "WEB DEVELOPER",
        description: "Cheese and biscuits chalk and cheese fromage frais..."
    },
    {
        photo: 'url("https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg")',
        name: "Anna Grey",
        profession: "UFC FIGHTER",
        description: "I'm baby migas cornhole hell of etsy tofu..."
    },
    {
        photo: 'url("https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg")',
        name: "Branson Cook",
        profession: "ACTOR",
        description: "Radio telescope something incredible is waiting..."
    },
    {
        photo: 'url("https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg")',
        name: "Julius Grohn",
        profession: "PROFESSIONAL CHILD",
        description: "Biscuit chocolate pastry topping lollipop pie..."
    }
];

export default function Home() {
    const [currentPerson, setCurrentPerson] = useState(0);
    const [isChickenVisible, setIsChickenVisible] = useState(false);

    useEffect(() => {
        document.getElementById('imgDiv').style.backgroundImage = people[0].photo;
        document.getElementById('personName').innerText = people[0].name;
        document.getElementById('profession').innerText = people[0].profession;
        document.getElementById('description').innerText = people[0].description;
    }, []);

    const slide = (whichSide, personNumber) => {
        const reviewWrap = document.getElementById('reviewWrap');
        const description = document.getElementById('description');
        const imgDiv = document.getElementById('imgDiv');
        const personName = document.getElementById('personName');
        const profession = document.getElementById('profession');
        const chicken = document.querySelector('.chicken');

        const reviewWrapWidth = reviewWrap.offsetWidth + 'px';
        const descriptionHeight = description.offsetHeight + 'px';
        const side1symbol = whichSide === 'left' ? '' : '-';
        const side2symbol = whichSide === 'left' ? '-' : '';

        const tl = gsap.timeline();

        if (isChickenVisible) {
            tl.to(chicken, {
                duration: 0.4,
                opacity: 0
            });
        }

        tl.to(reviewWrap, {
            duration: 0.4,
            opacity: 0,
            translateX: `${side1symbol + reviewWrapWidth}`
        });

        tl.to(reviewWrap, {
            duration: 0,
            translateX: `${side2symbol + reviewWrapWidth}`
        });

        setTimeout(() => {
            imgDiv.style.backgroundImage = people[personNumber].photo;
        }, 400);
        setTimeout(() => {
            description.style.height = descriptionHeight;
        }, 400);
        setTimeout(() => {
            personName.innerText = people[personNumber].name;
        }, 400);
        setTimeout(() => {
            profession.innerText = people[personNumber].profession;
        }, 400);
        setTimeout(() => {
            description.innerText = people[personNumber].description;
        }, 400);

        tl.to(reviewWrap, {
            duration: 0.4,
            opacity: 1,
            translateX: 0
        });

        if (isChickenVisible) {
            tl.to(chicken, {
                duration: 0.4,
                opacity: 1
            });
        }
    };

    const setNextCardLeft = () => {
        if (currentPerson === 3) {
            setCurrentPerson(0);
            slide('left', 0);
        } else {
            setCurrentPerson((prev) => prev + 1);
            slide('left', currentPerson + 1);
        }
    };

    const setNextCardRight = () => {
        if (currentPerson === 0) {
            setCurrentPerson(3);
            slide('right', 3);
        } else {
            setCurrentPerson((prev) => prev - 1);
            slide('right', currentPerson - 1);
        }
    };

    const handleSurpriseMeClick = () => {
        const chicken = document.querySelector('.chicken');
        const imgDiv = document.getElementById('imgDiv');
        const surpriseMeBtn = document.getElementById('surpriseMeBtn');

        if (chicken.style.opacity === '0') {
            chicken.style.opacity = '1';
            imgDiv.classList.add('move-head');
            surpriseMeBtn.innerText = 'Remove the chicken';
            surpriseMeBtn.classList.remove('surprise-me-btn');
            surpriseMeBtn.classList.add('hide-chicken-btn');
            setIsChickenVisible(true);
        } else if (chicken.style.opacity === '1') {
            chicken.style.opacity = '0';
            imgDiv.classList.remove('move-head');
            surpriseMeBtn.innerText = 'Surprise me';
            surpriseMeBtn.classList.add('surprise-me-btn');
            surpriseMeBtn.classList.remove('hide-chicken-btn');
            setIsChickenVisible(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const description = document.getElementById('description');
            description.style.height = '100%';
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>

            <div className="content-wrapper">
                <h1>Our Reviews</h1>
                <div className="blue-line"></div>
                <div className="wrapper-for-arrows">
                    <div style={{ opacity: 0 }} className="chicken"></div>
                    <div id="reviewWrap" className="review-wrap">
                        <div id="imgDiv" className=""></div>
                        <div id="personName"></div>
                        <div id="profession"></div>
                        <div id="description"></div>
                    </div>
                    {/* <div
                        id="surpriseMeBtn"
                        className="surprise-me-btn"
                        onClick={handleSurpriseMeClick}
                    >
                        Surprise me
                    </div> */}
                    <div className="left-arrow-wrap arrow-wrap">
                        <div className="arrow" id="leftArrow" onClick={setNextCardLeft}></div>
                    </div>
                    <div className="right-arrow-wrap arrow-wrap">
                        <div className="arrow" id="rightArrow" onClick={setNextCardRight}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
