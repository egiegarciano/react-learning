import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.avatar()} 
                    commentText="Nice!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00A" 
                    avatar={faker.image.avatar()} 
                    commentText="Nice blog!" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 10:45AM" 
                    avatar={faker.image.avatar()} 
                    commentText="Nice blog post!" 
                />
            </ApprovalCard>
        </div>
        
    );     
}; 

ReactDOM.render(<App />, document.querySelector('#root'));