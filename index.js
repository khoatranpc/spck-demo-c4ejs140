import validationNumber from "./utils/validate.js";

validationNumber('1997');

// rest, spread -> về mặt tác dụng đem lại,
// mục đích là để lấy các giá trị phần tử từ object hoặc array nhanh chóng hơn
// sau này gọi chung là destructering

// rest, spread đều có cú pháp dùng ... ở trước object, hoặc array
// kết quả đem lại, là lấy tất cả các thuộc tính của object
// hoặc các phần của phần tử của array ra bên ngoài

const user = {
    name: 'Doraemon',
    age: 5
};
const newUser = {
    ...user,
    name: 'Nobita',
    age: 5,
}
// đối với array tương tự như vậy
console.log(newUser);
//spread dùng tươi

//rest -> kỹ thuật này dùng đối với tham số trong function
const demoRest = (...list) => {
    console.log(list);
}
demoRest(1, 2, 3, 4, 5);


// Object

const Doraemon = {
    age: 10,
    location: 'Japan',
    bag: {
        name: 'Chanel'
    }
}

const { age, location, bag } = Doraemon;
console.log(age);

// Array

const arrNumber = [1, 2, 3, 4, 5];

const [index1, khoa, ...list] = arrNumber;
console.log(list);