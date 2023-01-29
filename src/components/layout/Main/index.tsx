import { FC, ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import './styles.scss';

type Props = {
    children: ReactNode
    className?: string

}


const Main: FC<Props> = ({ children, className }) => {
    return (
        <Container >
            <main className={`${className} mt-3`} >
                {children}
            </main>
        </Container>
    )
}

export { Main };