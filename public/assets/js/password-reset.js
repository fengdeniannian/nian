$('#modifyForm').on('submit', function () {
    var formDate = $(this).serialize();
$.ajax({
    url:'/users/password',
    type:'put',
    data:formDate,
    success:function(){
       location.href='/admin/login.html'
    }
})
    return false;
})