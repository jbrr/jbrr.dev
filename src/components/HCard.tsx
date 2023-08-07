import type { authorFrontmatter } from "@content/_schemas";

interface Props {
  frontmatter: authorFrontmatter;
  hideCard?: boolean;
}

export default function HCard({ frontmatter, hideCard }: Props) {
  const {
    name,
    givenName,
    familyName,
    photo,
    url,
    email,
    locality,
    region,
    country,
    genderIdentity,
    key,
  } = frontmatter;

  return (
    <div className={"h-card " + (hideCard ? "hidden" : "")}>
      <span className="p-name">{name}</span>
      givenName && <span className="p-given-name">{givenName}</span>
      familyName && <span className="p-family-name">{familyName}</span>
      photo && <img className="u-photo" src={photo} alt={name} />
      url &&{" "}
      <a className="u-url" href={url}>
        website
      </a>
      email &&{" "}
      <a className="u-email" href={`mailto:${email}`}>
        email
      </a>
      locality && <span className="p-locality">{locality}</span>
      region && <span className="p-region">{region}</span>
      country && <span className="p-country">{country}</span>
      genderIdentity &&{" "}
      <span className="p-gender-identity">{genderIdentity}</span>
      key && <span className="u-key">{key}</span> (GPG Fingerprint)
    </div>
  );
}
