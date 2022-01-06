import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps){
    return(
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>André Gomes</Text>
                    <Text color="gray.300" fontSize="small">
                        andrepedro51@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="André Gomes" src="https://github.com/AndrePedro51.png" />
        </Flex>
    )
}