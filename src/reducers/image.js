const UPLOAD_START = 'UPLOAD_START';
const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
const UPLOAD_FAIL = 'UPLOAD_FAIL';


const initialState = {
    image: 'https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif'
};

export default function image(state = initialState, action = {}) {
    switch (action.type) {
        case (UPLOAD_START):
            return {
                ...state,
                uploading: true
            };
        case (UPLOAD_SUCCESS):
            return {
                ...state,
                uploading: false,
                image: action.response.data
            };
        case (UPLOAD_FAIL):
            return{
                uploading:false,
                error:action.error
            }
        default:
            return state
    }
}

export function uploadImage() {

};