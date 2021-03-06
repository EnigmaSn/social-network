
const state = {
    profilePage: {
        postsData: [
            {
                id: 1,
                message: 'Hi, how are you',
                likesCount: 3
            },
            {
                id: 2,
                message: 'I\'m fine',
                likesCount: 26
            },
        ],
    },
    messagePage: {
        dialogsData: [
            {
                id: 1,
                name: 'User1'
            },
            {
                id: 2,
                name: 'User2'
            },
            {
                id: 3,
                name: 'User3'
            },
            {
                id: 4,
                name: 'User4'
            },
            {
                id: 5,
                name: 'User5'
            },
        ],
        messagesData: [
            {
                id: 1,
                message: 'text1',
                user: 1
            },
            {
                id: 2,
                message: 'text2',
                user: 2
            },
            {
                id: 3,
                message: 'text3',
                user: 1
            },
        ],
    },
    sidebar: {
        friendsData: [
            {
                id: 2,
                name: 'Misha'
            },
            {
                id: 3,
                name: 'Alex'
            },
            {
                id: 4,
                name: 'Sacha'
            }
        ]
    }
};

export default state;