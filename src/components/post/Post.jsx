import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" 
            alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fuga in asperiores cupiditate impedit, excepturi ratione ducimus eveniet, nulla possimus voluptas sunt ipsam non eum hic odit quis delectus tenetur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolore porro harum neque rem adipisci fuga odit ab repellat voluptates, asperiores voluptate amet repellendus doloremque officia! Possimus soluta nihil molestiae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores temporibus quo, totam explicabo enim quos accusantium aliquid. Reprehenderit porro ipsa ea quisquam fugit nesciunt nobis asperiores numquam eos voluptates.
            </p>
        </div>
    )
}
