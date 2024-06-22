"use client";

import Head from 'next/head';
import { useEffect } from 'react';
import './styles.css';
import CourseCard from "../../Components/Card_comp";

const data = [
  { label: 'Students Enrolled', percentage: 69.6 },
  { label: 'Amount Received', percentage: 71 },
  { label: 'Course Duration', percentage: 74.7 },
  { label: 'No of Days Left', percentage: 85 },
];

export default function Home() {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];

    data.forEach((item, index) => {
      const percentage = item.percentage;
      const keyframes = `
        @keyframes show-bar-${index + 1} {
          0% { width: 0; }
          100% { width: ${percentage}%; }
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Teacher Dashboard</title>
      </Head>
      <div className="container">
        <div className="stats">
          <section className="bar-graph bar-graph-horizontal bar-graph-one">
            {data.map((item, index) => (
              <div key={index} className={`bar-${index + 1}`}>
                <span className="label">{item.label}</span>
                <div
                  className="bar"
                  data-percentage={`${item.percentage}%`}
                  style={{
                    animation: `show-bar-${index + 1} 1.2s forwards`,
                    backgroundColor: getColor(index),
                  }}
                ></div>
              </div>
            ))}
          </section>
        </div>
        <CourseCard 
          image="/path/to/image.jpg" 
          subject="Sample Course" 
          description="This is a sample course description." 
          price="99.99" 
          instructor="John Doe" 
        />
      </div>
    </>
  );
}

function getColor(index) {
  const colors = ['#64b2d1', '#5292ac', '#407286', '#2e515f'];
  return colors[index % colors.length];
}
