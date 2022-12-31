import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import scheduleOverviewSlice from '../features/scheduleOverview/scheduleOverviewSlice';
import LoginSlice from '../features/login/loginSlice';


export const store = configureStore({
  reducer: {
    scheduleOverviewSlice: scheduleOverviewSlice,
    LoginSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
