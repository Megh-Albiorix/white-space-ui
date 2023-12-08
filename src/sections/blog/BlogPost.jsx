import Tag from "./Tag";

const BlogPost = ({ imgSrc, blogHeading, blogText }) => {
	return (
		<div className="blog-post">
			<div className="blog__img-box">
				<img src={imgSrc} alt="Blog Image" className="blog-img" />
			</div>
			<div className="blog-box">
				<div className="blog-profile-details">
					<img
						src="./assets/Avatar.png"
						alt="Profile Pic"
						className="blog-profile-img"
					/>
					<div className="blog-profile-box">
						<h4 className="blog-profile-heading">Jenny Wilson</h4>
						<p className="blog-profile-text">May 9, 2023</p>
					</div>
				</div>
				<div className="blog-post-details">
					<h3 className="blog-post-heading">{blogHeading}</h3>
					<p className="blog-post-text">{blogText}</p>
				</div>
				<div className="blog-tags">
					<Tag className="blog-tags-bg-1" tagText="UI/UX" />
					<Tag className="blog-tags-bg-2" tagText="Studio" />
					<Tag className="blog-tags-bg-3" tagText="Web Design" />
					<Tag className="blog-tags-bg-4" tagText="+2" />
				</div>
			</div>
		</div>
	);
};

export default BlogPost;
