import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({children}) {
  return (
    <div>
      <Container maxWidth="lg"  className='mt-10'>{children}
      
      </Container>
    </div>
  )
}

export default PageContainer
