// needed for regenerator-runtime
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Enzyme adapter for React 16
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
