import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        authLoading: false,
        vodDetailsLoading: false,
        genreMoviesLoading: true,
        videoLoading: false,
        searchResultsLoading: false,
        activeSeriesGenre: "",
        activeMovieGenre: "All",

        searchQuery: "",
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },

        setSearchResultsLoading: (state, action) => {
            state.searchResultsLoading = action.payload
        },

        setActiveMovieGenre: (state, action) => {
            state.activeMovieGenre = action.payload
        },

        setActiveSeriesGenre: (state, action) => {
            state.activeSeriesGenre = action.payload
        },

        setGenreMoviesLoading: (state, action) => {
            state.genreMoviesLoading = action.payload
        },

        setAuthLoading: (state, action) => {
            state.authLoading = action.payload
        },

        setVODDetailsLoading: (state, action) => {
            state.vodDetailsLoading = action.payload
        },

        setVideoLoading: (state, action) => {
            state.videoLoading = action.payload
        },
    }
})

export default uiSlice.reducer
export const { setAuthLoading, setVODDetailsLoading, setVideoLoading,
    setActiveMovieGenre, setActiveSeriesGenre, setGenreMoviesLoading,
    setSearchQuery, setSearchResultsLoading, } = uiSlice.actions