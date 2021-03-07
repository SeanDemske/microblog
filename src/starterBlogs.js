import { v4 as uuidv4 } from 'uuid';

const starterBlogs = [
    {
        id: uuidv4(),
        title: "Dog runs for president 2024",
        description: "The goodest boy of them all, to rule them all",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus beatae tempora magnam officia fuga accusantium, quae, iusto facere harum dolore aspernatur voluptas odio quo? Hic, sequi qui tempore amet earum, esse quam facilis sunt exercitationem possimus ex! Dolorem, eius natus recusandae porro non aliquid dolore repellat laudantium dolorum blanditiis debitis.",
        comments: [
            {
                id: uuidv4(),
                comment: "This is a comment"
            },
            {
                id: uuidv4(),
                comment: "This is another comment"
            },
            {
                id: uuidv4(),
                comment: "yargo"
            }
        ]
    },
    {
        id: uuidv4(),
        title: "Aliens take over the world",
        description: "What's next this year",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus beatae tempora magnam officia fuga accusantium, quae, iusto facere harum dolore aspernatur voluptas odio quo? Hic, sequi qui tempore amet earum, esse quam facilis sunt exercitationem possimus ex! Dolorem, eius natus recusandae porro non aliquid dolore repellat laudantium dolorum blanditiis debitis."
    }
]

export default starterBlogs;
