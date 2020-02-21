const defaults = {
    opt1: 'foo',
    opt2: 'bar',
    opt3: 'buzz'
};

export default (options) => {
    console.log(`default:`, defaults);
    options = {
        ...defaults,
        ...options
    };

    return (req, res, next) => {
        console.log(`options: `, options);
        next();
    };
}