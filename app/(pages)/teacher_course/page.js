"use client";

import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const mockupData = [
  {
    id: 1,
    courseName: 'Intro to Programming',
    price: '100',
    duration: '10 weeks',
    option: 'Online',
    description: 'Learn the basics of programming.'
  },
  {
    id: 2,
    courseName: 'Advanced Data Science',
    price: '200',
    duration: '12 weeks',
    option: 'In-person',
    description: 'Deep dive into data science topics.'
  },
];

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const Model = (datas) => {
  const model = {};
  Object.keys(datas).forEach(key => {
    model[key] = datas[key];
  });
  return model;
};

const CourseManager = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ id: null, courseName: '', price: '', duration: '', option: '', description: '' });
  const [editMode, setEditMode] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (localStorage.getItem('courses')) {
      setItems(JSON.parse(localStorage.getItem('courses')));
    } else {
      localStorage.setItem('courses', JSON.stringify(mockupData));
      setItems(mockupData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.courseName || !formData.price || !formData.duration || !formData.option || !formData.description) {
      setMessages("Please fill in all fields");
      setTimeout(() => setMessages(""), 3000);
      return;
    }

    if (editMode) {
      const updatedItems = items.map(item =>
        item.id === formData.id ? formData : item
      );
      setItems(updatedItems);
      localStorage.setItem('courses', JSON.stringify(updatedItems));
      setMessages("Course edited");
    } else {
      const newItem = Model({ ...formData, id: Date.now() });
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      localStorage.setItem('courses', JSON.stringify(updatedItems));
      setMessages("Course added");
    }

    setTimeout(() => setMessages(""), 3000);
    setFormData({ id: null, courseName: '', price: '', duration: '', option: '', description: '' });
    setEditMode(false);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('courses', JSON.stringify(updatedItems));
    setMessages("Course deleted");
    setTimeout(() => setMessages(""), 3000);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditMode(true);
    setSelectedRow(item.id);
  };

  const handleCancel = () => {
    setFormData({ id: null, courseName: '', price: '', duration: '', option: '', description: '' });
    setEditMode(false);
  };

  return (
    <div className="container" id="course-crud-container">
      <div className="title text-center">
        <h1><strong>Course Manager</strong></h1>
      </div>
      <div className="main row">
        <div className="col-sm-12 col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="col-md-12">Course Name
                <input
                  type="text"
                  className="form-control"
                  value={formData.courseName}
                  onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="col-md-12">Price
                <input
                  type="text"
                  className="form-control"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="col-md-12">Duration
                <input
                  type="text"
                  className="form-control"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="col-md-12">Option
                <input
                  type="text"
                  className="form-control"
                  value={formData.option}
                  onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="col-md-12">Description
                <textarea
                  className="form-control"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </label>
            </div>
            <input
              type="submit"
              value={editMode ? "Submit edition" : "Submit creation"}
              className="btn btn-success btn-block"
            />
            <input
              type="button"
              value="Cancel"
              onClick={handleCancel}
              className="btn btn-secondary btn-block"
            />
          </form>
        </div>
        <div className="col-sm-12 col-md-8">
          {messages && <div className={`alert alert-${editMode ? "info" : "success"}`}>{messages}</div>}
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Option</th>
                <th>Description</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.courseName}</td>
                  <td>{item.price}</td>
                  <td>{item.duration}</td>
                  <td>{item.option}</td>
                  <td>{item.description}</td>
                  <td>
                    <a
                      href="#"
                      className="btn btn-success btn-sm"
                      onClick={() => handleEdit(item)}
                    >Edit</a>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >Drop</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseManager;
