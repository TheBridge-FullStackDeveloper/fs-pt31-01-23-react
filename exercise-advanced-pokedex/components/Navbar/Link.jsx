
import Styled from "./Style"
import { Link as WouterLink, useRoute } from "wouter";

const Link = ({ href, children }) => {
  const [isActive] = useRoute(href);

  return (
    <WouterLink to={href}>
      <Styled.StyledLink className={isActive ? "active" : ""}>{children}</Styled.StyledLink>
    </WouterLink>
  );
};

export default Link;