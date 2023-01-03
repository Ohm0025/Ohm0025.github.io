const root = ReactDOM.createRoot(document.getElementById('root'))
const element1 = React.createElement("h1",{},"Hello My Friend")
const element2 = React.createElement("div",{},
    React.createElement("p",{},"Friend List"),
    React.createElement("ul",{},
        React.createElement("li",{},"John"),
        React.createElement("li",{},"Jack"),
        React.createElement("li",{},"Jane")
    )
)
root.render([element1,element2])
