import React from "react";
import { Box, Text, Title, Button, Spacer, Input } from "../../components"
import { StatusBar } from "react-native";


const Signin = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Box justify="center" align="center" background="light" hasPadding>
                <Title bold variant="big">LOOKAPP</Title>
                <Spacer size="50px" />
                <Title bold>SignIn my account.</Title>
                <Spacer size="50px" />
                <Input placeholder="Email" ></Input>
                <Spacer />
                <Input placeholder="Password" secureTextEntry></Input>
                <Spacer size="50px" />
                <Button block onPress={() => navigation.replace("Feed")}>
                    <Text color="light">SignIn my account</Text>
                </Button>
                <Spacer size="20px"></Spacer>
                <Text underline onPress={() => navigation.navigate("Sinup")}>Create new account</Text>

            </Box>
        </>
    )
}

export default Signin;