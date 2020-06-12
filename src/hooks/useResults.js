import React, { useState, useEffect } from "react";
import { searchCourseUdemy } from "../api/udemy";

export default () => {
  const [courses, setCourses] = useState([]);
  const [errorMessage, seterrorMessage] = useState([]);

  const searchApi = async (searchTerm) => {
    try {
      const response = await searchCourseUdemy(searchTerm);

      setCourses(response);
    } catch (error) {
      seterrorMessage(error.errorMessage);
    }
  };
  useEffect(() => {
    searchApi("react");
  }, []);

  return [searchApi, courses, errorMessage];
};
