const defaults ={
    opt1: 'foo',
    opt2: 'bar',
    opt3: 'buzz'
  };

  function validAuth(token) {
    console.log('token: ', token);

    token = token.replace('Basic', '').trim();
    const identity = Buffer.from(token, 'base64').toString();

    console.log('real token: ', identity);
    
    return identity === process.env.BASIC_AUTH;
  }

  export default (options) => {
    console.log(`defaults:`, defaults);
    options = {
      ...defaults,
      ...options
    };
  
    return (req, res, next) => {
      options = {...defaults, ...options}
      const token = req.get('authorization');

      if (!validAuth(token)) {
        res.status(401).json({message: 'INVALID AUTHORIZATION TOKEN'})
      }
      console.log(`options: `, options);
      next();
  
    };
  }