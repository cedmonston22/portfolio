type FacetCardProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  isInteractive?: boolean;
};

export default function FacetCard({
  children,
  className = "",
  contentClassName = "",
  isInteractive = false,
}: FacetCardProps): React.ReactElement {
  return (
    <div className={`facet ${isInteractive ? "facet-interactive" : ""} ${className}`}>
      <div aria-hidden="true" className="facet-back facet-clip" />
      <div className={`facet-front facet-clip ${contentClassName}`}>{children}</div>
    </div>
  );
}
