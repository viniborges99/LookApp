import React from "react";
import { Title, Text, Button, Box, Spacer } from "../../components"


const Home = ({navigation}) => {
    return (
        <Box hasPadding align="center" background="dark">
            <Box justify="center" align="center" fluid >
                <Title color="light" variant="big" bold>LOOKAPP</Title>
                <Spacer />
                <Text align="center" spacing="0px 40px">Stay on top of the fashion world and buy your favorite looks.</Text>
            </Box>
            <Box align="center" fluid justify="flex-end"  >
                <Button block onPress={()=> navigation.navigate("Signin")}>
                    <Text color="light">SigIn my account</Text>
                </Button>
                <Spacer size="20px"></Spacer>
                <Text underline color="light" onPress={() => navigation.navigate("Sinup")}>Create new account</Text>
                <Spacer size="70px" />
            </Box>
        </Box>

    )
}
export default Home