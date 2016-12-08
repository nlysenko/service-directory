ServiceDirectoryModule.directive('adaptiveInput', function() {
    return {
        restrict: 'E',
        template: "<div class='hidden-elem'></div><form class='fsearch'><input type='button', class='search-btn'/><input type='text', class='search-txt', placeholder='Company Name'/></form>",
        link: function(scope, elem, attrs) {
            var hiddenElem = document.querySelector('.hidden-elem'),
                inputElem = elem.find('input').eq(1);

            inputElem.on('input', function () {
                elem.find('div').eq(0).text(this.value);

                var blockWidth = hiddenElem.offsetWidth;

                if (blockWidth > 400) {
                    elem.css({
                        width: 40 + blockWidth +'px'
                    });
                }
            });

            inputElem.on('blur', function () {
                elem.css({
                    width: '434px'
                });
            });

            inputElem.on('focus', function () {
                var blockWidth = hiddenElem.offsetWidth;

                if (blockWidth > 400) {
                    elem.css({
                        width: 40 + blockWidth + 'px'
                    });
                }
            });
        }
    };
});
