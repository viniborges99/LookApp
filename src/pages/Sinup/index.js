import React from "react";
import { Box, Text, Title, Button, Spacer, Input } from "../../components"

const Sinup = ({navigation}) => {
    return (
        <Box justify="center" align="center" background="light" hasPadding>
            <Title bold>Create new account.</Title>
            <Text>Enter your details below:</Text>
            <Spacer size="50px"/>
            <Input  placeholder="Name"></Input>
            <Spacer/>
            <Input  placeholder="Email" ></Input>
            <Spacer/>
            <Input  placeholder="Password" secureTextEntry></Input>
            <Spacer size="50px"/>
            <Button block onPress={() => navigation.replace("Feed")} >
                <Text color="light">SignIn my account</Text>
            </Button>
            <Spacer size="20px"></Spacer>
            <Text underline onPress={() => navigation.goBack()}>Back to Home</Text>

        </Box>
    )
}

export default Sinup;