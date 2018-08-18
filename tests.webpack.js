import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

const testsContext = require.context('.', true, /_test$/);
testsContext.keys().forEach(testsContext);