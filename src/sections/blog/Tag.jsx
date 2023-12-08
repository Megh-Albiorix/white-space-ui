const Tag = ({ tagText, className }) => {
	return <div className={"blog-tag " + className}>{tagText}</div>;
};

export default Tag;
