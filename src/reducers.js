import { combineReducers } from 'redux';
import moviesModule from './modules/movies/reducer';
import movieByIdModule from './modules/movieById/reducer';
import controls from './containers/controls/reducer';


export default combineReducers({
  moviesModule,
  movieByIdModule,
  controls,
});
