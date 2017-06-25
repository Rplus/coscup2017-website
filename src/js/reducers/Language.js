import { handleActions } from 'redux-actions'

const initialState = 'zh'

export default handleActions({
    PUT_LANGUAGE: {
        next (state, {payload}) {
            return payload
        }
    }
}, initialState)
