function E() {
    const handler = () => console.log('fourth example')
    return (
        <div>
            <button onClick={handler} >
                Click Me!
            </button>
        </div>
    )
}
export default E;