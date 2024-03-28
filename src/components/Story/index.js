import React from "react";
import { Box, Text, Cover, Touchable, Title } from '../../components'

import { colors } from '../../styles/theme.json'


const Story = () => {
    return (
        <Touchable onPress={() => alert('teste')}
            background="black"
            radius="10px"
            height="190px"
            spacing="0px 5px 0px"
            width="150px"
        >
            <Cover width="100%" height="100%" image="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg">
                <Box hasPadding fluid background={`${colors.dark}80`} justify="space-between"  >
                    <Cover circle width="40px" height="40px" border={`1px solid ${colors.light}`} image="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg" />
                    <Box height="50px" justify="flex-end">
                        <Text bold color="light">bigbear444</Text>
                        <Text color="light">2 min ago</Text>
                    </Box>
                </Box>

            </Cover>
        </Touchable>

    )
}

export default Story