import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange:(page: number) => void;
}

const sibilingCount = 1

function generatePageArray(from: number, to: number){
    return [...new Array(to - from)]
        .map((_ , index) => { return from + index + 1})
        .filter(page => page > 0)
}

export function Pagination({ 
    totalCountOfRegisters, 
    registersPerPage = 10, 
    currentPage = 1, 
    onPageChange 
}: PaginationProps){
    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

    const previousPages = currentPage > 1 ? generatePageArray(currentPage - 1 - sibilingCount, currentPage - 1) : []

    const nextPages = currentPage < lastPage ? generatePageArray(currentPage, Math.min(currentPage + sibilingCount, lastPage)): []
    
    return(
        <Stack
            direction={["column","row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                {currentPage > (1 + sibilingCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1}/>
                        { currentPage > (2 + sibilingCount) && <Text color="grat.300" w="8" textAlign="center">...</Text>}
                    </>
                    
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange}  key={page} number={page}/>
                })}

                <PaginationItem onPageChange={onPageChange}  isCurrent number={currentPage}/>

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange}  key={page} number={page}/>
                })}

                {(currentPage + sibilingCount) < lastPage && (
                    <>
                        { (currentPage + 1 + sibilingCount) < lastPage && <Text color="grat.300" w="8" textAlign="center">...</Text>}
                        <PaginationItem onPageChange={onPageChange}  number={lastPage} />
                    </>
                    
                )}
            </Stack>
            
        </Stack>
    )
}