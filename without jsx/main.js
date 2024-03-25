


// <div id="main1">
//     <h1>this is heading 1</h1>
//     <h2>this is heading 2</h2>
// </div>
// <div id="main2">
//     <h1>this is heading 1</h1>
//     <h2>this is heading 2</h2>
// </div>


let heading = [React.createElement('div',{id:"main1"},
[React.createElement('h1',{},'this is heading1'),
React.createElement('h2',{},'this is heading2')]
),React.createElement('div',{id:"main2"},
[React.createElement('h1',{},'this is heading1'),
React.createElement('h2',{},'this is heading2')]
)]

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);