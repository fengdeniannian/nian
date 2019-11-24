$.ajax({
    type: 'get',
    url: '/posts',
    success: function (response) {
        var html = template('postsTpl', response)
        $('#postBox').html(html)
        var page = template('pageTpl', response)
        $('#pageBox').html(page)
    }
})

function formateDate(date) {
    date = new Date(date)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

function changePage(page){
    $.ajax({
        type: 'get',
        url: '/posts',
        data:{
            page:page
        },
        success: function (response) {
            var html = template('postsTpl', response)
            $('#postBox').html(html)
            var page = template('pageTpl', response)
            $('#pageBox').html(page)
        }
    })
    
}