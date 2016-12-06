ServiceDirectoryModule.directive('adaptiveInput', function() {
    return {
        restrict: 'E',
        template: "<div class='hidden-elem'></div><form class='fsearch'><input type='button', class='search-btn'/><input type='text', class='search-txt', placeholder='Company Name'/></form>",
        link: function(scope, elem, attrs) {
            var hiddenElem = document.querySelector('.hidden-elem'),
                inputs = elem.find('input');

            inputs.eq(1).on('input', function () {
                elem.find('div').eq(0).text(this.value);

                var witdhBlock = hiddenElem.offsetWidth;

                if (witdhBlock > 400) {
                    elem.css('width', 40 + witdhBlock +'px');
                }
            });

            inputs.eq(1).on('blur', function () {
                elem.css('width', '434px');
            });

            inputs.eq(1).on('focus', function () {
                var witdhBlock = hiddenElem.offsetWidth;

                if (witdhBlock > 400) {
                    elem.css('width', 40 + witdhBlock + 'px');
                }
            });
        }
    };
});
