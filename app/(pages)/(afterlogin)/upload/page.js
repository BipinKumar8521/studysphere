"use server";

import "./styles.css";

const Page = async () => {
  const handleSubmit = async (formData) => {
    "use server";
    const data = {
      name: formData.get("name"),
      courseName: formData.get("courseName"),
      price: formData.get("price"),
      duration: formData.get("duration"),
      role: formData.get("role"),
      description: formData.get("description"),
    };

    console.log(data);
    const uploadData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/course`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          console.log("Data successfully uploaded");
          // Handle success
        } else {
          console.error("Failed to upload data");
          // Handle error
        }
      } catch (error) {
        console.error("Error during data upload", error);
        // Handle error
      }
    };
    uploadData();
  };

  return (
    <div className="container">
      <header>
        <h1 id="title">Upload Course Form</h1>
      </header>
      <main>
        <form id="survey-form" action={handleSubmit} method="post">
          <label id="name-label" htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your Name"
              required
            />
          </label>
          <label id="Course-label" htmlFor="courseName">
            Course Name
            <input
              id="courseName"
              name="courseName"
              type="text"
              placeholder="Enter your Course Name"
              required
            />
          </label>
          <label id="number-label" htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Enter the price of course"
            />
          </label>
          <label id="number-label-1" htmlFor="duration">
            Duration of the Course
            <input
              id="duration"
              name="duration"
              type="text"
              placeholder="Enter the duration of course"
            />
          </label>
          <label htmlFor="role">
            Which option best describes your current Course?
            <select id="role" name="role" required>
              <option value="" disabled selected>
                Select Standard
              </option>
              <option value="NEET">NEET</option>
              <option value="JEE Main">JEE Main</option>
              <option value="JEE Advanced">JEE Advanced</option>
              <option value="12th Board">12th Board</option>
            </select>
          </label>

          <label htmlFor="description">
            Description of your Course
            <textarea
              id="description"
              name="description"
              placeholder="Enter your Course description here..."
              rows="7"
            ></textarea>
          </label>
          <button id="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Page;
