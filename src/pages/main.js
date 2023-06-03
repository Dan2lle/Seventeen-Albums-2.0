import Form from '../components/Form'
import List from '../components/List'

export default function Main() {
    return (
        <div>
            {/* <div>
                <Navbar />
            </div> */}
            <h1>Seventeen albums</h1>
            <h2>Please enter your favorite albums in the form below!</h2>
            {/* <button onClick={() => dispatch(increment(1))}>More!</button>
            <button onClick={() => dispatch(decrement(1))}>Less!</button> */}
            <Form />
            <List />
        </div>
    )

} 