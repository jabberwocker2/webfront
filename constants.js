const constants = {}

constants.mode = "local";

if(constants.mode === 'local') {
    constants.base_url = "http://localhost:8000"
} else if(constants.mode === 'prod') {
    constants.base_url = "http://16.171.150.205"
}
export default constants;