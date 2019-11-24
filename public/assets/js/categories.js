
$('#addcategories').on('submit', function () {
    var formData = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/categories',
        data: formData,
        success: function () {
            location.reload();
        }
    })
    return false;
})

$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {

        var html = template('categoryListTpl', { data: response })

        $('#categoryBox').html(html)

    }
})

$('#categoryBox').on('click', '.edit', function () {
    var id = $(this).attr('data-id')
    $.ajax({
        type: 'get',
        url: '/categories/' + id,
        success: function (response) {
            var html = template('modifyCategorytpl', response)
            $('#formbox').html(html)
        }
    })
})

$('#formbox').on('submit', '#modifycategory', function () {
    var formData = $(this).serialize();

    var id = $(this).attr('data-id');

    $.ajax({
        type: 'put',
        url: '/categories/' + id,
        data: formData,
        success: function (response) {
            location.reload();
        },
        error: function () {
            alert('wrong')
        }
    })
    return false;
})

$('#categoryBox').on('click', '.delete', function () {
    if (confirm('are you sure?')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/categories/' + id,
            success: function () {
                location.reload()
            }
        })
    }
})
