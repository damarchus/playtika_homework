import {Component} from "react";
import PostsContainer from "./PostsContainer";
import {getJson} from "../utils/JsonUtils";

class Lesson3 extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            posts: [],
            users: [],
        };
    }

    async componentDidMount() {
        let posts = await getJson("https://jsonplaceholder.typicode.com/posts");
        let users = await getJson("https://jsonplaceholder.typicode.com/users");

        this.setState((prevState) => ({...prevState, posts: posts, users: users, loading: false}));
    }

    componentWillUnmount() {
        this.setState((prevState) => ({...prevState, loading: true}));
    }

    render() {
        return(
            <PostsContainer posts={this.state.posts} users={this.state.users} loading={this.state.loading}/>
        )
    }
}

export default Lesson3;