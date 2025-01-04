import React, { useState, useEffect, useRef } from "react";
import "./working.css";

function Working() {
    const events = [
        { title: 'Successfully completed high school', description: 'Successfully completed high school with excellent academic performance, achieving a GPA of 8.4/10', date: 'May 2022' },
        { title: 'Achieved Top 10 in the Youth-on Hackathon competition in Da Nang', description: 'Developed Bitstorm, a web platform enabling users to connect and consult with doctors quickly and efficiently', date: 'March 2023' },
        { title: 'Interned at Swapbrain', description: 'Participated in a real-world project as a Python Developer, focusing on building efficient and scalable solutions', date: 'September 2023' },
        { title: 'IT graduate from Passerelles Numériques', description: 'Currently studying at Passerelles Numériques, a non-governmental organization specializing in IT education and training', date: 'October 2025' },
    ];

    const eventRef = useRef([]);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index, 10);
                        setVisibleIndexes((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        eventRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container mx-auto px-6 md:px-12">
            <h2>
                <span>My career</span>
            </h2>
            <p className="opacity-0 transform translate-y-10 transition duration-700 ease-in-out animate-fade-in-up">Improving technical skills, striving for excellence</p>
            <div className="timeline">
                <ul>
                    {events.map((event, index) => (
                        <li
                            key={index}
                            ref={(el) => (eventRef.current[index] = el)}
                            data-index={index}
                            className={`transition-transform duration-700 ease-out ${
                                visibleIndexes.includes(index)
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}
                        >
                            <div className="content-working">
                                <h3 className="text-2xl text-gray-800">{event.title}</h3>
                                <p className="text-xl">{event.description}</p>
                            </div>
                            <div className="time">
                                <h4>{event.date}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Working;
