const getElementsAsync=async(idPost)=>{
    try{
        const resPost= await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        const post =await resPost.json();
        //console.log(post);

        const resUser= await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await resUser.json();
        console.log(user);

        let texto="";
        texto += `<li>${user.id} - ${user.name} | ${user.username} | ${user.phone} | ${user.email}</li>`;
        document.getElementById("informacion").innerHTML=texto;
        
    }catch(e){
        console.log(e);
    }
}

getElementsAsync(8);