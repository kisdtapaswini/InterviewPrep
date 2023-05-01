import { render, screen } from '@testing-library/react';
import Header from '../Header';


/**
 * All About diff methods usage --------starts-------------
 */
// GET, is widely used than find and query but in certain cases we need to use others as well
it('should renders the text as passed in title prop', () => {
  render(<Header title="my header"/>);
  const headingElement = screen.getByText(/my header/i); // component is working as per the prop has been passed
  expect(headingElement).toBeInTheDocument();
});

// it('should renders the text as passed in title prop', () => {
//     render(<Header title="My header"/>);
//     const headingElement = screen.getByRole("heading", {name : "My header"}); // If you only query for a single element with getByText('The name')
//     // it's oftentimes better to use getByRole(expectedRole, { name: 'The name' }) .
//     expect(headingElement).toBeInTheDocument();
//   });

//   it('should renders the text as passed in title prop', () => {
//     render(<Header title="My header"/>);
//     const headingElement = screen.getByTitle("Header");
//     expect(headingElement).toBeInTheDocument();
//   });


//   it('should renders the text as passed in title prop', () => {
//     render(<Header title="My header"/>);
//     const headingElement = screen.getByTestId("header-1");
//     expect(headingElement).toBeInTheDocument();
//   });


  // FINDBy works asynchronously 
//   it('should renders the text as passed in title prop', async() => {
//     render(<Header title="my header"/>);
//     const headingElement = await screen.findByText(/my header/i); // component is working as per the prop has been passed
//     expect(headingElement).toBeInTheDocument();
//   });


  // QueryBy

//   it('should renders the text as passed in title prop', async() => {
//     render(<Header title="my header"/>);
//     const headingElement = screen.queryByText(/dogs/i); // it works similar to getBy the only diff is
//     // it returns null if no result or match found however in case of getBy it throws error
//     expect(headingElement).not.toBeInTheDocument();
//   });
/**
 * All About diff methods usage --------ends-------------
 */


/**
 * All About Assertions --------starts-------------
 * 
 */

// it('should renders the text as passed in title prop', () => {
//     render(<Header title="my header"/>);
//     const headingElement = screen.getByText(/my header/i); // component is working as per the prop has been passed
//     expect(headingElement).toBeInTheDocument();
//   });
  


/**
 * All About Assertions --------ends-------------
 */