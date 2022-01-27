$('#submit').on('click'  , function(event){
    event.preventdefault()
    let name = $('#user_name').val();
    console.log(name)
    let task = $('#task').val();
    console.log(task)
})
// $.ajax({
//     url :'http://127.0.0.1:8000/',
//     method:'POST',
//     // data: data,
//     success: function () {
//         console.log(status )

//     }
// })