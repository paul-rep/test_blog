import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


// Define a type for the slice state
interface PostsState {
  showPosts: boolean,
  userId: number,
  searchQuery: string
}

// Define the initial state using that type
const initialState: PostsState = {
    showPosts: false,
    userId: 1,
    searchQuery: "",
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleShowPosts: state => {
      state.showPosts = !state.showPosts;
    },
    setShowPosts: (state, action: PayloadAction<boolean>)=> {
        state.showPosts = action.payload;
    },
    selectUser: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    searchUsers(state, action: PayloadAction<string>){
        state.searchQuery = action.payload
    }
  }
})

export const { toggleShowPosts,selectUser,searchUsers,setShowPosts } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectShowPosts = (state: RootState) => state.app.showPosts

export default appSlice.reducer