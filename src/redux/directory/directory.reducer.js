

const INTIAL_STATE={
    sections:[{
        title:'hats',
        imageUrl:'https://cdn.pixabay.com/photo/2016/07/11/15/43/pretty-woman-1509956_960_720.jpg',
        id:1,
        linkUrl:'shop/hats'
    },{
        title:'jackets',
        imageUrl:'https://cdn.pixabay.com/photo/2016/11/29/01/34/fashion-1866572_960_720.jpg',
        id:2,
        linkUrl:'shop/jackets',
    },{
        title:'sneakers',
        imageUrl:'https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_960_720.jpg',
        id:3,
        linkUrl:'shop/sneakers',
    },{
        title:'womens',
        imageUrl:'https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056_960_720.jpg',
        size:'large',
        id:4,
        linkUrl:'shop/womens',
    },{
        title:'mens',
        imageUrl:'https://cdn.pixabay.com/photo/2016/03/09/10/23/model-1246028_960_720.jpg',
        size:'large',
        id:5,
        linkUrl:'shop/mens',
    },]
};

const directoryReducer=(state=INTIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
};
export default directoryReducer;
