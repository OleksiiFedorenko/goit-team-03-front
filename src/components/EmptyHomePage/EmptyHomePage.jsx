import { Container, InfoText, MarkedText } from "./EmptyHomePage.styled";

export const EmptyHomePage = () => {
    return (
        <Container>
            <InfoText>
                Before starting your project, it is essential
                <MarkedText> to create a board</MarkedText> to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
            </InfoText>
        </Container>
    );
};