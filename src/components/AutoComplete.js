import React, {Component} from 'react'
import Autocomplete from 'react-autocomplete'


class AutoComplete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ''
        }
    }

    searchTerms = [
        'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ].slice(0, 15).map((value) => ({abbr: value, name: value}))


    matchStateToTerm = (state, value) => {
        return (
            value.trim().length > 0 &&
            (state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
             state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        )
    }

    render() {
        return (
            <Autocomplete
                value={this.state.searchTerm}
                inputProps={{id: 'states-autocomplete', className: "form-control", placeholder: "Search..."}}
                wrapperStyle={{position: 'relative'}}
                items={this.searchTerms}
                getItemValue={(item) => item.name}
                shouldItemRender={this.matchStateToTerm}
                onChange={(event, searchTerm) => {this.setState({searchTerm})}}
                onSelect={searchTerm => {
                    this.setState({searchTerm})
                    this.props.onSearch(searchTerm)
                }}
                renderMenu={children => (<div className="menu">{children}</div>)}
                renderItem={(item, isHighlighted) => (
                    <div
                        className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                        key={item.abbr}
                    >{item.name}</div>
                )}

            />
        )
    }
}

export default AutoComplete