//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzQyODAxLCJleHAiOjE2NjE3NDY0MDEsIm5iZiI6MTY2MTc0MjgwMSwianRpIjoiTDRTV1pVTVNQb3ZRaHNQMyIsInN1YiI6ODcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Xq5K1jpMeMJnA8mZu30I_83t_sd1x42mMnqLtnJl5bs"; // put access token
const student = {
  id_student:63367230,
  name: 'Hattakorn', // replace with your full name.
  age: 20, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzQyODAxLCJleHAiOjE2NjE3NDY0MDEsIm5iZiI6MTY2MTc0MjgwMSwianRpIjoiTDRTV1pVTVNQb3ZRaHNQMyIsInN1YiI6ODcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Xq5K1jpMeMJnA8mZu30I_83t_sd1x42mMnqLtnJl5bs`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}