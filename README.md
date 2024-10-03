# Modal Component

A simple and customizable modal component for React applications.

## Features

- Customizable content for the body, header, and footer.
- Optional click-outside-to-close functionality.
- Requires a trigger element as a child, which opens the modal when clicked.


## Installation

You can install the package using npm:

```bash
npm install elias-mennrath_modal-pkg
```


## Usage

To use the modal in your project, import it and provide the necessary props. The component requires a trigger element (e.g., a button) as a child to open the modal.

### Example
```jsx
import Modal from 'elias-mennrath_modal-pkg';

function App() {
  return (
    <Modal 
      body="Employee Created!" 
      header={<h2>Success</h2>} 
      outsideClick={true}
    > 
      <button type="submit" className="p-button">Save</button>
    </Modal>
  );
}

export default App;
```


## Options
    
     - body : it should contain the modal body content. body can be text or html
     - header : it should contain the modal header content. It can be text or html and is optionnal
     - footer : it should contain the modal footer content. It can be text or html and is optionnal
     - outsideClick : it should be a boolean value, if set to true, the modal will close when the user clicks outside the modal.
