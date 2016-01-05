
// bundle memory layout

// initialized in the library.

var state = []

// --

import 'devpins'; // initializes state atom above

// mutates hidden, shared state atom. this is unavoidable but not too bad as access can be controlled by the preprocessor and not exposed to users.
registerCard({
    // logical namespace of component. for the moment, added by the user or babel plugin.
    path: ['dir','name','file','name'],
    // function returns reified vtree
    func: () => {
        return <div>hi</div>
    }
})

class MyComponent {
    // ...
}

// ---

getPins()
/*

state = [
   {path: [...],
    func: -> ...},
   ...
]

*/

ReactDOM.render(<Devpins state={getPins()} />, document.getElementById('app'));

// initialize and load the view







