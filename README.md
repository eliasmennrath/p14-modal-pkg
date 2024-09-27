# Modal Component

A simple and customizable modal component for React applications.

## Features

- Customizable content for the body, header, and footer.
- Optional click-outside-to-close functionality.
- Requires a trigger element as a child, which opens the modal when clicked.


## Installation

You can install the package using npm:

```bash
npm install your-modal-package
```


## Usage

To use the modal in your project, import it and provide the necessary props. The component requires a trigger element (e.g., a button) as a child to open the modal.


### Example
```jsx
import Modal from 'your-modal-package';

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

