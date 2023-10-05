import { Fragment } from "react";

function ListGroup(){
    let items = [
        'New York',
        'Tokyo',
        'Paris',
        'Mumbai',
        'Italy',
        'Switzerland'
    ];

    // items=[];

    // if (items.length == 0)
    // {
    //     return <p>No items found</p>
    // }

    return(
        <Fragment>

        {items.length === 0 ? <p>No items found</p> : null};

        <ul className="list-group">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>

        <h1>
            Heading 1
        </h1>
        </Fragment>
    );
}

export default ListGroup;