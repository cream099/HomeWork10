const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter() {
    return (
     <div className='counter'>
        <button> + </button>
        <h3>{0}</h3>
        <button> - </button>
        <button> c </button>
        <button> x </button>
     </div>
    )
}

function App() {
    return (
        <div className="text-center">
            <h1 className="text-center">Sum = 0</h1>
            <button>Add Counter</button>
            <Counter />
        </div>
    )
}
