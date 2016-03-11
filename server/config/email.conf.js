const environment =  process.env.NODE_ENV || 'development';

const config = {
    development: {
        service: 'Gmail',
        auth: {
            user: '',
            pass: ''
        }
    },
    test: {
        service: 'Gmail',
        auth: {
            user: '',
            pass: ''
        }
    }
};

console.log("server/config/ environment: "+ environment)
export default config[environment];