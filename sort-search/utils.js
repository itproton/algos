
const randRange = (fromInc, toInc) => {
    const min = Math.ceil(fromInc);
    const max = Math.floor(toInc)
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const arrRand = (n, from = -100, to = 100) => (Array(n).fill().map(_ => randRange())

module.exports = {
    randRange,
    arrRand
}