const initialState = {
    completed: False,
    mower: '',
    owner: '',
    address: '',
    startDate: '',
    endDate: '',



}

const HANDLE_START_DATE = 'HANDLE_START_DATE'
const HANDLE_END_DATE = 'HANDLE_END_DATE'

function reducer(state = initialState, action) {
    switch (action.type) {

        case HANDLE_START_DATE:
            return Object.assign({}, state, { startDate: action.payload })

        case HANDLE_END_DATE:
            return Object.assign({}, state, { endDate: action.payload })

        default:
            return state;
    }
}

export function handleStartDate(startDate) {
    return {
        type: HANDLE_START_DATE,
        payload: startDate
    }
}
export function handleEndDate(endDate) {
    return {
        type: HANDLE_END_DATE,
        payload: endDate
    }
}

export default reducer;