import { combineReducers } from 'redux';
import { artistReducer } from './artists/artists.reducer';
import { authReducer } from './auth/auth.reducer';
import { postReducer } from './posts/posts.reducer';
import { roleReducer } from './role/role.reducer';
import { userReducer } from './users/users.reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    roles: roleReducer,
    artist: artistReducer,
    user: userReducer,
    post: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;