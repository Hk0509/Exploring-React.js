// fetch("https://reqres.in/api/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("the data", data);
//   });

fetch("https://reqres.in/api/users", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Kyle",
    reg: "20BCG10010",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));

// const apiUrl = "https://reqres.in/api/users"; // Replace with your API endpoint

// const studentData = {
//   name: "Himanshu Kapoor",
//   reg_number: "20BCG10010",
//   email: "himanshukapoor898@gmail.com",
//   Phone: "128947578",
// };

// fetch(apiUrl, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(studentData),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Student record created successfully:", data);
//   })
//   .catch((error) => {
//     console.error("Error creating student record:", error);
//   });
