// Первый способ: export переменных по отдельности
// export const animal = {
//     type: "Tiger",
//     fullname: "Lion",
//     age: 10,
//     color: "Orange Striped",
//     IsPlanteater: false,
//     avatarURL:
//       "https://images.pexels.com/photos/206622/pexels-photo-206622.jpeg?cs=srgb&dl=dschungel-grosse-katze-safari-206622.jpg&fm=jpg",
//   };

// export const hello = "Hello, it's My first React component";

// export const getPlanteaterStatus = (isPlanteater) => {
//   if (isPlanteater) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// };

/////////////////////////////////////////////////////////////////////////////////

// Второй способ export всех переменных в одном месте, т.е в фигурных скобках

const animal = {
    type: "Tiger",
    fullname: "Lion",
    age: 10,
    color: "Orange Striped",
    IsPlanteater: false,
    avatarURL:
      "https://images.pexels.com/photos/206622/pexels-photo-206622.jpeg?cs=srgb&dl=dschungel-grosse-katze-safari-206622.jpg&fm=jpg",
  };

const hello = "Hello, it's My first React component";


const getPlanteaterStatus = (isPlanteater) => {
  if (isPlanteater) {
    return "Yes";
  } else {
    return "No";
  }
};

export {animal,hello,};

export default getPlanteaterStatus