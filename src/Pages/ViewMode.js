import { Typography } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
export default function ViewMode(){//надо как-то получать сюда графики из OPtions
    return(
    <Container sx={{ bgcolor: 'grey', height: 800, alignItems: 'center' }}>
        <Typography>
            Graphs here
        </Typography>
    </Container>
)
}