import React from "react";
import { Box, Title, Text, ScrollView } from "../../components"
import Post from ".";

const PostList = () => {
    return (

        <Box >
            {Array.from(Array(30))?.map(item => (<Post/>))}

        </Box>


    )
}


export default PostList