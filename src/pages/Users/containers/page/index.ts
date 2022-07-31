import componentWithReducer from '__store/componentWithReducer';

import {reducers} from '../../slices';
import Page from './Page';

export default componentWithReducer({Component: Page, reducers});
