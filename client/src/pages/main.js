import Form from '../components/Form'
import List from '../components/List'
import { StyledHeader } from '../components/styles/Header.styles.js'

export default function Main() {
    return (
        <div>
            
                <StyledHeader>
                    <h1>Seventeen albums</h1>
                </StyledHeader>
                <StyledHeader>
                    <h2>Please enter your favorite albums in the form below!</h2>
                </StyledHeader>
                <Form />
                <List />
            
        </div>
    )

} 