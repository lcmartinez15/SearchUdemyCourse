import axios from "axios";

export const searchCourseUdemy = async (search) => {
  const config = {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: "Basic ==",
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const res = await axios.get(
    "https://www.udemy.com/api-2.0/courses/?page=1&page_size=20&search=" +
      search,
    config
  );
  return res.data.results;
};

export const searchChaptersByCourseUdemy = async (id) => {
  const config = {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: "Basic ==",
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const res = await axios.get(
    "https://www.udemy.com/api-2.0/courses/" +
      id +
      "/public-curriculum-items/?page=1&page_size=500",
    config
  );

  return res.data.results;
};
