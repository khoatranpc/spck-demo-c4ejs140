// xác thực các dữ liệu
const validationNumber = (number) => {
    if (Number(number)) {
        console.log(`${number} là 1 số!`);
    } else {
        console.log(`${number} không phải số!`);
    }
};
const mapState = () => { };

export {
    mapState
}
export default validationNumber;