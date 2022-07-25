import React from "react";
import { ListItem } from "@react-native-material/core";
// import users from './users.json'
users = [
    {
        "id": "003",
        "name": "Lisa",
        "age": "25",
        "city": "Chicago",
    },
    {
        "id": "004",
        "name": "Kane",
        "age": "31",
        "city": "New York",
    },
    {
        "id": "005",
        "namev": "Mark",
        "age": "37",
        "city": "Chicago",
    },
];

const PostList = () => {
    return (
        // <>
        //     {
        //         users.map((user, i) => {
        //             <ListItem key={i} title={user.id} />
        //         })
        //     }
        // </>
        <>
            <ListItem title="List Item" />
            <ListItem title="List Item" />
            <ListItem title="List Item" />
        </>
    )
};

export default PostList;