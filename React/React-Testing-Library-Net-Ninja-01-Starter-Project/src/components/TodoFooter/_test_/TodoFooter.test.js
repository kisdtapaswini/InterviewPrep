import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

/**
 * 
    As the TodoFooter compoentn has   <Link to="/followers">Followers</Link> as part of React routing library
    we need to have a mock component where we will wrap TodoFooter within BrowserRouter
 */
const MockToDoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
        <TodoFooter 
            numberOfIncompleteTasks={numberOfIncompleteTasks}/> 
        </BrowserRouter>
    )
}

it('renders toDO task depending on number of in complete tasks', () => {
  render(<MockToDoFooter
     numberOfIncompleteTasks={2}/>);
  const paragraphElement = screen.getByText(/2 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});
