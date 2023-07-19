import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './date';

export const store = configureStore({
  reducer: {
    dateSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
