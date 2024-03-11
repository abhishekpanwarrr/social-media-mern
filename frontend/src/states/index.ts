import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
    friends?: User[];
    firstName: string
    lastName: string
    occupation: string
    location: string
}

interface Post {
    _id: string;
}

interface AuthState {
    mode: "light" | "dark";
    user: User | null;
    token: string | null;
    posts: Post[];
}

interface SetLoginPayload {
    user: User;
    token: string;
}

interface SetFriendsPayload {
    friends: User[];
}

interface SetPostPayload {
    post_id: string;
    post: Post;
}

const initialState: AuthState = {
    mode: "light",
    user: null,
    token: null,
    posts: []
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setLogin: (state, action: PayloadAction<SetLoginPayload>) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setFriends: (state, action: PayloadAction<SetFriendsPayload>) => {
            if (state.user) {
                state.user.friends = action.payload.friends
            } else {
                console.log("");

            }
        },
        setPosts: (state, action: PayloadAction<{ posts: Post[] }>) => {
            state.posts = action.payload.posts
        },
        setPost: (state, action: PayloadAction<SetPostPayload>) => {
            const updatedPosts = state.posts.map(post => {
                if (post._id === action.payload.post_id) {
                    return action.payload.post
                }
                return post
            })
            state.posts = updatedPosts
        }
    }
})

export const { setMode, setLogin, setLogout, setFriends, setPost, setPosts } = authSlice.actions;
export default authSlice.reducer