import React from "react";
import { ListItem, Avatar } from "@react-native-material/core";
// import users from './users.json'
const users = [
    {
        "id": "001",
        "name": "Lisa",
        "age": "25",
        "city": "Chicago",
    },
    {
        "id": "002",
        "name": "Kane",
        "age": "31",
        "city": "New York",
    },
    {
        "id": "003",
        "name": "Mark",
        "age": "37",
        "city": "Chicago",
    },
];

const PostList = () => {
    return (
        <>
            {
                users.map(p => (
                    <ListItem key={p.id}
                        leadingMode="avatar"
                        leading={
                            <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
                        }
                        title={p.name}
                        secondaryText={p.city}
                    />
                ))
            }
        </>
    )
};

export default PostList;