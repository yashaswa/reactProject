const heading = React.createElement(
    "h1",
    {id: "heading"},
     "hello world form myself" );
     

     const parent = React.createElement(
        "div",
        {id : "parent"},
        React.createElement( "div",{id: "child"},

        [
            React.createElement("h1",{id: "heading"},"this is h1 tag"),
            React.createElement("h2",{id: "heading"},"this is h3 tag"),
            React.createElement("h3",{id: "heading"},"this is h3 tag")
        ]
        )
     )

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);
