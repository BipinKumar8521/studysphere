import React from 'react';
import "./styles.css"

const Page = () => {
    return (
        <div className="container">
            <header>
                <h1 id="title">Upload Course Form</h1>
            </header>
            <main>
                <form id="survey-form" action="#" method="post">
                    <label id="name-label" htmlFor="name">
                        Name
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your Name"
                            required
                        />
                    </label>
                    <label id="Course-label" htmlFor="ourse">
                        Course Name
                        <input
                            id="Course_name"
                            type="text"
                            placeholder="Enter your Course Name"
                            required
                        />
                    </label>
                    <label id="number-label" htmlFor="number">
                        Price
                        <input
                            id="number"
                            type="number"
                            placeholder="Enter the price of course"
                        />
                    </label>
                    <label id="number-label-1" htmlFor="number">
                        Duration of the Course
                        <input
                            id="Duration"
                            type="text"
                            placeholder="Enter the duration of course"
                        />
                    </label>
                    <label htmlFor="dropdown">
                        Which option best describes your current Course?
                        <select id="dropdown" name="role" required>
                            <option value="" disabled selected>Select Standard</option>
                            <option value="1">NEET</option>
                            <option value="2">JEE Main</option>
                            <option value="3">JEE Advanced</option>
                            <option value="4">12th Board</option>
                        </select>
                    </label>

                    <label htmlFor="note">
                        Description of your Course
                        <textarea id="note" placeholder="Enter your Course description here..." rows="7"></textarea>
                    </label>
                    <button id="submit">Submit</button>
                </form>
            </main>
        </div>
    );
};

export default Page;
