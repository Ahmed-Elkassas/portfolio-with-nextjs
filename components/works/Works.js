import {AiOutlineFolder} from 'react-icons/ai';
import {FiExternalLink} from 'react-icons/fi'

import { GridContainer,GridItem, Title, MainSection } from 'styles/global';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, ImgContainer } from './workStyles';

import {projects} from 'public/data/constants'
import { ShowMoreButton } from 'components/helpers/ShowMoreButton';

const Works = () => {
  return (
    <MainSection padding id="work">
        <Title blue>
            Work
        </Title>
        <GridContainer>
            {projects.map(item => {
                return (
                    <GridItem key={item.id}>
                       <Card>
                         <header style={{width: '100%'}}>
                            <CardHeader>
                                <div className='project__folder'> 
                                    <AiOutlineFolder size="4rem" />
                                </div>
                                <div className='project__links'> 
                                    <a href={item.source}>
                                        <FiExternalLink size="2rem" />
                                    </a>
                                </div>
                            </CardHeader>
                            <ImgContainer>
                            <CardTitle>{item.title}</CardTitle>
                            <img src={item.img} alt={item.title} /></ImgContainer>
                            <ShowMoreButton textLimit="50">{item.description}</ShowMoreButton>
                         </header>
                         <CardFooter>
                            {item.tags.map((tag, idx) => (
                                <span key={idx}>{tag}</span>
                            ))}
                         </CardFooter>
                       </Card>
                    </GridItem>
                )
            })}
        </GridContainer>
    </MainSection>
  )
}

export default Works;