const initialState = {
    currentSlide: 0
}

export const slideReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADVANCE_SLIDE':
            return { currentSlide: (state.currentSlide + 1) % 3 };
        default:
            return state;
    }
}
