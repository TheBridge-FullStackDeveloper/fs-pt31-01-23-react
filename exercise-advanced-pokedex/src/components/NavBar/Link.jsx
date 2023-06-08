import { Link as WouterLink, useRoute } from "wouter";

const Link = ( {href, children} ) => {

    const [isActive] = useRoute(href);

    return (
        <>
            <WouterLink to={href}>
                <Styled.StyledNavBar className={isActive ? "active" : ""}>{children}</Styled.StyledNavBar>
            </WouterLink> 
        </>
    );

}