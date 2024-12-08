import { configureStore } from '@reduxjs/toolkit';
import stopLocationReducer from './slice/StopLocation';
import stopTextReducer from './slice/StopText';

export const store = configureStore({
    reducer: {
        stopText: stopTextReducer,
        stopDefinition: stopLocationReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
