$(document).ready(function () {

    $('#input').change(function () {
        const val = $(this).val();
        const remval = val / 16;
        console.log(remval);
        var spaces = [
            {
                'spacer': 5,
                'val': 3,
            },
            {
                'spacer': 4,
                'val': 1.5,
            },
            {
                'spacer': 3,
                'val': 1,
            },
            {
                'spacer': 2,
                'val': 0.5,
            },
            {
                'spacer': 1,
                'val': 0.25,
            }];
        let value =  remval;
        spaces.forEach(function (s) {
            console.log('count');
            console.log(s);
            if (value >= s.val) {
                console.log('count1', s.val);

                $('#response').append('<li>'+s.spacer+'</li>');

                value -=  s.val;
                if (remval === s.val) {
                    return;
                }
            }
        });



    })
});