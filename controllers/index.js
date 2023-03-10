const awesomeFunction = (req, res, next) => {
    res.json('Awesome person');
};

const superAwesomeFunction = (req, res, next) => {
    res.json('Super awesome person');
};

const someoneNameFunction = (req, res, next) => {
    res.json('Nikita Yazvinskiy');
};

module.exports = { awesomeFunction, superAwesomeFunction, someoneNameFunction };