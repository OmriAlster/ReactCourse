import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({onAdd}) => {
    return (
        <header className='header'>
            <h1> My Tasks </h1>
            <Button inside='white'outside='green' text='Add' onClick={onAdd}></Button>
        </header>
    )
}

// Css in 
// const headingStyle = {
//     color: 'orange', backgroundColor: 'peru'
// }

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
