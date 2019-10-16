import React from 'react';


class Searcher extends React.Component {

    SearcRef = React.createdRef();

    obtainData = (e) => {
        e.preventDefault();

        // Tomamos el valor del imput
        const term = this.searchRef.current.value;

        //  Lo enviamos al componente principal
        this.props.dataSearch(term);
    }

    render() {
        return (
            <form className="form-inline">
                <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search Brand" aria-label="Search"/>
                </div>
            </form>
        )
    }

}
export default Searcher