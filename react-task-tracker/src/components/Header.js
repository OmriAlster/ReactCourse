import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1> Hello from Header</h1>
            <Button inside='white'outside='red' text='Add' onClick={onClick}></Button>
        </header>
    )
}

// Css in 
// const headingStyle = {
//     color: 'orange', backgroundColor: 'peru'
// }

Header.defaultProps = {
    title: 'Omri'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
